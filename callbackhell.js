setTimeout(()=>{
    document.getElementById('counter').innerHTML="10";
    setTimeout(function(){
        document.getElementById('counter').innerHTML="9"
        setTimeout(function(){
            document.getElementById('counter').innerHTML="8"
            setTimeout(function(){
                document.getElementById('counter').innerHTML="7"
                setTimeout(function(){
                    document.getElementById('counter').innerHTML="6"
                    setTimeout(function(){
                        document.getElementById('counter').innerHTML="5"
                        setTimeout(function(){
                            document.getElementById('counter').innerHTML="4"
                            setTimeout(function(){
                                document.getElementById('counter').innerHTML="3"
                                setTimeout(function(){
                                    document.getElementById('counter').innerHTML="2"
                                    setTimeout(function(){
                                        document.getElementById('counter').innerHTML="1"
                                        setTimeout(function(){
                                            document.getElementById('counter').innerHTML="HAPPY INDEPENDENCE DAY"},1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},500);
