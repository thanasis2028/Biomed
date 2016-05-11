  Template.quiz.events({
    'click [nottrue1]': function (e) {
      e.preventDefault();
      var answer1=0;
      $( "#q1" ).hide("slow");
      $( "#q2" ).show("slow");
    },
    'click [bittrue1]': function (e) {
      e.preventDefault();
      var answer1 =1;
      $( "#q1" ).hide("slow");
      $( "#q2" ).show("slow");},
      'click [true1]': function (e) {
        e.preventDefault();
        var answer1=2;
        $( "#q1" ).hide("slow");
        $( "#q2" ).show("slow");
      },
      //------------------------------question 2--------------------------------------------------------
      'click [nottrue2]': function (e) {
        e.preventDefault();
        var answer2=0;
        $( "#q2" ).hide("slow");
        $( "#q3" ).show("slow");
      },
      'click [bittrue2]': function (e) {
        e.preventDefault();
        var answer2 =1;
        $( "#q2" ).hide("slow");
        $( "#q3" ).show("slow");},
        'click [true2]': function (e) {
          e.preventDefault();

          var answer2 =2;
          $( "#q2" ).hide("slow");
          $( "#q3" ).show("slow");
        },
        //------------------------------question 3--------------------------------------------------------
        'click [nottrue3]': function (e) {
          e.preventDefault();
          var answer3=0;
          $( "#q3" ).hide("slow");
          $( "#q4" ).show("slow");
        },
        'click [bittrue3]': function (e) {
          e.preventDefault();
          var answer3 =1;
          $( "#q3" ).hide("slow");
          $( "#q4" ).show("slow");},
          'click [true3]': function (e) {
            e.preventDefault();
            var answer3=2;
            $( "#q3" ).hide("slow");
            $( "#q4" ).show("slow");
          },
          //------------------------------question 4--------------------------------------------------------
          'click [nottrue4]': function (e) {
            e.preventDefault();
            var answer4=0;
            $( "#q4" ).hide("slow");
            $( "#q5" ).show("slow");
          },
          'click [bittrue4]': function (e) {
            e.preventDefault();
            var answer4 =1;
            $( "#q4" ).hide("slow");
            $( "#q5" ).show("slow");},
            'click [true4]': function (e) {
              e.preventDefault();

              var answer4=2;
              $( "#q4" ).hide("slow");
              $( "#q5" ).show("slow");
            },
            //------------------------------question 5--------------------------------------------------------
            'click [nottrue5]': function (e) {
              e.preventDefault();
              var answer5=0;
              $( "#q5" ).hide("slow");
              $( "#q6" ).show("slow");
            },
            'click [bittrue5]': function (e) {
              e.preventDefault();
              var answer5 =1;
              $( "#q5" ).hide("slow");
              $( "#q6" ).show("slow");},
              'click [true5]': function (e) {
                e.preventDefault();

                var answer5=2;
                $( "#q5" ).hide("slow");
                $( "#q6" ).show("slow");
              },
              //------------------------------question 6--------------------------------------------------------
              'click [nottrue6]': function (e) {
                e.preventDefault();
                var answer6=0;
                $( "#q6" ).hide("slow");
                $( "#q7" ).show("slow");
              },
              'click [bittrue6]': function (e) {
                e.preventDefault();
                var answer6 =1;
                $( "#q6" ).hide("slow");
                $( "#q7" ).show("slow");},
                'click [true6]': function (e) {
                  e.preventDefault();
                  var answer6=2;
                  $( "#q6" ).hide("slow");
                  $( "#q7" ).show("slow");
                },
                //------------------------------question 7--------------------------------------------------------
                'click [nottrue7]': function (e) {
                  e.preventDefault();
                  var answer7=0;
                  $( "#q7" ).hide("slow");
                  $( "#q8" ).show("slow");
                },
                'click [bittrue7]': function (e) {
                  e.preventDefault();
                  var answer7 =1;
                  $( "#q7" ).hide("slow");
                  $( "#q8" ).show("slow");},
                  'click [true7]': function (e) {
                    e.preventDefault();

                    var answer7=2;
                    $( "#q7" ).hide("slow");
                    $( "#q8" ).show("slow");
                  },
                  //------------------------------question 8--------------------------------------------------------
                  'click [nottrue8]': function (e) {
                    e.preventDefault();
                    var answer8=0;
                    $( "#q8" ).hide("slow");
                    $( "#q9" ).show("slow");
                  },
                  'click [bittrue8]': function (e) {
                    e.preventDefault();
                    var answer8 =1;
                    $( "#q8" ).hide("slow");
                    $( "#q9" ).show("slow");},
                    'click [true8]': function (e) {
                      e.preventDefault();
                      var answer8=2;
                      $( "#q8" ).hide("slow");
                      $( "#q9" ).show("slow");
                    },
                    //------------------------------question 9--------------------------------------------------------
                    'click [nottrue9]': function (e) {
                      e.preventDefault();
                      var answer9=0;
                      $( "#q9" ).hide("slow");
                      $( "#q10" ).show("slow");
                    },
                    'click [bittrue9]': function (e) {
                      e.preventDefault();
                      var answer9 =1;
                      $( "#q9" ).hide("slow");
                      $( "#q10" ).show("slow");},
                      'click [true9]': function (e) {
                        e.preventDefault();
                        var answer9=2;
                        $( "#q9" ).hide("slow");
                        $( "#q10" ).show("slow");
                      },
                      //------------------------------question 10--------------------------------------------------------
                      'click [nottrue10]': function (e) {
                        e.preventDefault();
                        var answer10=0;
                        $( "#q10" ).hide("slow");
                        $( "#q11" ).show("slow");
                      },
                      'click [bittrue10]': function (e) {
                        e.preventDefault();
                        var answer10 =1;
                        $( "#q10" ).hide("slow");
                        $( "#q11" ).show("slow");},
                        'click [true10]': function (e) {
                          e.preventDefault();
                          var answer10=2;
                          $( "#q10" ).hide("slow");
                          $( "#q11" ).show("slow");
                        },
                        //----------------------------------- question 11---------------

                          'click [nottrue11]': function (e) {
                            e.preventDefault();
                            var answer11=0;
                            $( "#q11" ).hide("slow");
                            $( "#q12" ).show("slow");
                          },
                          'click [bittrue11]': function (e) {
                            e.preventDefault();
                            var answer11 =1;
                            $( "#q11" ).hide("slow");
                            $( "#q12" ).show("slow");},
                            'click [true11]': function (e) {
                              e.preventDefault();
                              var answer11=2;
                              $( "#q11" ).hide("slow");
                              $( "#q12" ).show("slow");
                            },
                            //------------------------------question 12--------------------------------------------------------
                            'click [nottrue12]': function (e) {
                              e.preventDefault();
                              var answer12=0;
                              $( "#q12" ).hide("slow");
                              $( "#q13" ).show("slow");
                            },
                            'click [bittrue12]': function (e) {
                              e.preventDefault();
                              var answer12 =1;
                              $( "#q12" ).hide("slow");
                              $( "#q13" ).show("slow");},
                              'click [true12]': function (e) {
                                e.preventDefault();

                                var answer12 =2;
                                $( "#q12" ).hide("slow");
                                $( "#q13" ).show("slow");
                              },
                              //------------------------------question 13--------------------------------------------------------
                              'click [nottrue13]': function (e) {
                                e.preventDefault();
                                var answer13=0;
                                $( "#q13" ).hide("slow");
                                $( "#q14" ).show("slow");
                              },
                              'click [bittrue13]': function (e) {
                                e.preventDefault();
                                var answer13 =1;
                                $( "#q13" ).hide("slow");
                                $( "#q14" ).show("slow");},
                                'click [true13]': function (e) {
                                  e.preventDefault();

                                  var answer13=2;
                                  $( "#q13" ).hide("slow");
                                  $( "#q14" ).show("slow");
                                },
                                //------------------------------question 14--------------------------------------------------------
                                'click [nottrue14]': function (e) {
                                  e.preventDefault();
                                  var answer14=0;
                                  $( "#q14" ).hide("slow");
                                  $( "#q15" ).show("slow");
                                },
                                'click [bittrue14]': function (e) {
                                  e.preventDefault();
                                  var answer14 =1;
                                  $( "#q14" ).hide("slow");
                                  $( "#q15" ).show("slow");},
                                  'click [true14]': function (e) {
                                    e.preventDefault();

                                    var answer14=2;
                                    $( "#q14" ).hide("slow");
                                    $( "#q15" ).show("slow");
                                  },
                                  //------------------------------question 15--------------------------------------------------------
                                  'click [nottrue15]': function (e) {
                                    e.preventDefault();
                                    var answer15=0;
                                    $( "#q15" ).hide("slow");
                                    $( "#q16" ).show("slow");
                                  },
                                  'click [bittrue15]': function (e) {
                                    e.preventDefault();
                                    var answer15 =1;
                                    $( "#q15" ).hide("slow");
                                    $( "#q16" ).show("slow");},
                                    'click [true15]': function (e) {
                                      e.preventDefault();

                                      var answer15=2;
                                      $( "#q15" ).hide("slow");
                                      $( "#q16" ).show("slow");
                                    },
                                    //------------------------------question 16--------------------------------------------------------
                                    'click [nottrue16]': function (e) {
                                      e.preventDefault();
                                      var answer16=0;
                                      $( "#q16" ).hide("slow");
                                      $( "#q17" ).show("slow");
                                    },
                                    'click [bittrue16]': function (e) {
                                      e.preventDefault();
                                      var answer16 =1;
                                      $( "#q16" ).hide("slow");
                                      $( "#q17" ).show("slow");},
                                      'click [true16]': function (e) {
                                        e.preventDefault();

                                        var answer16=2;
                                        $( "#q16" ).hide("slow");
                                        $( "#q17" ).show("slow");
                                      },
                                      //------------------------------question 17--------------------------------------------------------
                                      'click [nottrue17]': function (e) {
                                        e.preventDefault();
                                        var answer17=0;
                                        $( "#q17" ).hide("slow");
                                        $( "#q18" ).show("slow");
                                      },
                                      'click [bittrue17]': function (e) {
                                        e.preventDefault();
                                        var answer17 =1;
                                        $( "#q17" ).hide("slow");
                                        $( "#q18" ).show("slow");},
                                        'click [true17]': function (e) {
                                          e.preventDefault();

                                          var answer17=2;
                                          $( "#q17" ).hide("slow");
                                          $( "#q18" ).show("slow");
                                        },
                                        //------------------------------question 18--------------------------------------------------------
                                        'click [nottrue18]': function (e) {
                                          e.preventDefault();
                                          var answer18=0;
                                          $( "#q18" ).hide("slow");
                                          $( "#q19" ).show("slow");
                                        },
                                        'click [bittrue18]': function (e) {
                                          e.preventDefault();
                                          var answer18 =1;
                                          $( "#q18" ).hide("slow");
                                          $( "#q19" ).show("slow");},
                                          'click [true18]': function (e) {
                                            e.preventDefault();
                                            var answer18=2;
                                            $( "#q18" ).hide("slow");
                                            $( "#q19" ).show("slow");
                                          },
                                          //------------------------------question 19--------------------------------------------------------
                                          'click [nottrue19]': function (e) {
                                            e.preventDefault();
                                            var answer19=0;
                                            $( "#q19" ).hide("slow");
                                            $( "#q20" ).show("slow");
                                          },
                                          'click [bittrue19]': function (e) {
                                            e.preventDefault();
                                            var answer19 =1;
                                            $( "#q19" ).hide("slow");
                                            $( "#q20" ).show("slow");},
                                            'click [true19]': function (e) {
                                              e.preventDefault();

                                              var answer19=2;
                                              $( "#q19" ).hide("slow");
                                              $( "#q20" ).show("slow");
                                            },  //------------------------------question 20--------------------------------------------------------
                                              'click [nottrue20]': function (e) {
                                                e.preventDefault();
                                                var answer20=0;
                                                $( "#q20" ).hide("slow");
                                                $( "#q21" ).show("slow");
                                              },
                                              'click [bittrue20]': function (e) {
                                                    e.preventDefault();
                                                    var answer20 =1;
                                                    $( "#q20" ).hide("slow");
                                                    $( "#q21" ).show("slow");},
                                                    'click [true20]': function (e) {
                                                      e.preventDefault();
                                                      var answer20=2;
                                                      $( "#q20" ).hide("slow");
                                                      $( "#q21" ).show("slow");
                                                    },
                                            //------------------------------question 21--------------------------------------------------------
                                            'click [end]': function (e) {
                                              e.preventDefault();
                                              window.location.href = '/';

                                            },

})                        //fun for get radio button value
                        function getRadioValue(theRadioGroup)
                        {
                          var elements = document.getElementsByName(theRadioGroup);
                          for (var i = 0, l = elements.length; i < l; i++)
                          {
                            if (elements[i].checked)
                            {
                              return elements[i].value;
                            }
                          }
                        }
