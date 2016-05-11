  Template.quiz.events({
    'click [nottrue1]': function (e) {
      e.preventDefault();
       answer1=0;
      Meteor.call("alex1",answer1);

      $( "#q1" ).hide("slow");
      $( "#q2" ).show("slow");
    },
    'click [bittrue1]': function (e) {
      e.preventDefault();
       answer1 =1;
       name="tolis";
      Meteor.call("alex1",name,answer1);

      $( "#q1" ).hide("slow");
      $( "#q2" ).show("slow");},
      'click [true1]': function (e) {
        e.preventDefault();
         answer1=2;
        Meteor.call("alex1",answer1);

        $( "#q1" ).hide("slow");
        $( "#q2" ).show("slow");
      },
      //------------------------------question 2--------------------------------------------------------
      'click [nottrue2]': function (e) {
        e.preventDefault();
         answer2=0;
        Meteor.call("alex2",answer2);

        $( "#q2" ).hide("slow");
        $( "#q3" ).show("slow");
      },
      'click [bittrue2]': function (e) {
        e.preventDefault();
         answer2 =1;
        Meteor.call("alex2",answer2);

        $( "#q2" ).hide("slow");
        $( "#q3" ).show("slow");},
        'click [true2]': function (e) {
          e.preventDefault();

           answer2 =2;
          Meteor.call("alex2",answer2);

          $( "#q2" ).hide("slow");
          $( "#q3" ).show("slow");
        },
        //------------------------------question 3--------------------------------------------------------
        'click [nottrue3]': function (e) {
          e.preventDefault();
           answer3=0;
          Meteor.call("alex3",answer3);

          $( "#q3" ).hide("slow");
          $( "#q4" ).show("slow");
        },
        'click [bittrue3]': function (e) {
          e.preventDefault();
           answer3 =1;
          Meteor.call("alex3",answer3);

          $( "#q3" ).hide("slow");
          $( "#q4" ).show("slow");},
          'click [true3]': function (e) {
            e.preventDefault();
             answer3=2;
            Meteor.call("alex3",answer3);

            $( "#q3" ).hide("slow");
            $( "#q4" ).show("slow");
          },
          //------------------------------question 4--------------------------------------------------------
          'click [nottrue4]': function (e) {
            e.preventDefault();
             answer4=2;
            Meteor.call("alex4",answer4);

            $( "#q4" ).hide("slow");
            $( "#q5" ).show("slow");
          },
          'click [bittrue4]': function (e) {
            e.preventDefault();
             answer4 =1;
            Meteor.call("alex4",answer4);

            $( "#q4" ).hide("slow");
            $( "#q5" ).show("slow");},
            'click [true4]': function (e) {
              e.preventDefault();

               answer4=0;
              Meteor.call("alex4",answer4);

              $( "#q4" ).hide("slow");
              $( "#q5" ).show("slow");
            },
            //------------------------------question 5--------------------------------------------------------
            'click [nottrue5]': function (e) {
              e.preventDefault();
               answer5=2;
              Meteor.call("alex5",answer5);

              $( "#q5" ).hide("slow");
              $( "#q6" ).show("slow");
            },
            'click [bittrue5]': function (e) {
              e.preventDefault();
               answer5 =1;
               Meteor.call("alex5",answer5);

              $( "#q5" ).hide("slow");
              $( "#q6" ).show("slow");},
              'click [true5]': function (e) {
                e.preventDefault();

                 answer5=0;
                 Meteor.call("alex5",answer5);

                $( "#q5" ).hide("slow");
                $( "#q6" ).show("slow");
              },
              //------------------------------question 6--------------------------------------------------------
              'click [nottrue6]': function (e) {
                e.preventDefault();
                 answer6=0;
                 Meteor.call("alex6",answer6);

                $( "#q6" ).hide("slow");
                $( "#q7" ).show("slow");
              },
              'click [bittrue6]': function (e) {
                e.preventDefault();
                 answer6 =1;
                 Meteor.call("alex6",answer6);

                $( "#q6" ).hide("slow");
                $( "#q7" ).show("slow");},
                'click [true6]': function (e) {
                  e.preventDefault();
                   answer6=2;
                   Meteor.call("alex6",answer6);

                  $( "#q6" ).hide("slow");
                  $( "#q7" ).show("slow");
                },
                //------------------------------question 7--------------------------------------------------------
                'click [nottrue7]': function (e) {
                  e.preventDefault();
                   answer7=0;
                   Meteor.call("alex7",answer7);

                  $( "#q7" ).hide("slow");
                  $( "#q8" ).show("slow");
                },
                'click [bittrue7]': function (e) {
                  e.preventDefault();
                   answer7 =1;
                   Meteor.call("alex7",answer7);

                  $( "#q7" ).hide("slow");
                  $( "#q8" ).show("slow");},
                  'click [true7]': function (e) {
                    e.preventDefault();

                     answer7=2;
                     Meteor.call("alex7",answer7);

                    $( "#q7" ).hide("slow");
                    $( "#q8" ).show("slow");
                  },
                  //------------------------------question 8--------------------------------------------------------
                  'click [nottrue8]': function (e) {
                    e.preventDefault();
                     answer8=0;
                     Meteor.call("alex8",answer8);

                    $( "#q8" ).hide("slow");
                    $( "#q9" ).show("slow");
                  },
                  'click [bittrue8]': function (e) {
                    e.preventDefault();
                     answer8 =1;
                     Meteor.call("alex8",answer8);

                    $( "#q8" ).hide("slow");
                    $( "#q9" ).show("slow");},
                    'click [true8]': function (e) {
                      e.preventDefault();
                       answer8=2;
                       Meteor.call("alex8",answer8);

                      $( "#q8" ).hide("slow");
                      $( "#q9" ).show("slow");
                    },
                    //------------------------------question 9--------------------------------------------------------
                    'click [nottrue9]': function (e) {
                      e.preventDefault();
                       answer9=0;
                       Meteor.call("alex9",answer9);

                      $( "#q9" ).hide("slow");
                      $( "#q10" ).show("slow");
                    },
                    'click [bittrue9]': function (e) {
                      e.preventDefault();
                       answer9 =1;
                       Meteor.call("alex9",answer9);

                      $( "#q9" ).hide("slow");
                      $( "#q10" ).show("slow");},
                      'click [true9]': function (e) {
                        e.preventDefault();
                         answer9=2;
                         Meteor.call("alex9",answer9);

                        $( "#q9" ).hide("slow");
                        $( "#q10" ).show("slow");
                      },
                      //------------------------------question 10--------------------------------------------------------
                      'click [nottrue10]': function (e) {
                        e.preventDefault();
                         answer10=2;
                         Meteor.call("alex10",answer10);

                        $( "#q10" ).hide("slow");
                        $( "#q11" ).show("slow");
                      },
                      'click [bittrue10]': function (e) {
                        e.preventDefault();
                         answer10 =1;
                         Meteor.call("alex10",answer10);

                        $( "#q10" ).hide("slow");
                        $( "#q11" ).show("slow");},
                        'click [true10]': function (e) {
                          e.preventDefault();
                           answer10=0;
                           Meteor.call("alex10",answer10);

                          $( "#q10" ).hide("slow");
                          $( "#q11" ).show("slow");
                        },
                        //----------------------------------- question 11---------------

                          'click [nottrue11]': function (e) {
                            e.preventDefault();
                             answer11=0;
                             Meteor.call("alex11",answer11);

                            $( "#q11" ).hide("slow");
                            $( "#q12" ).show("slow");
                          },
                          'click [bittrue11]': function (e) {
                            e.preventDefault();
                             answer11 =1;
                             Meteor.call("alex11",answer11);

                            $( "#q11" ).hide("slow");
                            $( "#q12" ).show("slow");},
                            'click [true11]': function (e) {
                              e.preventDefault();
                               answer11=2;
                               Meteor.call("alex11",answer11);

                              $( "#q11" ).hide("slow");
                              $( "#q12" ).show("slow");
                            },
                            //------------------------------question 12--------------------------------------------------------
                            'click [nottrue12]': function (e) {
                              e.preventDefault();
                               answer12=0;
                               Meteor.call("alex12",answer12);

                              $( "#q12" ).hide("slow");
                              $( "#q13" ).show("slow");
                            },
                            'click [bittrue12]': function (e) {
                              e.preventDefault();
                               answer12 =1;
                               Meteor.call("alex12",answer12);

                              $( "#q12" ).hide("slow");
                              $( "#q13" ).show("slow");},
                              'click [true12]': function (e) {
                                e.preventDefault();

                                 answer12 =2;
                                 Meteor.call("alex12",answer12);

                                $( "#q12" ).hide("slow");
                                $( "#q13" ).show("slow");
                              },
                              //------------------------------question 13--------------------------------------------------------
                              'click [nottrue13]': function (e) {
                                e.preventDefault();
                                 answer13=0;
                                 Meteor.call("alex13",answer13);

                                $( "#q13" ).hide("slow");
                                $( "#q14" ).show("slow");
                              },
                              'click [bittrue13]': function (e) {
                                e.preventDefault();
                                 answer13 =1;
                                 Meteor.call("alex13",answer13);

                                $( "#q13" ).hide("slow");
                                $( "#q14" ).show("slow");},
                                'click [true13]': function (e) {
                                  e.preventDefault();

                                   answer13=2;
                                   Meteor.call("alex13",answer13);

                                  $( "#q13" ).hide("slow");
                                  $( "#q14" ).show("slow");
                                },
                                //------------------------------question 14--------------------------------------------------------
                                'click [nottrue14]': function (e) {
                                  e.preventDefault();
                                   answer14=0;
                                   Meteor.call("alex14",answer14);

                                  $( "#q14" ).hide("slow");
                                  $( "#q15" ).show("slow");
                                },
                                'click [bittrue14]': function (e) {
                                  e.preventDefault();
                                   answer14 =1;
                                   Meteor.call("alex14",answer14);

                                  $( "#q14" ).hide("slow");
                                  $( "#q15" ).show("slow");},
                                  'click [true14]': function (e) {
                                    e.preventDefault();

                                     answer14=2;
                                     Meteor.call("alex14",answer14);

                                    $( "#q14" ).hide("slow");
                                    $( "#q15" ).show("slow");
                                  },
                                  //------------------------------question 15--------------------------------------------------------
                                  'click [nottrue15]': function (e) {
                                    e.preventDefault();
                                     answer15=0;
                                     Meteor.call("alex15",answer15);

                                    $( "#q15" ).hide("slow");
                                    $( "#q16" ).show("slow");
                                  },
                                  'click [bittrue15]': function (e) {
                                    e.preventDefault();
                                     answer15 =1;
                                     Meteor.call("alex15",answer15);

                                    $( "#q15" ).hide("slow");
                                    $( "#q16" ).show("slow");},
                                    'click [true15]': function (e) {
                                      e.preventDefault();

                                       answer15=2;
                                       Meteor.call("alex15",answer15);

                                      $( "#q15" ).hide("slow");
                                      $( "#q16" ).show("slow");
                                    },
                                    //------------------------------question 16--------------------------------------------------------
                                    'click [nottrue16]': function (e) {
                                      e.preventDefault();
                                       answer16=0;
                                       Meteor.call("alex16",answer16);

                                      $( "#q16" ).hide("slow");
                                      $( "#q17" ).show("slow");
                                    },
                                    'click [bittrue16]': function (e) {
                                      e.preventDefault();
                                       answer16 =1;
                                       Meteor.call("alex16",answer16);

                                      $( "#q16" ).hide("slow");
                                      $( "#q17" ).show("slow");},
                                      'click [true16]': function (e) {
                                        e.preventDefault();

                                         answer16=2;
                                         Meteor.call("alex16",answer16);

                                        $( "#q16" ).hide("slow");
                                        $( "#q17" ).show("slow");
                                      },
                                      //------------------------------question 17--------------------------------------------------------
                                      'click [nottrue17]': function (e) {
                                        e.preventDefault();
                                         answer17=0;
                                         Meteor.call("alex17",answer17);

                                        $( "#q17" ).hide("slow");
                                        $( "#q18" ).show("slow");
                                      },
                                      'click [bittrue17]': function (e) {
                                        e.preventDefault();
                                         answer17 =1;
                                         Meteor.call("alex17",answer17);

                                        $( "#q17" ).hide("slow");
                                        $( "#q18" ).show("slow");},
                                        'click [true17]': function (e) {
                                          e.preventDefault();

                                           answer17=2;
                                           Meteor.call("alex17",answer17);

                                          $( "#q17" ).hide("slow");
                                          $( "#q18" ).show("slow");
                                        },
                                        //------------------------------question 18--------------------------------------------------------
                                        'click [nottrue18]': function (e) {
                                          e.preventDefault();
                                           answer18=2;
                                           Meteor.call("alex18",answer18);

                                          $( "#q18" ).hide("slow");
                                          $( "#q19" ).show("slow");
                                        },
                                        'click [bittrue18]': function (e) {
                                          e.preventDefault();
                                           answer18 =1;
                                           Meteor.call("alex18",answer18);

                                          $( "#q18" ).hide("slow");
                                          $( "#q19" ).show("slow");},
                                          'click [true18]': function (e) {
                                            e.preventDefault();
                                             answer18=0;
                                             Meteor.call("alex18",answer18);

                                            $( "#q18" ).hide("slow");
                                            $( "#q19" ).show("slow");
                                          },
                                          //------------------------------question 19--------------------------------------------------------
                                          'click [nottrue19]': function (e) {
                                            e.preventDefault();
                                             answer19=2;
                                             Meteor.call("alex19",answer19);

                                            $( "#q19" ).hide("slow");
                                            $( "#q20" ).show("slow");
                                          },
                                          'click [bittrue19]': function (e) {
                                            e.preventDefault();
                                             answer19 =1;
                                             Meteor.call("alex19",answer19);

                                            $( "#q19" ).hide("slow");
                                            $( "#q20" ).show("slow");},
                                            'click [true19]': function (e) {
                                              e.preventDefault();

                                               answer19=0;
                                               Meteor.call("alex19",answer19);

                                              $( "#q19" ).hide("slow");
                                              $( "#q20" ).show("slow");
                                            },  //------------------------------question 20--------------------------------------------------------
                                              'click [nottrue20]': function (e) {
                                                e.preventDefault();
                                                 answer20=0;
                                                 Meteor.call("alex20",answer20);

                                                $( "#q20" ).hide("slow");
                                                $( "#q21" ).show("slow");
                                              },
                                              'click [bittrue20]': function (e) {
                                                    e.preventDefault();
                                                     answer20 =1;
                                                     Meteor.call("alex20",answer20);

                                                    $( "#q20" ).hide("slow");
                                                    $( "#q21" ).show("slow");},
                                                    'click [true20]': function (e) {
                                                      e.preventDefault();
                                                       answer20=2;
                                                       Meteor.call("alex20",answer20);

                                                      $( "#q20" ).hide("slow");
                                                      $( "#q21" ).show("slow");
                                                    },
                                            //------------------------------question 21--------------------------------------------------------
                                            'click [end]': function (e) {
                                              e.preventDefault();
                                               alexi= (answer1+answer2+answer6+answer6+answer9+answer13+answer14)/7;
                                               alexi= alexi.toFixed(alexi);
                                               Meteor.call("alexi",alexi);
                                               alexc= (answer2+answer4+answer11+answer6+answer12+answer17)/6;
                                               alexc= alexc.toFixed(alexc);

                                               Meteor.call("alexc",alexi);
                                               alexe= (answer5+answer8+answer10+answer15+answer16+answer18+answer19+answer20)/8;
                                               alexe= alexe.toFixed(alexe);

                                               Meteor.call("alexi",alexe);

                                              window.location.href = '/';

                                            },


})
