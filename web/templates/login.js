function getData(){
        $('#action').append('<div><img src="/static/images/loading.gif" width="32" height="32"/></div>');
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });
        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                $('#action').html("");
                if(response['status']==401){
                $('#action').append('<img width="35" height="35" src="/static/images/error.png"/>');
                }else{
                $('#action').append('<img width="35" height="35" src="/static/images/check.png"/>');
                var url = 'http://' + document.domain + ':' + location.port + '/static/chat.html';
                 $(location).attr('href',url);
                }



                //$('#action').html(response['statusText']);
            },
            error: function(response){
                //alert(JSON.stringify(response));
                $('#action').html("");
                //$('#action').append('<img width="35" height="35" src="/static/images/logo/fail.png"/>');
                //$('#action').html(response['statusText']);
                if(response['status']==401){
                $('#action').append('<img width="35" height="35" src="/static/images/error.png"/"/>');
                }else{
                $('#action').append('<img width="35" height="35" src="/static/images/check.png"/"/>');
                var url = 'http://' + document.domain + ':' + location.port + '/static/chat.html';
                 $(location).attr('href',url);
                }
            //success: function(response){
                //alert(JSON.stringify(response));
            //    $('#action').html("")
            //    $('#action').append('<img src="/static/images/check.png"/>');
                //$
            //},
            //error: function(response){
                //alert(JSON.stringify(response));
            //    $('#action').html("")
            //    $('#action').append('<img src="/static/images/error.png"/>')
            //}
        }});
}