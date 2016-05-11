FlowRouter.route('/',{
     action(){
       BlazeLayout.render('home')
       }
});

FlowRouter.route('/signup',{
     action(){
       BlazeLayout.render('signup')
       }
});
FlowRouter.route('/doctor',{
     action(){
       BlazeLayout.render('doctor')
       }
});

FlowRouter.route('/quiz',{
     action(){
       BlazeLayout.render('quiz')
       }
});

FlowRouter.route('/result',{
     action(){
       BlazeLayout.render('result')
       }
});
