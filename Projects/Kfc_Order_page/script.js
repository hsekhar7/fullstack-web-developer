
            function OrderClick(){
                document.getElementById("lblName").innerHTML=document.getElementById("customerName").value;
                document.getElementById("lblMobile").innerText=document.getElementById("customerMobile").value;
                document.getElementById("lblAddress").innerHTML=document.getElementById("customerAddress").value;

                var mealName="";
                var addonName="";
                var addonCost=0;
                var mealCost=0;
                var total=0;

                //radio buttons
                var b_Chicken=document.getElementById("bucketChicken");
                var wink=document.getElementById("chickenWink");
                var f_chicken=document.getElementById("friedChicken")
                var c_Sandwich=document.getElementById("chickenSandwich");
                var fries=document.getElementById("fries");
                var sandwich=document.getElementById("sandwich");
                var Chicken=document.getElementById("chicken");
                var cake=document.getElementById("cake");

                if(b_Chicken.checked){
                    mealName=b_chicken.value;
                    mealCost=340;
                }
                if(wink.checked){
                    mealName=wink.value;
                    mealCost=250;
                }
                if(f_chicken.checked){
                    mealName=f_chicken.value;
                    mealCost=400;
                }
                if(c_Sandwich.checked){
                    mealName=c_Sandwich.value;
                    mealCost=270;
                }
                if(fries.checked){
                    mealName=fries.value;
                    mealCost=150;
                }
                if(sandwich.checked){
                    mealName=sandwich.value;
                    mealCost=220;
                }
                if(Chicken.checked){
                    mealName=Chicken.value;
                    mealCost=400;
                }
                if(cake.checked){
                    mealName=cake.value;
                    mealCost=150;
                }

                //checkbox

                var pepsi=document.getElementById("pepsi");
                var coffe=document.getElementById("coffe");
                var ftea=document.getElementById("ftea");
                var soda=document.getElementById("soda");

                if(pepsi.checked){
                    addonName +=pepsi.value+"<br>";
                    addonCost=100;
                    mealCost +=addonCost;
                }
                if(coffe.checked){
                    addonName +=coffe.value+"<br>";
                    addonCost=50;
                    mealCost +=addonCost;
                }
                if(ftea.checked){
                    addonName +=ftea.value+"<br>";
                    addonCost=120;
                    mealCost +=addonCost;
                }
                if(soda.checked){
                    addonName +=soda.value+"<br>";
                    addonCost=80;
                    mealCost +=addonCost;
                }
                total=mealCost;

                document.getElementById("lblMeal").innerHTML=mealName;
                document.getElementById("lblAddon").innerHTML=addonName;
                document.getElementById("lblAmount").innerHTML="&#8377;"+total;
            }