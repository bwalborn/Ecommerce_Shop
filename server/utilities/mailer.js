const nodemailer = require('nodemailer');  // => npm i all
const smtpTransport = require('nodemailer-smtp-transport');
const emailTemplate = require('email-templates');
const previewEmail = require('preview-email');
const path = require('path');
import dotenv from 'dotenv';




const transport = {
  port: 587,
  secure: false,
  requireTLS: true,
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
};

const transporter = nodemailer.createTransport(smtpTransport(transport));

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

const email = new emailTemplate({
  transport: transporter,
  send: true,
  //send status will eventually need to be updated to true
  preview: true,
});


function sendOrderConfirmationEmail(nomination) {
  email.send({
    template: 'orderConfirmation',
    message: {
      from: process.env.MY_EMAIL_ADDRESS,
      replyTo: process.env.MY_EMAIL_ADDRESS,
      to: order.user.email,
    },
    locals: {
      name: order.user.name,
      id: order.user.id,
      appUrl: process.env.APP_URL
    }
  }).then(() => console.log('email has been sent!'))
    .catch(console.error);
}

function sendOrderPurchasedEmail(nomination) {
  email.send({
    template: 'orderPurchased',
    message: {
      from: process.env.MY_EMAIL_ADDRESS,
      to: process.env.MY_EMAIL_ADDRESS, 
    },
    locals: {
      id: order.user.id,
      name: order.user.name,
      email: order.user.email,
      address: order.user.address,
      appUrl: process.env.APP_URL,
    }
  }.catch((err) => console.log(err))).then(() => console.log('email has been sent!'));
}

module.exports = {
  sendOrderPurchasedEmail,
  sendOrderConfirmationEmail
}
