// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { name, email, amount, paymentId, seva } = await req.json();

//     // ✅ Configure your email transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // your temple email
//         pass: process.env.EMAIL_PASS, // app password (not normal password)
//       },
//     });

//     // ✅ Email content
//     const mailOptions = {
//       from: `"Mandir Seva" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "🙏 Donation Confirmation – Thank You for Your Seva",
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px;">
//           <h2 style="color: #8B0000;">🌸 Thank You, ${name}! 🌸</h2>
//           <p>Your generous donation has been received with gratitude.</p>
//           <p><strong>Donation Details:</strong></p>
//           <ul>
//             <li>Seva Type: ${seva}</li>
//             <li>Amount: ₹${amount}</li>
//             <li>Payment ID: ${paymentId}</li>
//           </ul>
//           <p>May divine blessings always be with you and your family.</p>
//           <p>With gratitude,<br><strong>Mandir Seva Committee</strong></p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email Error:", error);
//     return new Response(JSON.stringify({ error: "Email sending failed" }), { status: 500 });
//   }
// }



// env.local
// EMAIL_USER=yourtempleemail@gmail.com
// EMAIL_PASS=your_generated_app_password

// In donate/page.jsx
// handler: async function (response) {
//   alert(`🙏 Thank you ${formData.name}! Payment ID: ${response.razorpay_payment_id}`);

//   // ✅ Send confirmation email
//   await fetch("/api/send-email", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       name: formData.name,
//       email: formData.email,
//       amount: formData.amount,
//       paymentId: response.razorpay_payment_id,
//       seva: formData.message || "Donation",
//     }),
//   });
// },
