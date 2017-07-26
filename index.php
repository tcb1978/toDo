<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <!--Font Awsome-->
        <script src="https://use.fontawesome.com/abd5b2140b.js"></script>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
        <!--stylesheet-->
        <link rel="stylesheet" href="src/css/main.css">
    </head>
    <body>        
        <header>  
            <div class="input-group">
                <input id="item" type="text" class="" placeholder="Enter an activity to do...">
                <span class="input-group-btn item-add" id="item">
                    <button id="add" class="btn btn-default activity-add center-me" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
                </span>
            </div><!-- /input-group -->                
            </header>
            <!--uncompleted items-->
            <div class="todo-container">
                <ul class="todo" id="todo"></ul>
                <div class="hide-show-completed-items">
                    <button id="hideShow" class="btn btn-default hidden" type="button"><i class="fa fa-toggle-on" aria-hidden="true"></i></button>
                </div>
            </div>
            <!--main.js-->
            <script src="src/js/main.js"></script>
            <!--jQuery-->
            <script src="//code.jquery.com/jquery-3.2.1.js"></script>
            <script src="/src/js/jquery-3.2.1.js"></script>
            <script src="/src/js/app.js"></script>
            <!--reorder script-->
            <script src="/src/js/reorder.js"></script>
            <script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
            <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.4.min.js"><\/script>')</script>
            <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
            <script>
            window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
            ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
            </script>
            <script src="https://www.google-analytics.com/analytics.js" async defer></script>
        </body>
    </html>