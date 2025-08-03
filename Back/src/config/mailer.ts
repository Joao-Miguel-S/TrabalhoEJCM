import nodemailer from "nodemailer"

const mailSender = process.env.MAIL_SENDER 
const pass = process.env.PASSWORD
const mailToken = process.env.TOKEN

const transporter = nodemailer.createTransport({

	host: 'sandbox.smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: mailSender,
		pass: pass,
		token: mailToken  
	},
});

export class Mailer {
	static createMessageObject(emailToBeSendedTo: string, subject: string, messageText: string) {
		const messageObject = {
			from: mailSender,
			to: emailToBeSendedTo,
			subject: subject,
			text: messageText,
		};

		return messageObject;
	}

	public static sendEmail(emailToBeSendedTo: string, subject: string, messageText: string) {

		try{
			const message = Mailer.createMessageObject(emailToBeSendedTo, subject, messageText);
			transporter.sendMail(message);
			console.log("Email enviado");
		}
		catch{
			console.log("Erro:");
		}

	}
}