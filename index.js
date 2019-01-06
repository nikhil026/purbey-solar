
const express=require('express');
const ejs=require('ejs');
// const facultyCse=require('./routes/faculty-cse');
// const facultyEce=require('./routes/faculty-ece');
const path=require('path');
// const process=require('process');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


var app=express();

app.use(express.static('public'));

app.set('view engine ',ejs);
// app.set('views', './views')
app.set('views', path.join(__dirname, '/views/'));
app.use(bodyParser.json())

// app.set('views',(__dirname+'/public'));
app.get('/',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/index.html'));
});
app.get('/anti-dumping-duty-on-solar-panels-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/anti-dumping-duty-on-solar-panels-in-india.html'));
});
app.get('/bihar-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/bihar-solar.html'));
});
app.get('/buy-ABB-solar-inverter-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-ABB-solar-inverter-in-india.html'));
});
app.get('/buy-acdb-dcdb-ajb-for-rooftop-solar-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-acdb-dcdb-ajb-for-rooftop-solar-in-india.html'));
});
app.get('/buy-adani-solar-panels-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-adani-solar-panels-in-india.html'));
});
app.get('/buy-canadian-solar-panels-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-canadian-solar-panels-in-india.html'));
});
app.get('/buy-consul-neowatt-solar-inverter-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-consul-neowatt-solar-inverter-in-india.html'));
});
app.get('/buy-delta-solar-inverter-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-delta-solar-inverter-in-india.html'));
});
app.get('/buy-fronius-solar-inverter-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-fronius-solar-inverter-in-india.html'));
});
app.get('/buy-jinko-solar-panels-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-jinko-solar-panels-in-india.html'));
});
app.get('/buy-sma-solar-inverter-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-sma-solar-inverter-in-india.html'));
});
app.get('/buy-sma-solar-inverter-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-sma-solar-inverter-in-india.html'));
});
app.get('/buy-solar-batteries-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-solar-batteries-in-india.html'));
});
app.get('/buy-solar-DC-cables-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-solar-DC-cables-in-india.html'));
});
app.get('/buy-solar-net-meters-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-solar-net-meters-in-india.html'));
});
app.get('/buy-sova-solar-panels-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-sova-solar-panels-in-india.html'));
});
app.get('/buy-sungrow-solar-inverter-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-sungrow-solar-inverter-in-india.html'));
});
app.get('/buy-tata-solar-panels-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-tata-solar-panels-in-india.html'));
});
app.get('/buy-trina-solar-panels-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-trina-solar-panels-in-india.html'));
});
app.get('/buy-trina-solar-rooftop-kits-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-trina-solar-rooftop-kits-in-india.html'));
});
app.get('/buy-vikram-solar-panels-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-vikram-solar-panels-in-india.html'));
});
app.get('/buy-waaree-solar-panels-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-waaree-solar-panels-in-india.html'));
});
app.get('/buy-zever-solar-inverter-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/buy-zever-solar-inverter-in-india.html'));
});
app.get('/darbhanga-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/darbhanga-solar.html'));
});
app.get('/delhi-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/delhi-solar.html'));
});
app.get('/durgapur-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/durgapur-solar.html'));
});
app.get('/haryana-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/haryana-solar.html'));
});
app.get('/index.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/index.html'));
});
app.get('/index1.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/index1.html'));
});
app.get('/jayanagar-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/jayanagar-solar.html'));
});
app.get('/jharkhand-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/jharkhand-solar.html'));
});
app.get('/logo png.png',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/logo png.png'));
});
app.get('/logo.jpg',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/logo.jpg'));
});
app.get('/madhubani-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/madhubani-solar.html'));
});
app.get('/muzaffarpur-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/muzaffarpur-solar.html'));
});
// app.get('/package-lock.json',(req,res)=>{
//  res.sendFile(path.join(__dirname, './public/views/package-lock.json'));
// });
// app.get('/package.json',(req,res)=>{
//  res.sendFile(path.join(__dirname, './public/views/package.json'));
// });
app.get('/patna-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/patna-solar.html'));
});
app.get('/purbey.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/purbey.html'));
});
app.get('/samastipur-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/samastipur-solar.html'));
});
app.get('/siliguri-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/siliguri-solar.html'));
});
app.get('/solar-projects-facing-land-challenges-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/solar-projects-facing-land-challenges-in-india.html'));
});
app.get('/top-solar-inverter-companies-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/top-solar-inverter-companies-in-india.html'));
});
app.get('/top-solar-panel-companies-in-india.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/top-solar-panel-companies-in-india.html'));
});
app.get('/uttar-pradesh-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/uttar-pradesh-solar.html'));
});
app.get('/west-bengal-solar.html',(req,res)=>{
 res.sendFile(path.join(__dirname, './public/views/west-bengal-solar.html'));
});

app.post('/send-email',(req,res)=>{

console.log(req.body)
let formData = req.body;

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service:'Zoho',
        host: 'smtp.zoho.com',
        port: 587,
        secure: false, 
        ignoreTLS:true,
        requireTLS:false,// true for 465, false for other ports
        auth: {
            user: "info@purbey.in", // generated ethereal user
            pass: "Purbey@73868" // generated ethereal password
        }
    });
//     const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'rjlnjkek4dxjkijv@ethereal.email',
//         pass: 'GnBVsrh73te8qyuC9n'
//     }
// });


    // setup email data with unicode symbols
    let mailOptions = {
        from: '<info@purbey.in>', // sender address
        to: 'purbeysolar@gmail.com', // list of receivers
        // to: 'nikhilgupta@intellocart.com', // list of receivers
        subject: 'Enquiry Mail', // Subject line
        text: ``, // plain text body
        html: `<b>Hello User</b> ${JSON.stringify(formData)}`// html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
    	console.log("that is ",mailOptions)
        if (error) {
        	console.log("this is ",error)
            return console.log(error);
            res.redirect(`http://www.ishisolar.in`);
        }
        console.log(info)
        return res.status(200);
        console.log('Message sent: %s', info.messageId);
        res.redirect(`http://www.ishisolar.in`);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
})
})







const port=process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`Server running at ${port}`);
})
module.exports=app;