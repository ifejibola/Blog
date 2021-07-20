import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import serialize from 'serialize-javascript'
import MainRouter from '../../client/MainRouter'

export default (req, store, context) => {

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(MainRouter)}</div>
      </StaticRouter>
    </Provider>
  );

  //Helmet
  const helmet = Helmet.renderStatic();
  // <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  return (
    `
        <html>
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <!-- Google Fonts -->
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
            <!-- START: Styles -->
            <!-- Swiper -->
            <link rel="stylesheet" href="folder/swiper.min.css" />
            <!-- Fancybox -->
            <link rel="stylesheet" href="folder/jquery.fancybox.min.css" />
            <!-- Themebau -->
            <link rel="stylesheet" href="folder/themebau.css">
            <!-- Custom Styles -->
            <link rel="stylesheet" href="folder/custom.css">
            <!-- END: Styles -->
            <!-- jQuery -->
            <script src="folder/jquery.min.js"></script>

        </head>
        <body>
          <div id="root">${content}</div>
          <div id="mocha"></div>

          <script src="https://unpkg.com/chai/chai.js"></script>
          <script src="https://unpkg.com/mocha/mocha.js"></script>
      
          <script class="mocha-init">
            mocha.setup('bdd');
            mocha.growl(); // <-- Enables web notifications
          </script>
          <script class="mocha-exec">
            mocha.run();
          </script>
          <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
          </script>
          <script src="folder/ofi.min.js"></script>
          <script src="folder/popper.min.js"></script>
          <script src="folder/bootstrap.min.js"></script>
          <script src="folder/validator.min.js"></script>
          <script src="folder/imagesloaded.pkgd.min.js"></script>
          <script src="folder/swiper.min.js"></script>
          <script src="folder/anime.min.js"></script>
          <script src="folder/rellax.min.js"></script>
          <script src="folder/jquery.countdown.min.js"></script>
          <script src="folder/moment.min.js"></script>
          <script src="folder/moment-timezone-with-data.min.js"></script>
          <script src="folder/isotope.pkgd.min.js"></script>
          <script src="folder/packery-mode.pkgd.min.js"></script>
          <script src="folder/jarallax.min.js"></script>
          <script src="folder/jarallax-video.min.js"></script>
          <script src="folder/jquery.fancybox.min.js"></script>
          <script src="folder/themebau.min.js"></script>
         
          <script src="bundle.js"></script>
        </body>
      </html>
        `
  );
};