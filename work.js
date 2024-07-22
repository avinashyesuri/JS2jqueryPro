    //main--- syntax -----------------------------------------------------------------------------------------------
    // $(selector).action()


    //universl selector -----------------------------------------------------------------------------------------------
    // $(document).ready(function(){
    //     $("#click").click(function(){
    //         $("*").css("font-size","36px")
    //     })
    //   $(".click").click(function(){
    //         $("*").css("font-size","36px")
    //     })
    
    // })



    //Advance  selectors -----------------------------------------------------------------------------------------------
    // $(document).ready(function(){
    //     $("#click").click(function(){
    //         $(".v1, #v2").css("color","blue")
    //     })
    //     $("#click").click(function(){
    //         $("h3").css("font-size","36px")
    //     })
    //     $("#click").click(function(){
    //         $("h3").css("color","red")
    //     })
    //     $("#click").click(function(){
    //         $("p:first").css("color","red")
    //     })
    //     $("#click").click(function(){
    //         $("li:even").css("color","orange")
    //     })
    //     $("#click").click(function(){
    //         $("li:even").css("font-weight","bolder")
    //     })
    // })




    //hide,show -----------------------------------------------------------------------------------------------
    // $(selector).hide(speed,callback)
    // $(selector).show(speed,callback)
    // $(selector).toggle(speed,callback)
    // $(selector).fadein(speed,callback)
    // $(selector).fadeout(speed,callback)
    // $(selector).fadetoggle(speed,callback)



    // $(document).ready(function(){
    //     $("#click").click(function(){
    //         $("ul li ").hide("slow")
    //     })
    //     $("#click").click(function(){
    //         $("h3").hide("fast",function(){
               
    //                 $("ul li ").show("5000")
                
    //         })
    //     })
    //     $("#click1").click(function(){
    //         $(this).hide(3000,function(){
    //             alert("hide probability")
    //         })
    //     })
    // })





    //events -----------------------------------------------------------------------------------------------
    //   $(document).ready(function(){
    //    $("#evnet1").click(function(){
    //         $(".para").css("color", "green")
    //     })
    //     $("#evnet2").contextmenu(function(){
    //         $(".para").css("color", "green")
    //     })
    
    //     $("#evnet3").dblclick(function(){
    //         $(".para").css("color", "red")
    //     })
    //     $("#evnet4").mouseenter(function(){
    //         $(".para").css("color", "red")
    //     })
    //     $("#evnet5").mouseleave(function(){
    //         $(".para").css("color", "red")
    //     })
    //     $("#evnet7").mousedown(function(){
    //         $(".para").css("color", "orange")
    //     })
    //     $("#evnet8").mouseup(function(){
    //         $(".para").css("color", "orange")
    //     })
    //     $("#evnet9").focus(function(){
    //         $(".para").css("color", "orange")
    //     })
    //     $("#evnet10").blur(function(){
    //         $(".para").css("color", "orange")
    //     })
      
    // })

    // $(document).ready(function(){
    //     $("#evnet6").on({
    //         mouseenter:function(){
    //             $(".para").css("background-color", "orange")
    //         },
    //         mouseleave:function(){
    //             $(".para").css("background-color", "pink")
    //         },
    //         mousedown:function(){
    //             $(".para").css("background-color", "red")
    //         }
    //      })
   
       
    //  })

    //GET CONTENT val,html,attri and text ---------------------------------------------------------------------------------------------------

        // $(document).ready(function(){
        // $("#sub").click(function(){
        //     var item =$("#countries").val();
        //     if(item == "1"){
        //         alert("select an item")
        //     }else{
        //         $("#result").text("yo have selcted:"  + item)
        //     }
        //     })
        //     $("#getC").click(function(){ 
        //        var a = $("#getContetn").text()
        //        alert(a)
        //     })
        // })


 //SET CONTENT val,html,attri and text ---------------------------------------------------------------------------------------------------
        // $(document).ready(function(){
        //     $("#getC").click(function(){ 
        //        $("#getContetn2").text("lets learn about set content <i>JQUERYYYYYYYYY</i>")  
        //     })
        //     $("#getC").click(function(){ 
        //         $("#getContetn1").html(" <i>JQUERYYYYYYYYY</i>")  
        //      })
             
        //      $("#getC").click(function(){ 
        //         $("#utube-1").attr("href","https://www.figma.com/design/rephrU2FVgN8MFz6XhnP51/Learn-React-with-10-Projects?node-id=382-53")  
        //      })
        //      $("#getC").click(function(){ 
        //         $("#utube-1").text("Figma")  
        //      })
         
           
        // })


// TOGLE,add,remove  CLASS METHODS  ---------------------------------------------------------------------------------------------------
        // $(document).ready(function(){
        //     $("#b1").click(function(){ 
        //         $("#forClass").addClass("c1 c2 c3")  
        //      }) 
        //      $("#b1").click(function(){ 
        //         $("#forClass").removeClass()  
        //      }) 
        //     $("#b1").click(function(){ 
        //        $("#forClass").toggleClass("c1 c2 c3")  
        //     })   
        // })

//append and prepend styling  ---------------------------------------------------------------------------------------------------
$(document).ready(function(){
    $("#append").click(function(){
        $("#enddir").append("<h1>Done APpend</h1>")
    })
    $("#prepend").click(function(){
        $("#enddir").prepend("<h1>Done prepend</h1>")
    })
    $("#after").click(function(){
        $("#enddir").after("<h1>Done after methodology</h1>")
    })
    $("#before").click(function(){
        $("#enddir").before("<h1>Done before methodology</h1>")
    })
  
  
})