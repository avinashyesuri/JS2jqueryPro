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

//append and prepend empty and remove styling  ---------------------------------------------------------------------------------------------------
// $(document).ready(function(){
//     $("#append").click(function(){
//         $("#enddir").append("<h1>Done APpend</h1>")
//     })
//     $("#prepend").click(function(){
//         $("#enddir").prepend("<h1>Done prepend</h1>")
//     })
//     $("#after").click(function(){
//         $("#enddir").after("<h1>Done after methodology</h1>")
//     })
//     $("#before").click(function(){
//         $("#enddir").before("<h1>Done before methodology</h1>")
//     })
//         $("#empty").click(function(){
//             $("#enddir").empty()
//         })
//         $("#remove").click(function(){
//             $("#enddir").remove()
//         })
      
//         $("#clone").click(function(){
//             $("#enddir").clone().prepend("body")
//         })

  
// })


//select, change, submit   styling  ---------------------------------------------------------------------------------------------------
// $(document).ready(function(){
//     $("#stateSubmit").click(function(){
//         var item = $("#states").val()
//         if(item =="1"){
//             alert("select item")
//         }
//         else{
//             $("#sttres").text("hi u selected the   "+  item)
        
//         } 
//     })
  
  
// })
// $(document).ready(function(){
//     $("#states").change(function(){
//         var item = $("#states").val()
//         if(item =="1"){
//             alert("select item")
//         }
//         else{
//             $("#sttres").text("hi u selected the   "+  item)
        
//         } 
//     })
  
  
// })
// $(document).ready(function(){
//     $("#selMeth").select(function(){
//        var limit =  $("#selMeth").val()
//             alert("select item "+ limit)
//     })
// })
// $(document).ready(function(){
//     $("#stasub1").submit(function(){
//        var limit =  $("#selMeth").val()
//             alert("select item "+ limit)
//     })
// })


// $(document).ready(function(){
//     $("#stasub1").submit(function(){
//        var limit =  $("#selMeth").val()
//             alert("select item "+ limit)
//     })
// })








// //repalceWith remove clone -------------------------------------------------------
// $(document).ready(function() {
//     $("#replace-clone").click(function() {
//         // Clone the #replace-main div
//         var clonedElement = $("#replace-main").clone();
//         // Append the cloned element to the body or any other desired location
//         $("body").append(clonedElement);
//     });

//     $("#replace-remove").click(function() {
//         // Remove the #replace-main div
//         $("#replace-main").remove();
//     });

//     $("#replace-replace").click(function() {
//         // Replace the first #p-replace paragraph with new content
//         $("#p-replace3").first().replaceWith("<h1>querying all the vals</h1>");
//     });

//     $("#replace-all").click(function() {
//         // Replace the last #p-replace paragraph with new content
//         $("<p>Hi this is jQuery class no 5</p>").replaceAll("#replace-main p:last-child");
//     });
// });



//wrap wrapall wrapinner unwrap -------------------------------------------------------
// $(document).ready(function() {
//     $("#btn-wr1").click(function() {
//          $("p").wrap("<div id='div-wr1'></div>");// each tag has itisown container
//     });
//     $("#btn-wr2").click(function() {
//         $("p").unwrap();
//    });
//    $("#btn-wr3").click(function() {
//     $("p").wrapAll("<div id='div-wr2'></div>");
// }); //wrap all para tags in single contienr
//    $("#btn-wr3").click(function() {
//     $("#p-w1").wrapAll("<div id='div-wr2'></div>");
// }); // wrap only selected ones 

// $("#btn-wr4").click(function() {
//     $("#p-w").wrapInner("<h1 >hi all </h1>");
// }); // wrap only selected ones 
// });




//each method ----------------------------------------------------------------------------------------------------
// $(document).ready(function() {
//     $("h5").each(function(index,element) {
//         //  alert(index + $(element).text())
//         if($(element).text()=="cherry"){
//             return false
//         }
      
//             alert("don") 
        
        
//     });
//     alert(index + " " + $(element).text())
// })


// CHECKBOX METHOD 
$(document).ready(function(){
    $("#btn").click(function(){
        var option =$('input[type="radio"]:checked');
        if(option.length > 0)
        {
            $('#outputDiv').html(option.val() + "is Checked.")
        }
        else{
            $('#outputDiv').html("no radiobutton is selected") 
        }
    })
})