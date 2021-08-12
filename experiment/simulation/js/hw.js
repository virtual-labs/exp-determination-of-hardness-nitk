var tn=0;
var a,b,c=0;
var n=0;
var op1=0;
var op2=0;

var dataSet1=[[10, 0, 10.2, 10.2],
			  [10, 0, 9.9, 9.9],
			  [10, 0, 10, 10],
			  [10, 0, 10, 10],
			  [10, 0, 10, 10],
			  [10, 0, 10, 10],
			  [10, 0, 9.7, 9.7],
			  [10, 0, 10.1, 10.1],
			  [10, 0, 9.8, 9.8],
			  [10, 0, 10.2, 10.2],
			  [10, 0, 9.8, 9.8],
              [10, 0, 10, 10]];

var dataSet2=[[100, 0, 4.9, 4.9],
			  [100, 0, 6.8, 6.8],
			  [100, 0, 6.5, 6.5],
			  [100, 0, 5.6, 5.6],
			  [100, 0, 5.3, 5.3],
			  [100, 0, 4.6, 4.6],
			  [100, 0, 4.7, 4.7],
			  [100, 0, 4.3, 4.3],
			  [100, 0, 4.8, 4.8],
			  [100, 0, 4.9, 4.9],
			  [100, 0, 4.6, 4.6],
			  [100, 0, 5.3, 5.3]];



var p=Math.floor(Math.random()*(12));


var ca;
var questions=["Alkaline hardness is due to the presence of bicarbonate, carbonate and hydroxides of the hardness-producing metal ions.",
				"Which of the following is not a unit of hardness?",
				"Hardness that cannot be removed by boiling is called as",
				"Enriochrome Black T indicator is used to detect the presence of rare earth metals.",
				"In the experiment why Ammonia Buffer solution is added to the sample?",
				"1-degree Clarke = 1 part of CaCO<sub>3</sub> per _______ parts of water.",
				"Titration is carried out until the sample changes its colour from ________ to blue."];

var options2=[["True","False"],//true
			  ["Parts per million","Degree centigrade","Degree Clarke","Degree French"], //Degree centigrade
			  ["Temporary hardness","Permanent hardness","Both A and B","None of these"],//Permanent hardness
			  ["True","False"],//true
			  ["To maintain constant pH","To dissolve the precipitate","Both A and B","None of these"],//To maintain constant pH
			  ["10,000","30,000","50,000","70,000"], //70,000
			  ["Wine red","Colourless","Blue","Orange"]];//wine red

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; width:300px; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

function navNext()
{
	for(temp=0;temp<=15;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function magic()
{
	if(simsubscreennum==1) //display heading
	{
		$("#1-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	
	if(simsubscreennum==2) //fill  burette
	{
		tn=22;
		step2();
	}
	
	if(simsubscreennum==3) //fill flask with NaCl
	{
		tn=3;
		step3();
	}
	
	if(simsubscreennum==4) //add ammonia buffer
	{
		tn=4;
		document.getElementById("b3-1").onclick=function()
		{
			document.getElementById("p3-1").style.visibility="hidden";
			stepAddBuffer();
		}
		//document.getElementById("nextButton").style.visibility="visible";
	}
	
	if(simsubscreennum==5) //add EBT indicator
	{
		document.getElementById("42Cap").style.visibility="hidden";
		tn=4;
		step4();
	}
	
	if(simsubscreennum==6) // titration
	{
		tn=5;
		a=0
		finalValue=dataSet1[p][2];
		step5();
	}
	if(simsubscreennum==7) //1st calculation
	{
		document.getElementById("59-1knob").style.visibility="hidden";
		document.getElementById("5p9-1").style.visibility="hidden";
		document.getElementById("5p9-3").style.visibility="hidden";
		
		document.getElementById("1").innerHTML=dataSet1[p][0];
		document.getElementById("2").innerHTML=dataSet1[p][1];
		document.getElementById("3").innerHTML=dataSet1[p][2];
		document.getElementById("4").innerHTML=dataSet1[p][3];
		
		op1=(dataSet1[p][0]/dataSet1[p][3]).toFixed(2);
		op1=parseFloat(op1);
		
		document.getElementById("norm").onclick=function()
		{
			document.getElementById("eqn1").style.visibility="visible";
		}
		
		document.getElementById("check1").onclick=function()
		{
			document.getElementById("eqn1").style.visibility="hidden";
			if(!document.getElementById("output1").value  || !document.getElementById("output1").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				n = document.getElementById("output1").value;
				
				if(Math.round(n) == Math.round(op1))
				{
					document.getElementById("eqn1").style.visibility="hidden";
					document.getElementById("check1").style.visibility="hidden";
					document.getElementById("norm").style.visibility="hidden";
					document.getElementById("r1").style.visibility="visible";
					// document.getElementById("nextButton").style.visibility="visible";
					document.getElementById("result1").style.visibility="hidden";
					document.getElementById("w1").style.visibility="hidden";
					document.getElementById("output1").style="border:none; background-color:white; color:black;"
					document.getElementById("output1").disabled="true";
					validateAnswer(5,3,"500px","350px");
				}
				else
				{
					document.getElementById("eqn1").style.visibility="hidden";
					document.getElementById("result1").style.visibility="visible";
					document.getElementById("w1").style.visibility="visible";
				}
			}	
			document.getElementById("result1").onclick=function()
			{
				document.getElementById("eqn1").style.visibility="hidden";
				document.getElementById("display1").style.visibility="visible";
				document.getElementById("display1").innerHTML="CaCO<sub>3</sub> equivalent to 1ml of EDTA = "+ op1 +" mg of CaCO<sub>3</sub>";
				document.getElementById("check1").style.visibility="hidden";
				document.getElementById("result1").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				// document.getElementById("nextButton").style.visibility="visible";
				document.getElementById("norm").style.visibility="hidden";
				document.getElementById("output1").style="border:none; background-color:white; color:black;"
				document.getElementById("output1").disabled="true";
				validateAnswer(5,3,"450px","350px");
			}
		}
		//document.getElementById("nextButton").style.visibility="visible";
	}
	
// Blank test	
	if(simsubscreennum==8)// second heading
	{
		document.getElementById("display1").style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		$("#7-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	
	if(simsubscreennum==9)//filling burette
	{
		tn=88;
		step2();
	}
	
	if(simsubscreennum==10)//fill flask with distilled water
	{
		tn=9;
		document.getElementById("9name").style.visibility="visible";
		step3();
	}
	
	if(simsubscreennum==11)//add ammonia buffer
	{
		document.getElementById("9name").style.visibility="hidden";
		tn=11;
		stepAddBuffer();
		//document.getElementById("nextButton").style.visibility="visible";
	}
	
	if(simsubscreennum==12) //add EBT indicator
	{
		document.getElementById("112Cap").style.visibility="hidden";
		tn=10;
		step4();
	}
	
	if(simsubscreennum==13) //blank test titration
	{
		tn=11;
		a=1;
		finalValue=dataSet2[p][2];
		step5();
	}
	
	if(simsubscreennum==14) //2st calculation
	{
		document.getElementById("119-1knob").style.visibility="hidden";
		document.getElementById("11p9-1").style.visibility="hidden";
		document.getElementById("11p9-3").style.visibility="hidden";
		
		document.getElementById("11").innerHTML=dataSet2[p][0];
		document.getElementById("22").innerHTML=dataSet2[p][1];
		document.getElementById("33").innerHTML=dataSet2[p][2];
		document.getElementById("44").innerHTML=dataSet2[p][3];
		document.getElementById("55").innerHTML=op1;
		
		op2=((op1*dataSet2[p][3]*1000)/dataSet2[p][0]).toFixed(2);
		op2=parseFloat(op2);
		document.getElementById("form2").onclick=function()
		{
			document.getElementById("eqn2").style.visibility="visible";
			document.getElementById("r2").style.visibility="hidden";
			document.getElementById("w2").style.visibility="hidden";
		}
		
		document.getElementById("check2").onclick=function()
		{
			document.getElementById("eqn2").style.visibility="hidden";
			if(!document.getElementById("output2").value  || !document.getElementById("output2").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				n = document.getElementById("output2").value;
				
				if(Math.round(n) == Math.round(op2))
				{
					document.getElementById("eqn2").style.visibility="hidden";
					document.getElementById("check2").style.visibility="hidden";
					document.getElementById("form2").style.visibility="hidden";
					document.getElementById("r2").style.visibility="visible";
					document.getElementById("result2").style.visibility="hidden";
					document.getElementById("w2").style.visibility="hidden";
					document.getElementById("output2").style="border:none; background-color:white; color:black;"
					document.getElementById("output2").disabled="true";
					validateAnswer(1,1,"350px","350px");
				}
				else
				{
					document.getElementById("eqn2").style.visibility="hidden";					
					document.getElementById("result2").style.visibility="visible";
					document.getElementById("w2").style.visibility="visible";
				}
			}	
			document.getElementById("result2").onclick=function()
			{
				
				document.getElementById("display2").style.visibility="visible";
				document.getElementById("display2").innerHTML="Total hardness = "+ op2 +" mg/l as CaCO<sub>3</sub>";
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("result2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("form2").style.visibility="hidden";
				document.getElementById("eqn2").style.visibility="hidden";
				document.getElementById("output2").style="border:none; background-color:white; color:black;"
				document.getElementById("output2").disabled="true";
				validateAnswer(1,1,"350px","350px");
			}
		}
	}
	if(simsubscreennum==15)
	{
		document.getElementById("check2").style.visibility="hidden";
		document.getElementById("result2").style.visibility="hidden";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
		document.getElementById("form2").style.visibility="hidden";
		document.getElementById("eqn2").style.visibility="hidden";
		document.getElementById("display2").style.visibility="hidden";
	}
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is true";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(op2<=300)
		{
			str="safe";
			str=str.fontcolor("green");
			document.getElementById("infAns").innerHTML="The limit of hardness as per BIS standards is 300mg/l. Total hardness of given water sample is "+op2+"mg/l. It is in the BIS standards range and "+str+" for use.";
		}
		else 
		{
			str="not safe";
			str=str.fontcolor("red");
			document.getElementById("infAns").innerHTML="The limit of hardness as per BIS standards is 300mg/l. Total hardness of given water sample is "+op2+"mg/l. It is in the BIS standards range and "+str+" for use.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}


function step2()
{
	$("#"+tn+"-2").fadeIn(1500);
		setTimeout(function()
		{
		

		myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:300px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById(tn+"-2").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-2").onclick="";
				document.getElementById(tn+"-2").style.animation="moveFunnel 2s forwards";
				setTimeout(function()
				{
					document.getElementById(tn+"-3").style.visibility="visible";
					document.getElementById(tn+"-3Cap").style.visibility="visible";
					setTimeout(function()
					{
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:559px; top:240px; height:30px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
						document.getElementById("arrow1").style.msTransform="rotate(270deg)";
						document.getElementById("arrow1").style.transform="rotate(270deg)";
						document.getElementById(tn+"-3Cap").onclick=function()
						{
							myStopFunction();
							document.getElementById(tn+"-3Cap").onclick="";
							document.getElementById(tn+"-3Cap").style.animation="openNa2SO3Cap 2s forwards";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:350px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
								document.getElementById("arrow1").style.msTransform="rotate(180deg)";
								document.getElementById("arrow1").style.transform="rotate(180deg)";
								document.getElementById(tn+"-3").onclick=function()
								{
									myStopFunction();
									document.getElementById(tn+"-3").onclick="";
									document.getElementById(tn+"-32").style.visibility="visible";
									document.getElementById(tn+"-3").style.visibility="hidden";
									document.getElementById(tn+"-32").style.animation="moveNa2SO3Bottle 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById(tn+"-32").style="position:absolute; left:375px; top:32px; animation: rotateNa2SO3Bottle 1s forwards;";
										setTimeout(function()
										{
											document.getElementById(tn+"-2samp").style.visibility="visible";
											document.getElementById(tn+"-2samp").style.animation="sampFromFunnelUpDown 2s 7 ";
											setTimeout(function()
											{
												document.getElementById(tn+"-2samp2").style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById(tn+"-2samp3").style.animation="whiteUp 5s forwards";
													setTimeout(function()
													{
														document.getElementById(tn+"-2samp3").style.visibility="hidden";
														document.getElementById(tn+"-2samp4").style.animation="sampFromFunnelUp 5s forwards";
														setTimeout(function()
														{
															document.getElementById(tn+"-2samp2").style.visibility="hidden";
															document.getElementById(tn+"-2samp").style.animation="sampFromFunnelDown2 1.5s forwards ";
															setTimeout(function()
															{
																document.getElementById(tn+"-2samp").style.visibility="hidden";
																document.getElementById(tn+"-2samp4").style="position:absolute; left:240px; top:185px;";
																document.getElementById(tn+"-2samp4").style.animation="sampFromFunnelUp2 1.5s forwards";
																document.getElementById(tn+"-32").style.animation="rotateNa2SO3Bottle2 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById(tn+"-32").style.animation="moveNa2SO3BottleBack 1.5s forwards";
																	setTimeout(function()
																	{
																		document.getElementById(tn+"-32").style.visibility="hidden";
																		document.getElementById(tn+"-3").style.visibility="visible";
																		
																		myInt=setInterval(function(){animatearrow();},500);
																		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:644px; top:320px; height:30px; z-index:10;";
																		document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.transform="rotate(270deg)";
																		document.getElementById(tn+"-3Cap").onclick=function()
																		{
																			myStopFunction();
																			document.getElementById(tn+"-3Cap").onclick="";
																			document.getElementById(tn+"-3Cap").style.animation="closeNa2SO3Cap 2s forwards";
																			setTimeout(function()
																			{
																				document.getElementById(tn+"-3Cap").style.visibility="hidden";
																				document.getElementById(tn+"-3").style.visibility="hidden";
																				
																				myInt=setInterval(function(){animatearrow();},500);
																				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:420px; top:155px; height:30px; z-index:10;";
																				document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.msTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.transform="rotate(0deg)";
																				document.getElementById(tn+"-2").onclick=function()
																				{
																					myStopFunction();
																					document.getElementById(tn+"-2").onclick="";
																					document.getElementById(tn+"-2").style.animation="moveFunnelBack 2s forwards";
																					setTimeout(function()
																					{
																						$("#"+tn+"-2").fadeOut(800);
																						document.getElementById("nextButton").style.visibility="visible";
																					},2100);
																				}
																			},2100);
																		}
																	},1600);
																},1000);
															},800);
														},5000);
													},4500);
												},800);
											},1000);
										},1100);
									},1550);
								}
							},2100);
						}
					},250);
				},2100);
			}
		},1500);
	
}

function step3()
{
	setTimeout(function()
			{
				document.getElementById(tn+"p3-1").style.visibility="visible";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:295px; top:190px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(220deg)"; 
		     // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(220deg)"; 
		     // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(220deg)";
				document.getElementById(tn+"-4").onclick=function()
				{
					myStopFunction();
					document.getElementById(tn+"-4").onclick="";
					document.getElementById(tn+"-4").style.visibility="hidden";
					document.getElementById(tn+"p3-1").style.visibility="hidden";
					document.getElementById(tn+"-41").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById(tn+"-41").style.animation="moveGP1 1.5s forwards";
						setTimeout(function()
						{
							$("#"+tn+"-5bulb").fadeIn(1000);
							$("#"+tn+"-5up").fadeIn(1000);
							$("#"+tn+"-5down").fadeIn(1000);
							setTimeout(function()
							{
								document.getElementById(tn+"p3-2").style.visibility="visible";
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="position:absolute; visibility:visible; left:321px; top:300px; height:20px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								document.getElementById(tn+"-5up").onclick=function()
								{
									myStopFunction();
									document.getElementById(tn+"-5up").onclick="";
									document.getElementById(tn+"p3-2").style.visibility="hidden";
									$("#"+tn+"-5bulb").fadeOut(1500);
									$("#"+tn+"-5up").fadeOut(1500);
									$("#"+tn+"-5down").fadeOut(1500);
									document.getElementById(tn+"-41sw").style.visibility="visible";
									document.getElementById(tn+"-41sw").style.animation="h2so4Up 2s forwards";
									document.getElementById(tn+"-3").style.animation="h2so4Down 2s forwards";
									setTimeout(function()
									{
										document.getElementById(tn+"-41sw").style.visibility="hidden";
										document.getElementById(tn+"-41").style.visibility="hidden";
										document.getElementById(tn+"-42").style.visibility="visible";
									    													
													 myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:450px; top:230px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById(tn+"-42").onclick=function()
													{  
														myStopFunction();
														document.getElementById(tn+"-42").onclick="";
														document.getElementById(tn+"-42").style.animation="moveGP3 3s forwards";
														setTimeout(function()
														{   
															$("#"+tn+"-5bulb").fadeIn(1500);
															$("#"+tn+"-5up").fadeIn(1500);
															$("#"+tn+"-5down").fadeIn(1500);
															document.getElementById(tn+"p3-2").style="visibility:visible; position:absolute; left:350px; top:100px; color:red; font-size:14px;";
															document.getElementById(tn+"p3-2").innerHTML="Press the down arrow on the bulb </br></br>to release the liquid into the BOD bottle";
															setTimeout(function()
															{
																document.getElementById(tn+"p3-2").style.visibility="visible";
																myInt=setInterval(function(){animatearrow();},500);
																document.getElementById("arrow1").style="position:absolute; visibility:visible; left:358px; top:330px; height:20px; z-index:10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(90deg)";
																document.getElementById(tn+"-5down").onclick=function()
																{
																	myStopFunction();
																	document.getElementById(tn+"-5down").onclick="";
																	document.getElementById(tn+"p3-2").style.visibility="hidden";
																	$("#"+tn+"-5bulb").fadeOut(1000);
																	$("#"+tn+"-5up").fadeOut(1000);
																	$("#"+tn+"-5down").fadeOut(1000);
																	document.getElementById(tn+"-41").style="visibility:visible; position:absolute; left:76px; top:100px;";
																	document.getElementById(tn+"-43").style.visibility="visible";
																	
																	document.getElementById(tn+"-42").style.visibility="hidden";

																	document.getElementById(tn+"-43").style.animation="NaClDown 2s forwards";
																	setTimeout(function()
																	{
																	document.getElementById(tn+"-1samp1").style.animation="NaClUp 2s forwards";
																	setTimeout(function()
																	{
																		document.getElementById(tn+"-41").style.animation="movebackGP 1.5s forwards";
																		setTimeout(function()
																		{
																																						
																			$("#"+tn+"-41").fadeOut(1200);
																			setTimeout(function()
																					{
																						document.getElementById(tn+"-43").style.visibility="hidden";
																						if(tn==9)
																						{
																							validateAnswer(2,1,"200px","130px");
																						}
																						if(tn==3)
																						{
																							document.getElementById("nextButton").style.visibility="visible";
																						}
																					},1400);
																			},1750);
																	},2300);
																	},200);
																}
															},1000);
														},3100);
													}
												//},1250);
														
										},2100);
								}
							},1100);
						},1600);
						
					},150);
				}
			},500);
}

function step4()
{
	setTimeout(function()
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="position:absolute; visibility:visible; left:508px; top:285px; height:35px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(tn+"-3a").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-3a").onclick="";
			document.getElementById(tn+"-3a").style.animation="openEBTBottle 1.5s forwards";

			setTimeout(function()
			{
				$("#"+tn+"-4a").fadeIn(1500);
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:455px; top:205px; height:35px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById(tn+"-4a").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-4a").onclick="";
				document.getElementById(tn+"-4a").style.animation="moveDropper 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById(tn+"-2a").style.animation="K2Cr2O4Down 1.5s forwards";
					document.getElementById(tn+"-2b").style.animation="K2Cr2O4Up 1.5s forwards";
					setTimeout(function()
					{
						$("#"+tn+"-4a").fadeOut(0);
						document.getElementById(tn+"-4b").style.visibility="visible";
						document.getElementById(tn+"-2b").style.visibility="hidden";//yellow colour
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:510px; top:240px; height:35px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
						document.getElementById("arrow1").style.msTransform="rotate(270deg)";
						document.getElementById("arrow1").style.transform="rotate(270deg)";
						document.getElementById(tn+"-4b").onclick=function()
						{
							myStopFunction();
							document.getElementById(tn+"-4b").onclick="";
							document.getElementById(tn+"-4b").style.animation="moveDropper2 2s forwards";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:60px; top:220px; height:35px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
								document.getElementById("arrow1").style.msTransform="rotate(180deg)";
								document.getElementById("arrow1").style.transform="rotate(180deg)";
								document.getElementById(tn+"-4b").onclick=function()
								{
									myStopFunction();
									document.getElementById(tn+"-4b").onclick="";
									document.getElementById(tn+"-4a").style="visibility:visible; position:absolute; left:81px; top:150px;";
									document.getElementById(tn+"-2c").style.visibility="visible";
									document.getElementById(tn+"-4b").style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById(tn+"-2c").style.animation="K2Cr2O4Down2 9s forwards";
										document.getElementById(tn+"drop4-1").style.visibility="visible";
										document.getElementById(tn+"drop4-1").style.animation="dropK2Cr2O4 0.75s 8";
										setTimeout(function()
										{
											document.getElementById(tn+"-0").style.borderColor="#F8F8F8";
											document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(#da2c24 ,#F8F8F8 5% )";
											setTimeout(function()
											{
												document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(#da2c24 ,#F8F8F8 25% )";
												setTimeout(function()
												{
													document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(#da2c24 ,#F8F8F8 40% )";
													setTimeout(function()
													{
														document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(#da2c24 ,#F8F8F8 55% )";
														setTimeout(function()
														{
															document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(#da2c24 ,#F8F8F8 70% )";
															setTimeout(function()
															{
																document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(#da2c24 ,#F8F8F8 85% )";
																setTimeout(function()
																{
																	document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(#da2c24 ,#F8F8F8 95% )";
																	setTimeout(function()
																	{	
																		document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(#F8F8F8,#da2c24 20%)";
																				
																		document.getElementById(tn+"drop4-1").style.visibility="hidden";
																		document.getElementById(tn+"-2c").style.visibility="hidden";
																		$("#"+tn+"-4a").fadeOut(200);
																		setTimeout(function()
																		{
																			myInt=setInterval(function(){animatearrow();},500);
																			document.getElementById("arrow1").style="position:absolute; visibility:visible; left:600px; top:355px; height:35px; z-index:10;";
																			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																			// Code for IE9
																			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																			// Standard syntax
																			document.getElementById("arrow1").style.transform = "rotate(270deg)";
																			document.getElementById(tn+"-3a").onclick=function()
																			{
																				myStopFunction();
																				document.getElementById(tn+"-3a").onclick="";
																				document.getElementById(tn+"-3a").style="position:absolute; left:555px; top:355px;";
																				document.getElementById(tn+"-3a").style.animation="closeEBTBottle 1.5s forwards";
																				setTimeout(function()
																				{
																					if(tn==10)
																					{
																						validateAnswer(3,0,"100px","100px");
																					}
																					if(tn==4)
																					{
																						document.getElementById("nextButton").style.visibility="visible";
																					}
																				},1600);
																			}
																		},250);
																	},600);
																},750);
															},750);
														},750);
													},750);
												},750);
											},750);
										},750);
									},200);
								}
							},2000);
						}
					},1500);

				},1750);
			}
		},1500);

			},1500);
			
		}
	},500);
}

function step5()
{
	setTimeout(function()
		{
			document.getElementById(tn+"p9-0a").style.visibility="visible";
			document.getElementById(tn+"p9-1").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(300deg)";
			document.getElementById(tn+"9-1knob").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"9-1knob").onclick="";	
				document.getElementById(tn+"9-1knob").style.visibility="hidden";
				document.getElementById(tn+"9-1hand").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById(tn+"p9-0a").style.visibility="hidden";
					document.getElementById(tn+"9-1hand").style.visibility="hidden";
					document.getElementById(tn+"9-1hand2").style.visibility="visible";
					document.getElementById(tn+"9-1stopper").style="position:absolute; left:153px; top:309.75px;";
					setTimeout(function()
					{
						document.getElementById(tn+"drop9-1").style.visibility="visible";
						document.getElementById(tn+"drop9-1").style.animation="drop2 0.75s 15";
						document.getElementById(tn+"9-1a").style.animation="Na2S2O3fromBurette1 10s forwards";
						setTimeout(function()
						{
							document.getElementById(tn+"drop9-2").style.visibility="visible";
							document.getElementById(tn+"drop9-2").style.animation="drop2 0.75s 15";
							setTimeout(function()
							{
								document.getElementById(tn+"9-3").style.animation="colourChange2 13s forwards";

								setTimeout(function()
								{
										document.getElementById(tn+"drop9-1").style.visibility="hidden";
										document.getElementById(tn+"drop9-2").style.visibility="hidden";
										// document.getElementById("9-3").style.backgroundColor="#FFFF99";
										document.getElementById(tn+"9-1hand").style.visibility="visible";
										document.getElementById(tn+"9-1hand2").style.visibility="hidden";
										//document.getElementById("p9-0b").style.visibility="hidden";
										document.getElementById(tn+"9-1stopper").style="position:absolute; left:150px; top:307.75px; ";
										setTimeout(function()
										{
											document.getElementById(tn+"9-1knob").style.visibility="visible";
											document.getElementById(tn+"9-1hand").style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById(tn+"p9-3").style.visibility="visible";
												document.getElementById(tn+"p9-3").innerHTML="Final burette reading = "+finalValue+" ml";
												if(tn==11)
												{
													document.getElementById("nextButton").style.visibility="hidden";
													validateAnswer(6,0,"400px","320px");
												}
												if(tn==5)
												{
													document.getElementById("nextButton").style.visibility="visible";
												}
											},500);
										},750);
									//},1000);
								},12200);
							},250);
						},250);
					},100);
				},250);
			}
		},500);

}

function stepAddBuffer()
{
	$("#"+tn+"4Up").fadeIn(1500);
		setTimeout(function()
		{
			document.getElementById(tn+"4button").style.visibility="visible";
		// $("#p2-1").fadeIn(6500);
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 280px; top: 232.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(225deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(225deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(225deg)";
			document.getElementById(tn+"4button").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"4button").onclick="";	
				document.getElementById(tn+"4Up").style.visibility="hidden";
				document.getElementById(tn+"4button").style.visibility="hidden";
				document.getElementById(tn+"4Down").style.visibility="visible";
			    setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:505px; top:260px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(270deg)";
					document.getElementById(tn+"2Cap").onclick=function()
					{
						myStopFunction();
						document.getElementById(tn+"2Cap").onclick="";	
						document.getElementById(tn+"2Cap").style.visibility="hidden";
						document.getElementById(tn+"2Cap2").style.visibility="visible";
						document.getElementById(tn+"2Cap2").style.animation="openBottleCap3 1.25s forwards";
				setTimeout(function()
				{
					document.getElementById(tn+"2Cap").style="position:absolute; visibility:visible; left:540px; top:335px; width:25px;";
					document.getElementById(tn+"2Cap2").style.visibility="hidden";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 240px; top: 320px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById(tn+"4Down").onclick=function()
					{
						myStopFunction();
						document.getElementById(tn+"4Down").onclick="";
						document.getElementById(tn+"4Down").style.animation="movePipette3-1 2s forwards";
						setTimeout(function()
						{
							// document.getElementById(tn+"3").style.animation="aiasDown 1s forwards";
							document.getElementById(tn+"4Up2").style.visibility="visible";
							document.getElementById(tn+"4Down").style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById(tn+"4Up2").style.animation="movePipette2 2s forwards";
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:580px; top:330px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById(tn+"2Cap").onclick=function()
									{
										myStopFunction();
										document.getElementById(tn+"2Cap").onclick="";	
										document.getElementById(tn+"2Cap").style.visibility="hidden";
										document.getElementById(tn+"2Cap2").style="left:520px; top:290px;; position:absolute; visibility:visible";
										document.getElementById(tn+"2Cap2").style.animation="closeBottleCap3 1.25s forwards";
									
								setTimeout(function()
								{
									document.getElementById(tn+"2Cap2").style.visibility="hidden";
									document.getElementById(tn+"2Cap").style="visibility:visible; position:absolute; left:460px; top:253px; width:25px;";
									
									setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:340px; height: 40px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById(tn+"4Up2").onclick=function()
													{
														myStopFunction();
														document.getElementById(tn+"4Up2").onclick="";	
														document.getElementById(tn+"4Up2").style="position:absolute; left: 256px; top: 200px;";
														document.getElementById(tn+"4Up2").style.animation="movePipette3 2s forwards";
														
														setTimeout(function()
														{
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:60px; top:230px; height: 35px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
															// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(180deg)";
															document.getElementById(tn+"4Up2").onclick=function()
															{
																myStopFunction();
																document.getElementById(tn+"4Up2").onclick="";
																document.getElementById(tn+"4Up2").style.visibility="hidden";
																document.getElementById(tn+"4Down2").style.visibility="visible";
																document.getElementById(tn+"1samp2").style.visibility="visible";
																setTimeout(function()
																{
																	document.getElementById(tn+"1samp2").style.animation="bufferDown 2.5s forwards";
																	document.getElementById(tn+"drop4-3").style.visibility="visible";
																	document.getElementById(tn+"drop4-3").style.animation="dropNHBuffer 0.5s 4";
																	document.getElementById(tn+"1samp1").style.animation="moveSolutionUp1 3s forwards";
																	setTimeout(function()
																	{
																		document.getElementById(tn+"1samp2").style.visibility="hidden";
																		document.getElementById(tn+"drop4-3").style.visibility="hidden";
																		setTimeout(function()
																		{
																			document.getElementById(tn+"4Down2").style.animation="movePipetteBack 2s forwards";
																			setTimeout(function()
																			{
																				$("#"+tn+"4Down2").hide(1000);
																				setTimeout(function()
																				{
																					if(tn==4)
																					{
																						validateAnswer(4,0,"300px","150px");
																					}
																					if(tn==11)
																					{
																						document.getElementById("nextButton").style.visibility="visible";
																					}
																				},1200);
																			},2000);
																		},200);
																	},2000);
																},100);
															}							
														},2500);
													}
												},100);
									},1200);
								  }
								},2000);
							},500);
						},2500);
					  }
			
				  },1300);	
				}
			  },700);
			}
		},300);
	},1300);
}
	
function refresh()
{
	document.getElementById("22-2").style.animation="";
	document.getElementById("22-3Cap").style.animation=	"";
	document.getElementById("22-32").style.animation="";
	document.getElementById("22-2samp4").style.animation="";
	document.getElementById("22-2samp").style.animation="";
	document.getElementById("22-2samp2").style.animation="";
	document.getElementById("22-2samp3").style.animation="";
}
