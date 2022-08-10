To see the Prototype:-

The applications' prototypes were made using a cloud prototyping tool called balsamiq.

Emailer:- https://share.balsamiq.com/c/tb1wvXCv34paNNbjhnYZpv.png
Landing Page:- https://share.balsamiq.com/c/n6zg5LoeCKgNQm6XAEBPSp.png


To Run Locally:-

1. clone the project git clone https://github.com/rahulnarayananuws/gi-app.git
2. After cloning the project, Go inside Gi-app and run npm i to install the dependencies.
3. Run ng s --o to serve the aplication.
4. A fake server named json-server has been used to spoof the server, to run json-server run command json-server --watch db.json (inside gi-app). The data will be stored in db.json.
4. Hashed strategy has been used while routing, so use http://localhost:4200/#/emailer for the emailer page.
5. Click on the Get Quote Button to redirect the control to landing page which collects the data from the user (http://localhost:4200/#/landing)
6. Response and error will be displayed using ngx-toastr

To Run In Production:-
The app has been deployed on heroku using CI/CD pipeline.
https://gi-app-hosting.herokuapp.com/#/emailer
