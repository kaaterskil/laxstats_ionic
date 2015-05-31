(function() {
    'use strict';

    function sessionService() {

        /*---------- Private methods ----------*/

        function getSessionValue(name) {
            if (sessionStorage.getItem(name)) { return JSON.parse(sessionStorage.getItem(name)); }
            return undefined;
        }

        function setSessionValue(name, value) {
            sessionStorage.setItem(name, value !== undefined ? JSON.stringify(value) : undefined);
        }

        function clear() {
            sessionStorage.clear();
        }

        /*---------- Public methods ----------*/

        function createSession(data, token) {
            if (data) {
                setSessionValue('laxstats.authenticated', data.authenticated);
                setSessionValue('laxstats.authorities', data.authorities);
                setSessionValue('laxstats.credentials', data.credentials);
                setSessionValue('laxstats.details', data.details);
                setSessionValue('laxstats.username', data.name);
                setSessionValue('laxstats.principal', data.principal);
                setSessionValue('laxstats.sessionId', data.details.sessionId);
                setSessionValue('laxstats.token', token);
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

        function getSecurityToken() {
            return getSessionValue('laxstats.token');
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
            createSession : createSession,
            destroySession : destroySession,
            getCredentials : getCredentials,
            getSecurityToken : getSecurityToken,
            getSessionId : getSessionId,
            getUsername : getUsername,
            getUserRole : getUserRole,
            isAuthenticated : isAuthenticated
        };
    }

    angular.module('laxstats.core').factory('SessionService', sessionService);
})();