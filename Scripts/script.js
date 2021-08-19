//COOKIE CONSENT PLUGIN
      var options = {
        title: '&#x1F36A; Accept Cookies?',
        message: 'This website uses cookies to ensure you get the best experience, especially for the socials page. No personal data is stored. By continuing to use this site you agree to its use.',
        delay: 600,
        expires: 3,
        advancedBtnLabel: '',
        acceptBtnLabel: 'Accept Cookies',
        moreInfoLabel: '',
        cookieTypesTitle: '',
        fixedCookieTypeLabel: '',
        fixedCookieTypeDesc: ''
    }

    $(document).ready(function() {
        $('body').ihavecookies(options);

        cookieTypes: [
          {
              
          }
      ],

        $('#ihavecookiesBtn').on('click', function(){
            $('body').ihavecookies(options, 'reinit');
        });
    });