'use strict';

angular.module('instaService',[])

.service('instaService', function FormService($http,$q) {
    $http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With'];

    return {
        getLatest: function(num) {
            var url = '/api/insta/latest/' + num + '';
            return $http.get(url).then(function (response) {
                return response.data;
            });
        },
        getByHashtag: function(num, hashtag) {
            return $http.get('/api/insta/category/' + hashtag + '/' + num).then(function (response) {
                return response.data;
            });
        }
    };
});


//https://api.instagram.com/v1/users/1614719755/media/recent?client_id=1fa7f7c8941b46fab2c1003ca08d9cf2&count=6 HTTP/1.1