(function() {
    'use strict';

    function sessionService() {

        /*---------- Private methods ----------*/

        function getSessionValue(name) {
            if (!name) { return undefined; }
            return localStorage.getItem(name);
        }

        function setSessionValue(name, newValue) {
            var oldValue;

            if (!name) { return undefined; }

            oldValue = localStorage.getItem(name);
            localStorage.setItem(name, newValue);
            return oldValue;
        }

        function clear() {
            localStorage.clear();
        }

        /*---------- Public methods ----------*/

        function getSecurityToken() {
            return getSessionValue('laxstats.token');
        }

        function setSecurityToken(authToken) {
            if (authToken) {
                setSessionValue('laxstats.authenticated', true);
                return setSessionValue('laxstats.token', authToken);
            }
            return null;
        }

        function createSession(data, authToken) {
            if (data) {
                setSessionValue('laxstats.authenticated', data.authenticated);
                setSessionValue('laxstats.authorities', data.authorities);
                setSessionValue('laxstats.credentials', data.credentials);
                setSessionValue('laxstats.details', data.details);
                setSessionValue('laxstats.username', data.name);
                setSessionValue('laxstats.principal', data.principal);
                setSessionValue('laxstats.sessionId', data.details.sessionId);
                setSessionValue('laxstats.token', authToken);
                return true;
            }
            return false;
        }

        function destroySession() {
            clear();
        }

        function getCredentials() {
            return getSessionValue('laxstats.credentials');
        }

        function getUser() {
            return getSessionValue('laxstats.principal');
        }

        function getSessionId() {
            return getSessionValue('laxstats.sessionId');
        }

        function getUsername() {
            return getSessionValue('laxstats.username');
        }

        function getUserRole() {
            if (getSessionValue('laxstats.authorities')) {
                var arr = getSessionValue('laxstats.authorities');
                return arr[0].authority;
            }
            return -1;
        }

        function isAuthenticated() {
            return getSessionValue('laxstats.authenticated');
        }

        return {
            getSecurityToken : getSecurityToken,
            setSecurityToken : setSecurityToken,
            createSession : createSession,
            destroySession : destroySession,
            getCredentials : getCredentials,
            getSessionId : getSessionId,
            getUsername : getUsername,
            getUserRole : getUserRole,
            isAuthenticated : isAuthenticated
        };
    }

    angular.module('laxstats.core').factory('SessionService', sessionService);
})();