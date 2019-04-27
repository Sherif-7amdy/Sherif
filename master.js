var fluidPlayerScriptLocation = function() {
    var _0xc765x2, _0xc765x3, _0xc765x4 = '';
    return document['currentScript'] ? _0xc765x4 = document['currentScript']['src'] : (_0xc765x2 = document['getElementsByTagName']('script'), _0xc765x4 = void(0) !== (_0xc765x3 = _0xc765x2[_0xc765x2['length'] - 1])['getAttribute']['length'] ? _0xc765x3['src'] : _0xc765x3['getAttribute']('src', -1)), _0xc765x4 ? _0xc765x4['substring'](0, _0xc765x4['lastIndexOf']('/') + 1) : ''
}();
'function' != typeof Object['assign'] && Object['defineProperty'](Object, 'assign', {
        value: function(_0xc765x2, _0xc765x3) {
            'use strict';
            if (null == _0xc765x2) {
                throw new TypeError('Cannot convert undefined or null to object')
            };
            for (var _0xc765x4 = Object(_0xc765x2), _0xc765x5 = 1; _0xc765x5 < arguments['length']; _0xc765x5++) {
                var _0xc765x6 = arguments[_0xc765x5];
                if (null != _0xc765x6) {
                    for (var _0xc765x7 in _0xc765x6) {
                        Object['prototype']['hasOwnProperty']['call'](_0xc765x6, _0xc765x7) && (_0xc765x4[_0xc765x7] = _0xc765x6[_0xc765x7])
                    }
                }
            };
            return _0xc765x4
        },
        writable: !0,
        configurable: !0
    }),
    function() {
        if ('function' == typeof window['CustomEvent']) {
            return
        };

        function _0xc765x2(_0xc765x2, _0xc765x3) {
            _0xc765x3 = _0xc765x3 || {
                bubbles: !1,
                cancelable: !1,
                detail: void(0)
            };
            var _0xc765x4 = document['createEvent']('CustomEvent');
            return _0xc765x4['initCustomEvent'](_0xc765x2, _0xc765x3['bubbles'], _0xc765x3['cancelable'], _0xc765x3['detail']), _0xc765x4
        }
        _0xc765x2['prototype'] = window['Event']['prototype'], window['CustomEvent'] = _0xc765x2
    }(), fluidPlayer = function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = function(_0xc765x2, _0xc765x3) {
                for (var _0xc765x4 = _0xc765x3['length'], _0xc765x5 = 0; _0xc765x5 < _0xc765x4; _0xc765x5++) {
                    if (_0xc765x3[_0xc765x5] == _0xc765x2) {
                        return !0
                    }
                };
                return !1
            },
            _0xc765x5 = fluidPlayerClass['constructor']();
        for (var _0xc765x6 in fluidPlayerClass) {
            fluidPlayerClass['hasOwnProperty'](_0xc765x6) && !_0xc765x4(_0xc765x6, fluidPlayerClass['notCloned']) && (_0xc765x5[_0xc765x6] = fluidPlayerClass[_0xc765x6])
        };
        return fluidPlayerClass['instances']['push'](_0xc765x5), _0xc765x5['init'](_0xc765x2, _0xc765x3), _0xc765x5
    };
var fluidPlayerClass = {
    vttParserScript: '/scripts/webvtt.min.js',
    instances: [],
    notCloned: ['notCloned', 'vttParserScript', 'instances', 'getInstanceById', 'requestStylesheet', 'reqiestScript', 'isTouchDevice', 'vastOptions', 'displayOptions', 'getEventOffsetX', 'getEventOffsetY', 'getTranslateX', 'toggleElementText', 'getMobileOs', 'findClosestParent', 'activeVideoPlayerId', 'getInstanceIdByWrapperId', 'timer', 'timerPool', 'adList', 'adPool', 'isUserActive', 'isCurrentlyPlayingAd', 'initialAnimationSet'],
    version: '2.4.3',
    homepage: 'https://www.yalla-shoot.us//',
    activeVideoPlayerId: null,
    getInstanceById: function(_0xc765x2) {
        for (var _0xc765x3 = 0; _0xc765x3 < this['instances']['length']; _0xc765x3++) {
            if (this['instances'][_0xc765x3]['videoPlayerId'] === _0xc765x2) {
                return this['instances'][_0xc765x3]
            }
        };
        return null
    },
    getInstanceIdByWrapperId: function(_0xc765x2) {
        return void(0) !== _0xc765x2 ? _0xc765x2['replace']('fluid_video_wrapper_', '') : null
    },
    requestStylesheet: function(_0xc765x2, _0xc765x3) {
        if (!document['getElementById'](_0xc765x2)) {
            var _0xc765x4 = document['getElementsByTagName']('head')[0],
                _0xc765x5 = document['createElement']('link');
            _0xc765x5['id'] = _0xc765x2, _0xc765x5['rel'] = 'stylesheet', _0xc765x5['type'] = 'text/css', _0xc765x5['href'] = _0xc765x3, _0xc765x5['media'] = 'all', _0xc765x4['appendChild'](_0xc765x5)
        }
    },
    requestScript: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = document['getElementsByTagName']('head')[0],
            _0xc765x5 = document['createElement']('script');
        _0xc765x5['type'] = 'text/javascript', _0xc765x5['src'] = _0xc765x2, _0xc765x5['onreadystatechange'] = _0xc765x3, _0xc765x5['onload'] = _0xc765x3, _0xc765x4['appendChild'](_0xc765x5)
    },
    isTouchDevice: function() {
        return !!('ontouchstart' in window || navigator['maxTouchPoints'])
    },
    getMobileOs: function() {
        var _0xc765x2, _0xc765x3 = navigator['userAgent'],
            _0xc765x4 = {
                device: !1,
                userOs: !1,
                userOsVer: !1,
                userOsMajor: !1
            };
        if (_0xc765x3['match'](/iPad/i) ? (_0xc765x4['device'] = 'iPad', _0xc765x4['userOs'] = 'iOS', _0xc765x2 = _0xc765x3['indexOf']('OS ')) : _0xc765x3['match'](/iPhone/i) ? (_0xc765x4['device'] = 'iPhone', _0xc765x4['userOs'] = 'iOS', _0xc765x2 = _0xc765x3['indexOf']('OS ')) : _0xc765x3['match'](/Android/i) ? (_0xc765x4['userOs'] = 'Android', _0xc765x2 = _0xc765x3['indexOf']('Android ')) : _0xc765x4['userOs'] = !1, 'iOS' === _0xc765x4['userOs'] && -1 < _0xc765x2) {
            var _0xc765x5 = _0xc765x3['substr'](_0xc765x2 + 3); - 1 !== _0xc765x5['indexOf'](' ') && (_0xc765x4['userOsVer'] = _0xc765x5['substring'](0, _0xc765x5['indexOf'](' '))['replace'](/_/g, '.'), _0xc765x4['userOsMajor'] = parseInt(_0xc765x4['userOsVer']))
        } else {
            'Android' === _0xc765x4['userOs'] && -1 < _0xc765x2 ? _0xc765x4['userOsVer'] = _0xc765x3['substr'](_0xc765x2 + 8, 3) : _0xc765x4['userOsVer'] = !1
        };
        return _0xc765x4
    },
    getBrowserVersion: function() {
        var _0xc765x2, _0xc765x3, _0xc765x4 = navigator['userAgent'],
            _0xc765x5 = {
                browserName: !1,
                fullVersion: !1,
                majorVersion: !1,
                userOsMajor: !1
            };
        try {
            _0xc765x5['browserName'] = navigator['appName'], -1 != (_0xc765x2 = _0xc765x4['indexOf']('OPR/')) ? (_0xc765x5['browserName'] = 'Opera', _0xc765x5['fullVersion'] = _0xc765x4['substring'](_0xc765x2 + 4)) : -1 != (_0xc765x2 = _0xc765x4['indexOf']('Opera')) ? (_0xc765x5['browserName'] = 'Opera', _0xc765x5['fullVersion'] = _0xc765x4['substring'](_0xc765x2 + 6), -1 != (_0xc765x2 = _0xc765x4['indexOf']('Version')) && (_0xc765x5['fullVersion'] = _0xc765x4['substring'](_0xc765x2 + 8))) : -1 != (_0xc765x2 = _0xc765x4['indexOf']('MSIE')) ? (_0xc765x5['browserName'] = 'Microsoft Internet Explorer', _0xc765x5['fullVersion'] = _0xc765x4['substring'](_0xc765x2 + 5)) : -1 != (_0xc765x2 = _0xc765x4['indexOf']('Chrome')) ? (_0xc765x5['browserName'] = 'Google Chrome', _0xc765x5['fullVersion'] = _0xc765x4['substring'](_0xc765x2 + 7)) : -1 != (_0xc765x2 = _0xc765x4['indexOf']('Safari')) ? (_0xc765x5['browserName'] = 'Safari', _0xc765x5['fullVersion'] = _0xc765x4['substring'](_0xc765x2 + 7), -1 != (_0xc765x2 = _0xc765x4['indexOf']('Version')) && (_0xc765x5['fullVersion'] = _0xc765x4['substring'](_0xc765x2 + 8))) : -1 != (_0xc765x2 = _0xc765x4['indexOf']('Firefox')) ? (_0xc765x5['browserName'] = 'Mozilla Firefox', _0xc765x5['fullVersion'] = _0xc765x4['substring'](_0xc765x2 + 8)) : (_0xc765x3 = _0xc765x4['lastIndexOf'](' ') + 1) < (_0xc765x2 = _0xc765x4['lastIndexOf']('/')) && (_0xc765x5['browserName'] = _0xc765x4['substring'](_0xc765x3, _0xc765x2), _0xc765x5['fullVersion'] = _0xc765x4['substring'](_0xc765x2 + 1), _0xc765x5['browserName']['toLowerCase']() == _0xc765x5['browserName']['toUpperCase']() && (_0xc765x5['browserName'] = navigator['appName'])), -1 != (_0xc765x3 = _0xc765x5['fullVersion']['indexOf'](';')) && (_0xc765x5['fullVersion'] = _0xc765x5['fullVersion']['substring'](0, _0xc765x3)), -1 != (_0xc765x3 = _0xc765x5['fullVersion']['indexOf'](' ')) && (_0xc765x5['fullVersion'] = _0xc765x5['fullVersion']['substring'](0, _0xc765x3)), _0xc765x5['majorVersion'] = parseInt('' + _0xc765x5['fullVersion'], 10), isNaN(_0xc765x5['majorVersion']) && (_0xc765x5['fullVersion'] = '' + parseFloat(navigator['appVersion']), _0xc765x5['majorVersion'] = parseInt(navigator['appVersion'], 10))
        } catch (_0xc765x2) {};
        return _0xc765x5
    },
    getCurrentVideoDuration: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId']);
        return _0xc765x2 ? _0xc765x2['duration'] : 0
    },
    getClickThroughUrlFromLinear: function(_0xc765x2) {
        var _0xc765x3 = _0xc765x2['getElementsByTagName']('VideoClicks');
        if (_0xc765x3['length']) {
            var _0xc765x4 = _0xc765x3[0]['getElementsByTagName']('ClickThrough');
            if (_0xc765x4['length']) {
                return this['extractNodeData'](_0xc765x4[0])
            }
        };
        return !1
    },
    getVastAdTagUriFromWrapper: function(_0xc765x2) {
        var _0xc765x3 = _0xc765x2['getElementsByTagName']('Wrapper');
        if (void(0) !== _0xc765x3 && _0xc765x3['length']) {
            var _0xc765x4 = _0xc765x3[0]['getElementsByTagName']('VASTAdTagURI');
            if (_0xc765x4['length']) {
                return this['extractNodeData'](_0xc765x4[0])
            }
        };
        return !1
    },
    hasInLine: function(_0xc765x2) {
        var _0xc765x3 = _0xc765x2['getElementsByTagName']('InLine');
        return void(0) !== _0xc765x3 && _0xc765x3['length']
    },
    hasVastAdTagUri: function(_0xc765x2) {
        var _0xc765x3 = _0xc765x2['getElementsByTagName']('VASTAdTagURI');
        return void(0) !== _0xc765x3 && _0xc765x3['length']
    },
    hasVastAdTagUriFromWrapper: function(_0xc765x2) {
        if (void(0) !== _0xc765x2 && _0xc765x2['length']) {
            var _0xc765x3 = _0xc765x2[0]['getElementsByTagName']('Linear');
            if (null != _0xc765x3 && _0xc765x3['length']) {
                return this['getMediaFileFromLinear'](_0xc765x3[0])
            }
        };
        return !1
    },
    getClickThroughUrlFromNonLinear: function(_0xc765x2) {
        var _0xc765x3 = '';
        if (_0xc765x2['getElementsByTagName']('NonLinear')['length']) {
            var _0xc765x4 = _0xc765x2['getElementsByTagName']('NonLinearClickThrough');
            _0xc765x4['length'] && (_0xc765x3 = this['extractNodeData'](_0xc765x4[0]))
        };
        return _0xc765x3
    },
    getTrackingFromLinear: function(_0xc765x2) {
        var _0xc765x3 = _0xc765x2['getElementsByTagName']('TrackingEvents');
        return _0xc765x3['length'] ? _0xc765x3[0]['getElementsByTagName']('Tracking') : []
    },
    getDurationFromLinear: function(_0xc765x2) {
        var _0xc765x3 = _0xc765x2['getElementsByTagName']('Duration');
        if (_0xc765x3['length'] && void(0) !== _0xc765x3[0]['childNodes'][0]) {
            var _0xc765x4 = this['extractNodeData'](_0xc765x3[0]);
            return this['convertTimeStringToSeconds'](_0xc765x4)
        };
        return !1
    },
    getDurationFromNonLinear: function(_0xc765x2) {
        var _0xc765x3 = 0,
            _0xc765x4 = _0xc765x2['getElementsByTagName']('NonLinear');
        return _0xc765x4['length'] && void(0) !== _0xc765x4[0]['getAttribute']('minSuggestedDuration') && (_0xc765x3 = this['convertTimeStringToSeconds'](_0xc765x4[0]['getAttribute']('minSuggestedDuration'))), _0xc765x3
    },
    getDimensionFromNonLinear: function(_0xc765x2) {
        var _0xc765x3 = {
                width: null,
                height: null
            },
            _0xc765x4 = _0xc765x2['getElementsByTagName']('NonLinear');
        return _0xc765x4['length'] && (void(0) !== _0xc765x4[0]['getAttribute']('width') && (_0xc765x3['width'] = _0xc765x4[0]['getAttribute']('width')), void(0) !== _0xc765x4[0]['getAttribute']('height') && (_0xc765x3['height'] = _0xc765x4[0]['getAttribute']('height'))), _0xc765x3
    },
    getCreativeTypeFromStaticResources: function(_0xc765x2) {
        var _0xc765x3 = '',
            _0xc765x4 = _0xc765x2['getElementsByTagName']('NonLinear');
        return _0xc765x4['length'] && void(0) !== _0xc765x4[0]['childNodes'][0] && (_0xc765x3 = _0xc765x4[0]['getElementsByTagName']('StaticResource')[0]['getAttribute']('creativeType')), _0xc765x3['toLowerCase']()
    },
    getMediaFilesFromLinear: function(_0xc765x2) {
        var _0xc765x3 = _0xc765x2['getElementsByTagName']('MediaFiles');
        return _0xc765x3['length'] ? _0xc765x3[0]['getElementsByTagName']('MediaFile') : []
    },
    getStaticResourcesFromNonLinear: function(_0xc765x2) {
        var _0xc765x3 = [],
            _0xc765x4 = _0xc765x2['getElementsByTagName']('NonLinear');
        return _0xc765x4['length'] && (_0xc765x3 = _0xc765x4[0]['getElementsByTagName']('StaticResource')), _0xc765x3
    },
    extractNodeData: function(_0xc765x2) {
        for (var _0xc765x3 = '', _0xc765x4 = 0; _0xc765x4 < _0xc765x2['childNodes']['length']; _0xc765x4++) {
            var _0xc765x5 = _0xc765x2['childNodes'][_0xc765x4];
            8 === _0xc765x5['nodeType'] || 3 === _0xc765x5['nodeType'] && /^\s*$/ ['test'](_0xc765x5['nodeValue']) || (_0xc765x3 += _0xc765x5['nodeValue'])
        };
        return _0xc765x3['replace'](/(^\s+|\s+$)/g, '')
    },
    getMediaFileFromLinear: function(_0xc765x2) {
        var _0xc765x3, _0xc765x4 = this['getMediaFilesFromLinear'](_0xc765x2);
        return _0xc765x4['length'] && (_0xc765x3 = this['extractNodeData'](_0xc765x4[0])), _0xc765x3
    },
    getIconClickThroughFromLinear: function(_0xc765x2) {
        var _0xc765x3 = _0xc765x2['getElementsByTagName']('IconClickThrough');
        return _0xc765x3['length'] ? this['extractNodeData'](_0xc765x3[0]) : (this['displayOptions']['vastOptions']['adCTAText'] = !1, '')
    },
    getStaticResourceFromNonLinear: function(_0xc765x2) {
        for (var _0xc765x3, _0xc765x4 = this['getStaticResourcesFromNonLinear'](_0xc765x2), _0xc765x5 = 0; _0xc765x5 < _0xc765x4['length']; _0xc765x5++) {
            if (_0xc765x4[_0xc765x5]['getAttribute']('type') || (_0xc765x3 = this['extractNodeData'](_0xc765x4[_0xc765x5])), _0xc765x4[_0xc765x5]['getAttribute']('type') === this['displayOptions']['staticResource']) {
                return this['extractNodeData'](_0xc765x4[_0xc765x5])
            }
        };
        return _0xc765x3
    },
    registerTrackingEvents: function(_0xc765x2, _0xc765x3) {
        for (var _0xc765x4 = this['getTrackingFromLinear'](_0xc765x2), _0xc765x5 = '', _0xc765x6 = 0, _0xc765x7 = 0; _0xc765x7 < _0xc765x4['length']; _0xc765x7++) {
            switch (_0xc765x5 = _0xc765x4[_0xc765x7]['getAttribute']('event')) {
                case 'start':
                    ;
                case 'firstQuartile':
                    ;
                case 'midpoint':
                    ;
                case 'thirdQuartile':
                    ;
                case 'complete':
                    void(0) === _0xc765x3['tracking'][_0xc765x5] && (_0xc765x3['tracking'][_0xc765x5] = []), void(0) === _0xc765x3['stopTracking'][_0xc765x5] && (_0xc765x3['stopTracking'][_0xc765x5] = []), _0xc765x3['tracking'][_0xc765x5]['push'](_0xc765x4[_0xc765x7]['childNodes'][0]['nodeValue']), _0xc765x3['stopTracking'][_0xc765x5] = !1;
                    break;
                case 'progress':
                    void(0) === _0xc765x3['tracking'][_0xc765x5] && (_0xc765x3['tracking'][_0xc765x5] = []), _0xc765x6 = this['convertTimeStringToSeconds'](_0xc765x4[_0xc765x7]['getAttribute']('offset')), void(0) === _0xc765x3['tracking'][_0xc765x5][_0xc765x6] && (_0xc765x3['tracking'][_0xc765x5][_0xc765x6] = {
                        elements: [],
                        stopTracking: !1
                    }), _0xc765x3['tracking'][_0xc765x5][_0xc765x6]['elements']['push'](_0xc765x4[_0xc765x7]['childNodes'][0]['nodeValue'])
            }
        }
    },
    registerClickTracking: function(_0xc765x2, _0xc765x3) {
        if (_0xc765x2['length']) {
            for (var _0xc765x4 = 0; _0xc765x4 < _0xc765x2['length']; _0xc765x4++) {
                '' != _0xc765x2[_0xc765x4] && _0xc765x3['clicktracking']['push'](_0xc765x2[_0xc765x4])
            }
        }
    },
    registerImpressionEvents: function(_0xc765x2, _0xc765x3) {
        if (_0xc765x2['length']) {
            for (var _0xc765x4 = 0; _0xc765x4 < _0xc765x2['length']; _0xc765x4++) {
                var _0xc765x5 = this['extractNodeData'](_0xc765x2[_0xc765x4]);
                _0xc765x3['impression']['push'](_0xc765x5)
            }
        }
    },
    registerErrorEvents: function(_0xc765x2, _0xc765x3) {
        null != _0xc765x2 && 1 === _0xc765x2['length'] && 1 === _0xc765x2[0]['childNodes']['length'] && (_0xc765x3['errorUrl'] = _0xc765x2[0]['childNodes'][0]['nodeValue'])
    },
    announceError: function(_0xc765x2) {
        if (void(0) !== this['vastOptions']['errorUrl'] && this['vastOptions']['errorUrl']) {
            _0xc765x2 = void(0) !== _0xc765x2 ? parseInt(_0xc765x2) : 900;
            var _0xc765x3 = this['vastOptions']['errorUrl']['replace']('[ERRORCODE]', _0xc765x2);
            this['callUris']([_0xc765x3])
        }
    },
    announceLocalError: function(_0xc765x2, _0xc765x3) {
        _0xc765x2 = void(0) !== _0xc765x2 ? parseInt(_0xc765x2) : 900, message = '[Error] (' + _0xc765x2 + '): ', message += _0xc765x3 || 'Failed to load Vast', console['log'](message)
    },
    getClickTrackingEvents: function(_0xc765x2) {
        var _0xc765x3 = [],
            _0xc765x4 = _0xc765x2['getElementsByTagName']('VideoClicks');
        if (_0xc765x4['length']) {
            var _0xc765x5 = _0xc765x4[0]['getElementsByTagName']('ClickTracking');
            if (_0xc765x5['length']) {
                for (var _0xc765x6 = 0; _0xc765x6 < _0xc765x5['length']; _0xc765x6++) {
                    var _0xc765x7 = this['extractNodeData'](_0xc765x5[_0xc765x6]);
                    _0xc765x3['push'](_0xc765x7)
                }
            }
        };
        return _0xc765x3
    },
    getNonLinearClickTrackingEvents: function(_0xc765x2) {
        var _0xc765x3 = [];
        if (_0xc765x2['getElementsByTagName']('NonLinear')['length']) {
            var _0xc765x4 = _0xc765x2['getElementsByTagName']('NonLinearClickTracking');
            if (_0xc765x4['length']) {
                for (var _0xc765x5 = 0; _0xc765x5 < _0xc765x4['length']; _0xc765x5++) {
                    var _0xc765x6 = this['extractNodeData'](_0xc765x4[_0xc765x5]);
                    _0xc765x3['push'](_0xc765x6)
                }
            }
        };
        return _0xc765x3
    },
    callUris: function(_0xc765x2) {
        for (var _0xc765x3 = 0; _0xc765x3 < _0xc765x2['length']; _0xc765x3++) {
            (new Image)['src'] = _0xc765x2[_0xc765x3]
        }
    },
    recalculateAdDimensions: function(_0xc765x2) {
        if (!_0xc765x2 && void(0) !== this['videoPlayerId']) {
            _0xc765x2 = this['videoPlayerId']
        };
        var _0xc765x3 = document['getElementById'](_0xc765x2),
            _0xc765x4 = document['getElementById']('vast_clickthrough_layer_' + _0xc765x2);
        _0xc765x4 && (_0xc765x4['style']['width'] = _0xc765x3['offsetWidth'] + 'px', _0xc765x4['style']['height'] = _0xc765x3['offsetHeight'] + 'px');
        var _0xc765x5 = this['checkFullscreenSupport']('fluid_video_wrapper_' + _0xc765x2),
            _0xc765x6 = document['getElementById'](_0xc765x2 + '_fluid_control_fullscreen'),
            _0xc765x7 = document['getElementById'](_0xc765x2 + 'context_option_fullscreen');
        _0xc765x5 ? null === document[_0xc765x5['isFullscreen']] ? this['fullscreenOff'](_0xc765x6, _0xc765x7) : this['fullscreenOn'](_0xc765x6, _0xc765x7) : -1 !== fullscreenTag['className']['search'](/\bpseudo_fullscreen\b/g) ? (fullscreenTag['className'] += ' pseudo_fullscreen', this['fullscreenOn'](_0xc765x6, _0xc765x7)) : (fullscreenTag['className'] = fullscreenTag['className']['replace'](/\bpseudo_fullscreen\b/g, ''), this['fullscreenOff'](_0xc765x6, _0xc765x7))
    },
    prepareVast: function(_0xc765x2) {
        var _0xc765x3 = this,
            _0xc765x4 = document['getElementById'](this['videoPlayerId']),
            _0xc765x5 = [];
        _0xc765x5['length'] = 0, _0xc765x5 = _0xc765x3['findRoll'](_0xc765x2);
        for (var _0xc765x6 = 0; _0xc765x6 < _0xc765x5['length']; _0xc765x6++) {
            var _0xc765x7 = _0xc765x5[_0xc765x6];
            !0 !== _0xc765x3['adList'][_0xc765x7]['vastLoaded'] && !0 !== _0xc765x3['adList'][_0xc765x7]['error'] && (_0xc765x3['processUrl'](_0xc765x3['adList'][_0xc765x7]['vastTag'], _0xc765x7), _0xc765x4['addEventListener']('adId_' + _0xc765x7, _0xc765x3[_0xc765x2]))
        }
    },
    toggleLoader: function(_0xc765x2) {
        if (this['isLoading'] = !!_0xc765x2, 'browser' !== this['displayOptions']['layoutControls']['layout']) {
            var _0xc765x3 = document['getElementById']('vast_video_loading_' + this['videoPlayerId']);
            _0xc765x3['style']['display'] = _0xc765x2 ? 'table' : 'none'
        }
    },
    sendRequest: function(_0xc765x2, _0xc765x3, _0xc765x4, _0xc765x5) {
        var _0xc765x6 = new XMLHttpRequest;
        _0xc765x6['onreadystatechange'] = _0xc765x5, _0xc765x6['open']('GET', _0xc765x2, !0), _0xc765x6['withCredentials'] = _0xc765x3, _0xc765x6['timeout'] = _0xc765x4, _0xc765x6['send']()
    },
    playMainVideoWhenVastFails: function(_0xc765x2) {
        var _0xc765x3 = this,
            _0xc765x4 = document['getElementById'](_0xc765x3['videoPlayerId']);
        _0xc765x4['removeEventListener']('loadedmetadata', _0xc765x3['switchPlayerToVastMode']), _0xc765x4['pause'](), _0xc765x3['toggleLoader'](!1), _0xc765x3['displayOptions']['vastOptions']['vastAdvanced']['noVastVideoCallback'](), _0xc765x3['vastOptions'] && void(0) !== this['vastOptions']['errorUrl'] ? _0xc765x3['announceError'](_0xc765x2) : _0xc765x3['announceLocalError'](_0xc765x2), _0xc765x3['switchToMainVideo']()
    },
    switchPlayerToVastMode: function() {},
    processVastXml: function(_0xc765x2, _0xc765x3, _0xc765x4) {
        var _0xc765x5 = this;
        if (_0xc765x2) {
            var _0xc765x6 = _0xc765x2['getElementsByTagName']('Impression');
            null !== _0xc765x6 && _0xc765x5['registerImpressionEvents'](_0xc765x6, _0xc765x4);
            var _0xc765x7 = _0xc765x2['getElementsByTagName']('Error');
            null !== _0xc765x7 && _0xc765x5['registerErrorEvents'](_0xc765x7, _0xc765x4);
            var _0xc765x9 = _0xc765x2['getElementsByTagName']('Creative');
            if (void(0) !== _0xc765x9 && _0xc765x9['length']) {
                var _0xc765xa = _0xc765x9[0]['getElementsByTagName']('Linear');
                if (null != _0xc765xa && _0xc765xa['length']) {
                    var _0xc765xb = _0xc765xa[0];
                    _0xc765x5['registerTrackingEvents'](_0xc765xb, _0xc765x4);
                    var _0xc765xc = _0xc765x5['getClickTrackingEvents'](_0xc765xb);
                    _0xc765x5['registerClickTracking'](_0xc765xc, _0xc765x4), !_0xc765x5['hasVastAdTagUri'](_0xc765x2) && _0xc765x5['hasInLine'](_0xc765x2) && (_0xc765x4['adFinished'] = !1, _0xc765x4['adType'] = 'linear', _0xc765x4['skipoffset'] = _0xc765x5['convertTimeStringToSeconds'](_0xc765xb['getAttribute']('skipoffset')), _0xc765x4['clickthroughUrl'] = _0xc765x5['getClickThroughUrlFromLinear'](_0xc765xb), _0xc765x4['duration'] = _0xc765x5['getDurationFromLinear'](_0xc765xb), _0xc765x4['mediaFile'] = _0xc765x5['getMediaFileFromLinear'](_0xc765xb), _0xc765x4['iconClick'] = _0xc765x5['getIconClickThroughFromLinear'](_0xc765xb))
                };
                void(0) !== _0xc765x4['iconClick'] && null !== _0xc765x4['iconClick'] && _0xc765x4['iconClick']['length'] && (_0xc765x5['adList'][_0xc765x3]['landingPage'] = _0xc765x4['iconClick']);
                var _0xc765xd = _0xc765x9[0]['getElementsByTagName']('NonLinearAds');
                if (null != _0xc765xd && _0xc765xd['length']) {
                    var _0xc765xe = _0xc765xd[0];
                    _0xc765x5['registerTrackingEvents'](_0xc765xe, _0xc765x4);
                    _0xc765xc = _0xc765x5['getNonLinearClickTrackingEvents'](_0xc765xe);
                    _0xc765x5['registerClickTracking'](_0xc765xc, _0xc765x4), !_0xc765x5['hasVastAdTagUri'](_0xc765x2) && _0xc765x5['hasInLine'](_0xc765x2) && (_0xc765x4['adType'] = 'nonLinear', _0xc765x4['clickthroughUrl'] = _0xc765x5['getClickThroughUrlFromNonLinear'](_0xc765xe), _0xc765x4['duration'] = _0xc765x5['getDurationFromNonLinear'](_0xc765xe), _0xc765x4['dimension'] = _0xc765x5['getDimensionFromNonLinear'](_0xc765xe), _0xc765x4['staticResource'] = _0xc765x5['getStaticResourceFromNonLinear'](_0xc765xe), _0xc765x4['creativeType'] = _0xc765x5['getCreativeTypeFromStaticResources'](_0xc765xe))
                };
                if (!_0xc765x5['hasVastAdTagUri'](_0xc765x2) && _0xc765x5['hasInLine'](_0xc765x2)) {
                    if (_0xc765x5['adList'][_0xc765x3]['adType'] = _0xc765x4['adType'] ? _0xc765x4['adType'] : 'unknown', void(0) !== _0xc765x4['mediaFile'] || void(0) !== _0xc765x4['staticResource']) {
                        _0xc765x5['adList'][_0xc765x3]['vastLoaded'] = !0, _0xc765x5['adPool'][_0xc765x3] = Object['assign']({}, _0xc765x4);
                        var _0xc765xf = document['createEvent']('Event');
                        _0xc765xf['initEvent']('adId_' + _0xc765x3, !1, !0), document['getElementById'](_0xc765x5['videoPlayerId'])['dispatchEvent'](_0xc765xf), _0xc765x5['displayOptions']['vastOptions']['vastAdvanced']['vastLoadedCallback']()
                    } else {
                        _0xc765x5['stopProcessAndReportError'](_0xc765x3)
                    }
                }
            } else {
                _0xc765x5['stopProcessAndReportError'](_0xc765x3)
            }
        } else {
            _0xc765x5['stopProcessAndReportError'](_0xc765x3)
        }
    },
    processUrl: function(_0xc765x2, _0xc765x3) {
        this['resolveVastTag'](_0xc765x2, 0, _0xc765x3, {
            tracking: [],
            stopTracking: [],
            impression: [],
            clicktracking: [],
            vastLoaded: !1
        })
    },
    resolveVastTag: function(_0xc765x2, _0xc765x5, _0xc765x6, _0xc765x7) {
        var _0xc765x9 = this;
        if (_0xc765x2 && '' != _0xc765x2) {
            _0xc765x5 <= _0xc765x9['displayOptions']['vastOptions']['maxAllowedVastTagRedirects'] && _0xc765x9['sendRequest'](_0xc765x2, !0, _0xc765x9['displayOptions']['vastOptions']['vastTimeout'], function() {
                var _0xc765x2 = this;
                if (4 !== _0xc765x2['readyState'] || 404 !== _0xc765x2['status']) {
                    if (4 !== _0xc765x2['readyState'] || 0 !== _0xc765x2['status']) {
                        if (4 === _0xc765x2['readyState'] && 200 === _0xc765x2['status']) {
                            if (4 !== _0xc765x2['readyState'] || 200 === _0xc765x2['status']) {
                                try {
                                    var _0xc765x3 = _0xc765x2['responseXML']
                                } catch (_0xc765x2) {
                                    return void(_0xc765x9['stopProcessAndReportError'](_0xc765x6))
                                };
                                if (_0xc765x3) {
                                    if (_0xc765x9['inLineFound'] = _0xc765x9['hasInLine'](_0xc765x3), !_0xc765x9['inLineFound'] && _0xc765x9['hasVastAdTagUri'](_0xc765x3)) {
                                        var _0xc765x4 = _0xc765x9['getVastAdTagUriFromWrapper'](_0xc765x3);
                                        if (!_0xc765x4) {
                                            return void(_0xc765x9['stopProcessAndReportError'](_0xc765x6))
                                        };
                                        _0xc765x9['resolveVastTag'](_0xc765x4, _0xc765x5, _0xc765x6, _0xc765x7)
                                    };
                                    _0xc765x5 > _0xc765x9['displayOptions']['vastOptions']['maxAllowedVastTagRedirects'] && !_0xc765x9['inLineFound'] ? _0xc765x9['stopProcessAndReportError'](_0xc765x6) : _0xc765x9['processVastXml'](_0xc765x3, _0xc765x6, _0xc765x7)
                                } else {
                                    _0xc765x9['stopProcessAndReportError'](_0xc765x6)
                                }
                            } else {
                                _0xc765x9['stopProcessAndReportError'](_0xc765x6)
                            }
                        }
                    } else {
                        _0xc765x9['stopProcessAndReportError'](_0xc765x6)
                    }
                } else {
                    _0xc765x9['stopProcessAndReportError'](_0xc765x6)
                }
            }), _0xc765x5++
        } else {
            _0xc765x9['stopProcessAndReportError'](_0xc765x6)
        }
    },
    stopProcessAndReportError: function(_0xc765x2) {
        this['adList'][_0xc765x2]['error'] = !0, void(0) !== _0xc765x2 && 'preRoll' == this['adList'][_0xc765x2]['roll'] ? this['playMainVideoWhenVastFails'](900) : this['announceLocalError'](101)
    },
    playRoll: function(_0xc765x2) {
        var _0xc765x3 = this,
            _0xc765x4 = document['getElementById'](_0xc765x3['videoPlayerId']);
        if (_0xc765x3['adPool']['hasOwnProperty'](_0xc765x2)) {
            var _0xc765x5 = _0xc765x3['adList'][_0xc765x2]['roll'];
            switch (_0xc765x3['vastOptions'] = _0xc765x3['adPool'][_0xc765x2], _0xc765x5) {
                case 'midRoll':
                    _0xc765x4['mainVideoCurrentTime'] = _0xc765x4['currentTime'] - 1;
                    break;
                case 'postRoll':
                    _0xc765x4['mainVideoCurrentTime'] = 0, _0xc765x3['autoplayAfterAd'] = !1, _0xc765x4['currentTime'] = _0xc765x3['mainVideoDuration']
            };
            var _0xc765x6, _0xc765x7 = function() {
                if (_0xc765x3['adFinished']) {
                    _0xc765x4['removeEventListener']('timeupdate', _0xc765x7)
                } else {
                    var _0xc765x2 = Math['floor'](_0xc765x4['currentTime']);
                    0 != _0xc765x3['vastOptions']['duration'] && _0xc765x3['scheduleTrackingEvent'](_0xc765x2, _0xc765x3['vastOptions']['duration']), _0xc765x2 >= _0xc765x3['vastOptions']['duration'] - 1 && 0 != _0xc765x3['vastOptions']['duration'] && (_0xc765x4['removeEventListener']('timeupdate', _0xc765x7), _0xc765x3['adFinished'] = !0)
                }
            };
            _0xc765x6 = _0xc765x2, _0xc765x3['switchPlayerToVastMode'] = function() {
                if (_0xc765x3['vastOptions']['duration'] || (_0xc765x3['vastOptions']['duration'] = _0xc765x4['duration']), (void(0) !== _0xc765x3['adList'][_0xc765x6]['adClickable'] ? _0xc765x3['adList'][_0xc765x6]['adClickable'] : _0xc765x3['displayOptions']['vastOptions']['adClickable']) && _0xc765x3['addClickthroughLayer'](_0xc765x3['videoPlayerId']), !1 !== _0xc765x3['vastOptions']['skipoffset'] && _0xc765x3['addSkipButton'](), _0xc765x4['loop'] = !1, _0xc765x3['addCTAButton'](_0xc765x3['adList'][_0xc765x6]['landingPage']), _0xc765x3['addAdCountdown'](), _0xc765x4['removeAttribute']('controls'), _0xc765x3['vastLogoBehaviour'](!0), 'browser' !== _0xc765x3['displayOptions']['layoutControls']['layout'] && null !== document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_controls_progress_container') && (document['getElementById'](_0xc765x3['videoPlayerId'] + '_vast_control_currentprogress')['style']['backgroundColor'] = _0xc765x3['displayOptions']['layoutControls']['adProgressColor']), _0xc765x3['displayOptions']['vastOptions']['adText'] || _0xc765x3['adList'][_0xc765x6]['adText']) {
                    var _0xc765x2 = null !== _0xc765x3['adList'][_0xc765x6]['adText'] ? _0xc765x3['adList'][_0xc765x6]['adText'] : _0xc765x3['displayOptions']['vastOptions']['adText'];
                    _0xc765x3['addAdPlayingText'](_0xc765x2)
                };
                _0xc765x3['positionTextElements'](_0xc765x3['adList'][_0xc765x6]), _0xc765x3['toggleLoader'](!1), _0xc765x3['adList'][_0xc765x6]['played'] = !0, _0xc765x3['adFinished'] = !1, _0xc765x4['play'](), _0xc765x3['trackSingleEvent']('impression'), _0xc765x4['removeEventListener']('loadedmetadata', _0xc765x3['switchPlayerToVastMode'])
            }, _0xc765x4['pause'](), _0xc765x4['addEventListener']('loadedmetadata', _0xc765x3['switchPlayerToVastMode']), _0xc765x3['mainVideoCurrentTime'] = _0xc765x4['currentTime'], _0xc765x3['detachStreamers'](), _0xc765x4['src'] = _0xc765x3['vastOptions']['mediaFile'], _0xc765x3['isCurrentlyPlayingAd'] = !0, _0xc765x3['displayOptions']['vastOptions']['showProgressbarMarkers'] && _0xc765x3['hideAdMarkers'](), _0xc765x4['load'](), _0xc765x4['addEventListener']('ended', _0xc765x3['onVastAdEnded']), _0xc765x4['addEventListener']('timeupdate', _0xc765x7)
        } else {
            _0xc765x3['announceLocalError'](101)
        }
    },
    scheduleTrackingEvent: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = this;
        0 == _0xc765x2 && _0xc765x4['trackSingleEvent']('start'), void(0) !== _0xc765x4['vastOptions']['tracking']['progress'] && _0xc765x4['vastOptions']['tracking']['progress']['length'] && void(0) !== _0xc765x4['vastOptions']['tracking']['progress'][_0xc765x2] && _0xc765x4['trackSingleEvent']('progress', _0xc765x2), _0xc765x2 == Math['floor'](_0xc765x3 / 4) && _0xc765x4['trackSingleEvent']('firstQuartile'), _0xc765x2 == Math['floor'](_0xc765x3 / 2) && _0xc765x4['trackSingleEvent']('midpoint'), _0xc765x2 == Math['floor'](3 * _0xc765x3 / 4) && _0xc765x4['trackSingleEvent']('thirdQuartile'), _0xc765x3 - 1 <= _0xc765x2 && _0xc765x4['trackSingleEvent']('complete')
    },
    trackSingleEvent: function(_0xc765x2, _0xc765x4) {
        var _0xc765x5 = this;
        if (void(0) !== _0xc765x5['vastOptions'] && null !== _0xc765x5['vastOptions']) {
            var _0xc765x6 = [];
            switch (_0xc765x6['length'] = 0, _0xc765x2) {
                case 'start':
                    ;
                case 'firstQuartile':
                    ;
                case 'midpoint':
                    ;
                case 'thirdQuartile':
                    ;
                case 'complete':
                    !1 === _0xc765x5['vastOptions']['stopTracking'][_0xc765x2] && (null !== _0xc765x5['vastOptions']['tracking'][_0xc765x2] && (_0xc765x6 = _0xc765x5['vastOptions']['tracking'][_0xc765x2]), _0xc765x5['vastOptions']['stopTracking'][_0xc765x2] = !0);
                    break;
                case 'progress':
                    _0xc765x5['vastOptions']['tracking']['progress'][_0xc765x4]['elements']['forEach'](function(_0xc765x2, _0xc765x3) {
                        !1 === _0xc765x5['vastOptions']['tracking']['progress'][_0xc765x4]['stopTracking'] && _0xc765x5['vastOptions']['tracking']['progress'][_0xc765x4]['elements']['length'] && (_0xc765x6 = _0xc765x5['vastOptions']['tracking']['progress'][_0xc765x4]['elements']), _0xc765x5['vastOptions']['tracking']['progress'][_0xc765x4]['stopTracking'] = !0
                    });
                    break;
                case 'impression':
                    void(0) !== _0xc765x5['vastOptions']['impression'] && null !== _0xc765x5['vastOptions']['impression'] && 'unknown' != typeof _0xc765x5['vastOptions']['impression']['length'] && (_0xc765x6 = _0xc765x5['vastOptions']['impression'])
            };
            _0xc765x5['callUris'](_0xc765x6)
        }
    },
    completeNonLinearStatic: function(_0xc765x2) {
        var _0xc765x3 = this;
        _0xc765x3['closeNonLinear'](_0xc765x2), 0 == _0xc765x3['adFinished'] && (_0xc765x3['adFinished'] = !0, _0xc765x3['trackSingleEvent']('complete')), clearInterval(_0xc765x3['nonLinearTracking'])
    },
    createNonLinearStatic: function(_0xc765x2) {
        var _0xc765x3 = this,
            _0xc765x4 = document['getElementById'](_0xc765x3['videoPlayerId']);
        if (_0xc765x3['adPool']['hasOwnProperty'](_0xc765x2) && !0 !== _0xc765x3['adPool'][_0xc765x2]['error']) {
            _0xc765x3['vastOptions'] = _0xc765x3['adPool'][_0xc765x2], _0xc765x3['createBoard'](_0xc765x2), _0xc765x3['adFinished'] = !1, _0xc765x3['trackSingleEvent']('start');
            var _0xc765x5 = _0xc765x3['adList'][_0xc765x2]['nonLinearDuration'] ? _0xc765x3['adList'][_0xc765x2]['nonLinearDuration'] : _0xc765x3['vastOptions']['duration'];
            _0xc765x3['nonLinearTracking'] = setInterval(function() {
                if (!0 !== _0xc765x3['adFinished']) {
                    var _0xc765x2 = Math['floor'](_0xc765x4['currentTime']);
                    _0xc765x3['scheduleTrackingEvent'](_0xc765x2, _0xc765x5), _0xc765x5 - 1 <= _0xc765x2 && (_0xc765x3['adFinished'] = !0)
                }
            }, 400), time = parseInt(_0xc765x3['getCurrentTime']()) + parseInt(_0xc765x5), _0xc765x3['scheduleTask']({
                time: time,
                closeStaticAd: _0xc765x2
            })
        } else {
            _0xc765x3['announceLocalError'](101)
        }
    },
    createBoard: function(_0xc765x2) {
        var _0xc765x3 = this,
            _0xc765x4 = _0xc765x3['adPool'][_0xc765x2];
        if (void(0) !== _0xc765x4['staticResource'] && -1 !== _0xc765x3['supportedStaticTypes']['indexOf'](_0xc765x4['creativeType'])) {
            _0xc765x3['adList'][_0xc765x2]['played'] = !0;
            var _0xc765x5 = document['getElementById'](_0xc765x3['videoPlayerId']),
                _0xc765x6 = _0xc765x5['clientWidth'],
                _0xc765x7 = (_0xc765x5['clientHeight'], document['createElement']('div')),
                _0xc765x9 = _0xc765x3['adList'][_0xc765x2]['vAlign'] ? _0xc765x3['adList'][_0xc765x2]['vAlign'] : _0xc765x3['nonLinearVerticalAlign'],
                _0xc765xa = new Image;
            _0xc765xa['src'] = _0xc765x4['staticResource'], _0xc765xa['id'] = 'fluid_nonLinear_imgCreative_' + _0xc765x2 + '_' + _0xc765x3['videoPlayerId'], _0xc765xa['onload'] = function() {
                void(0) !== _0xc765x3['adList'][_0xc765x2]['size'] ? (origWidth = _0xc765x3['adList'][_0xc765x2]['size']['split']('x')[0], origHeight = _0xc765x3['adList'][_0xc765x2]['size']['split']('x')[1]) : _0xc765x4['dimension']['width'] && _0xc765x4['dimension']['height'] ? (origWidth = _0xc765x4['dimension']['width'], origHeight = _0xc765x4['dimension']['height']) : (origWidth = _0xc765xa['width'], origHeight = _0xc765xa['height']), origWidth > _0xc765x6 ? (newBannerWidth = _0xc765x6 - 5, newBannerHeight = origHeight * newBannerWidth / origWidth) : (newBannerWidth = origWidth, newBannerHeight = origHeight), img = document['getElementById'](_0xc765xa['id']), img['width'] = newBannerWidth, img['height'] = newBannerHeight, _0xc765x3['trackSingleEvent']('impression')
            }, _0xc765x7['id'] = 'fluid_nonLinear_' + _0xc765x2, _0xc765x7['className'] = 'fluid_nonLinear_' + _0xc765x9, _0xc765x7['innerHTML'] = _0xc765xa['outerHTML'], _0xc765x7['onclick'] = function() {
                void(0) !== _0xc765x4['clickthroughUrl'] && window['open'](_0xc765x4['clickthroughUrl']), void(0) !== _0xc765x4['clicktracking'] && _0xc765x3['callUris']([_0xc765x4['clicktracking']])
            }, void(0) !== _0xc765x4['clickthroughUrl'] && (_0xc765x7['style']['cursor'] = 'pointer');
            var _0xc765xb = document['createElement']('div');
            _0xc765xb['id'] = 'close_button_' + _0xc765x3['videoPlayerId'], _0xc765xb['className'] = 'close_button', _0xc765xb['innerHTML'] = '', _0xc765xb['title'] = _0xc765x3['displayOptions']['layoutControls']['closeButtonCaption'], _0xc765xb['onclick'] = function(_0xc765x2) {
                return this['parentElement']['remove'](_0xc765x3), void(0) !== _0xc765x2['stopImmediatePropagation'] && _0xc765x2['stopImmediatePropagation'](), _0xc765x3['adFinished'] = !0, clearInterval(_0xc765x3['nonLinearTracking']), !1
            }, _0xc765x7['appendChild'](_0xc765xb), _0xc765x5['parentNode']['insertBefore'](_0xc765x7, _0xc765x5['nextSibling'])
        } else {
            _0xc765x3['adList'][_0xc765x2]['error'] = !0
        }
    },
    closeNonLinear: function(_0xc765x2) {
        var _0xc765x3 = document['getElementById']('fluid_nonLinear_' + _0xc765x2);
        _0xc765x3 && _0xc765x3['remove']()
    },
    preRoll: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceById'](this['id']);
        document['getElementById'](this['getAttribute']('id'))['removeEventListener'](_0xc765x2['type'], _0xc765x3['preRoll']), _0xc765x3['firstPlayLaunched'] = !0;
        var _0xc765x4 = _0xc765x2['type']['replace']('adId_', '');
        !0 !== _0xc765x3['adList'][_0xc765x4]['played'] && ('linear' == _0xc765x3['adList'][_0xc765x4]['adType'] && (_0xc765x3['toggleLoader'](!0), _0xc765x3['playRoll'](_0xc765x4)), 'nonLinear' == _0xc765x3['adList'][_0xc765x4]['adType'] && (_0xc765x3['switchToMainVideo'](), _0xc765x3['createNonLinearStatic'](_0xc765x4)))
    },
    createAdMarker: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = document['getElementById'](this['videoPlayerId'] + '_ad_markers_holder'),
            _0xc765x5 = document['createElement']('div');
        _0xc765x5['id'] = 'ad_marker_' + this['videoPlayerId'] + '_' + _0xc765x2, _0xc765x5['className'] = 'fluid_controls_ad_marker', _0xc765x5['style']['left'] = _0xc765x3 / this['mainVideoDuration'] * 100 + '%', this['isCurrentlyPlayingAd'] && (_0xc765x5['style']['display'] = 'none'), _0xc765x4['appendChild'](_0xc765x5)
    },
    hideAdMarker: function(_0xc765x2) {
        var _0xc765x3 = document['getElementById']('ad_marker_' + this['videoPlayerId'] + '_' + _0xc765x2);
        _0xc765x3 && (_0xc765x3['style']['display'] = 'none')
    },
    showAdMarkers: function() {
        for (var _0xc765x2 = document['getElementById'](this['videoPlayerId'] + '_ad_markers_holder')['getElementsByClassName']('fluid_controls_ad_marker'), _0xc765x3 = 'ad_marker_' + this['videoPlayerId'] + '_', _0xc765x4 = 0; _0xc765x4 < _0xc765x2['length']; ++_0xc765x4) {
            var _0xc765x5 = _0xc765x2[_0xc765x4],
                _0xc765x6 = _0xc765x5['id']['replace'](_0xc765x3, '');
            !1 === this['adList'][_0xc765x6]['played'] && (_0xc765x5['style']['display'] = '')
        }
    },
    hideAdMarkers: function() {
        for (var _0xc765x2 = document['getElementById'](this['videoPlayerId'] + '_ad_markers_holder')['getElementsByClassName']('fluid_controls_ad_marker'), _0xc765x3 = 0; _0xc765x3 < _0xc765x2['length']; ++_0xc765x3) {
            _0xc765x2[_0xc765x3]['style']['display'] = 'none'
        }
    },
    midRoll: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceById'](this['id']);
        document['getElementById'](this['getAttribute']('id'))['removeEventListener'](_0xc765x2['type'], _0xc765x3['midRoll']);
        var _0xc765x4 = _0xc765x2['type']['replace']('adId_', '');
        if (!0 !== _0xc765x3['adList'][_0xc765x4]['played']) {
            var _0xc765x5 = _0xc765x3['adList'][_0xc765x4]['timer'];
            'string' == typeof _0xc765x5 && -1 !== _0xc765x5['indexOf']('%') && (_0xc765x5 = _0xc765x5['replace']('%', ''), _0xc765x5 = Math['floor'](_0xc765x3['mainVideoDuration'] / 100 * _0xc765x5)), _0xc765x3['displayOptions']['vastOptions']['showProgressbarMarkers'] && 'nonLinear' === _0xc765x3['adList'][_0xc765x4]['adType'] && _0xc765x3['createAdMarker'](_0xc765x4, _0xc765x5), _0xc765x3['scheduleTask']({
                time: _0xc765x5,
                playRoll: 'midRoll',
                adListId: _0xc765x4
            })
        }
    },
    postRoll: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceById'](this['id']);
        document['getElementById'](this['getAttribute']('id'))['removeEventListener'](_0xc765x2['type'], _0xc765x3['postRoll']);
        var _0xc765x4 = _0xc765x2['type']['replace']('adId_', '');
        _0xc765x3['scheduleTask']({
            time: Math['floor'](_0xc765x3['mainVideoDuration']),
            playRoll: 'postRoll',
            adListId: _0xc765x4
        })
    },
    onPauseRoll: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceById'](this['id']);
        document['getElementById'](this['getAttribute']('id'))['removeEventListener'](_0xc765x2['type'], _0xc765x3['onPauseRoll']);
        var _0xc765x4 = _0xc765x2['type']['replace']('adId_', '');
        if ('nonLinear' == _0xc765x3['adList'][_0xc765x4]['adType']) {
            if (!_0xc765x3['adPool']['hasOwnProperty'](_0xc765x4) || !0 === _0xc765x3['adPool'][_0xc765x4]['error']) {
                return void(_0xc765x3['announceLocalError'](101))
            };
            _0xc765x3['createBoard'](_0xc765x4), onPauseAd = document['getElementById']('fluid_nonLinear_' + _0xc765x4), onPauseAd['style']['display'] = 'none'
        }
    },
    hasValidOnPauseAd: function() {
        var _0xc765x2 = this['findRoll']('onPauseRoll');
        return 0 != _0xc765x2['length'] && this['adList'][_0xc765x2[0]] && !1 === this['adList'][_0xc765x2[0]]['error']
    },
    toggleOnPauseAd: function() {
        var _0xc765x2 = this,
            _0xc765x3 = document['getElementById'](this['videoPlayerId']);
        _0xc765x2['hasValidOnPauseAd']() && !_0xc765x2['isCurrentlyPlayingAd'] && (onPauseRoll = _0xc765x2['findRoll']('onPauseRoll'), adListId = onPauseRoll[0], _0xc765x2['vastOptions'] = _0xc765x2['adPool'][adListId], onPauseAd = document['getElementById']('fluid_nonLinear_' + adListId), onPauseAd && _0xc765x3['paused'] ? (onPauseAd['style']['display'] = 'flex', _0xc765x2['adList'][adListId]['played'] = !1, _0xc765x2['trackingOnPauseNonLinearAd'](adListId, 'start')) : onPauseAd && !_0xc765x3['paused'] && (onPauseAd['style']['display'] = 'none', _0xc765x2['adFinished'] = !0, _0xc765x2['trackingOnPauseNonLinearAd'](adListId, 'complete')))
    },
    trackingOnPauseNonLinearAd: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = this;
        _0xc765x4['adPool']['hasOwnProperty'](_0xc765x2) && !0 !== _0xc765x4['adPool'][_0xc765x2]['error'] ? (_0xc765x4['vastOptions'] = _0xc765x4['adPool'][_0xc765x2], _0xc765x4['trackSingleEvent'](_0xc765x3)) : _0xc765x4['announceLocalError'](101)
    },
    adTimer: function() {
        var _0xc765x5 = this;
        1 != _0xc765x5['isTimer'] && (_0xc765x5['isTimer'] = !_0xc765x5['isTimer'], _0xc765x5['timer'] = setInterval(function() {
            for (var _0xc765x2 in _0xc765x5['timerPool']) {
                if (time = Math['floor'](_0xc765x5['getCurrentTime']()), time == _0xc765x2 && !_0xc765x5['isCurrentlyPlayingAd']) {
                    if (_0xc765x5['timerPool'][_0xc765x2] && _0xc765x5['timerPool'][_0xc765x2]['hasOwnProperty']('playRoll')) {
                        var _0xc765x3 = _0xc765x5['timerPool'][_0xc765x2]['adListId'];
                        _0xc765x5['timerPool'][_0xc765x2]['playRoll'];
                        0 == _0xc765x5['adList'][_0xc765x3]['played'] && (_0xc765x5['vastOptions'] = _0xc765x5['adPool'][_0xc765x3], 'linear' == _0xc765x5['vastOptions']['adType'] && (_0xc765x5['toggleLoader'](!0), _0xc765x5['playRoll'](_0xc765x3)), 'nonLinear' == _0xc765x5['vastOptions']['adType'] && (_0xc765x5['createNonLinearStatic'](_0xc765x3), _0xc765x5['displayOptions']['vastOptions']['showProgressbarMarkers'] && _0xc765x5['hideAdMarker'](_0xc765x3)), delete _0xc765x5['timerPool'][_0xc765x2])
                    };
                    if (_0xc765x5['timerPool'][_0xc765x2] && _0xc765x5['timerPool'][_0xc765x2]['hasOwnProperty']('closeStaticAd')) {
                        var _0xc765x4 = _0xc765x5['timerPool'][_0xc765x2]['closeStaticAd'];
                        1 == _0xc765x5['adList'][_0xc765x4]['played'] && (_0xc765x5['completeNonLinearStatic'](_0xc765x4), delete _0xc765x5['timerPool'][_0xc765x2])
                    }
                }
            }
        }, 800))
    },
    scheduleTask: function(_0xc765x2) {
        this['timerPool'][_0xc765x2['time']] = _0xc765x2
    },
    switchToMainVideo: function() {
        var _0xc765x2 = this,
            _0xc765x3 = document['getElementById'](_0xc765x2['videoPlayerId']);
        _0xc765x3['src'] = _0xc765x2['originalSrc'], _0xc765x2['initialiseStreamers']();
        var _0xc765x4 = void(0) !== _0xc765x3['mainVideoCurrentTime'] ? _0xc765x3['mainVideoCurrentTime'] : 0;
        (_0xc765x3['hasOwnProperty']('currentTime') && (_0xc765x3['currentTime'] = _0xc765x4), _0xc765x2['displayOptions']['layoutControls']['loop'] && (_0xc765x3['loop'] = !0), _0xc765x2['setCurrentTimeAndPlay'](_0xc765x4, _0xc765x2['autoplayAfterAd']), _0xc765x2['isCurrentlyPlayingAd'] = !1, _0xc765x2['removeClickthrough'](), _0xc765x2['removeSkipButton'](), _0xc765x2['removeAdCountdown'](), _0xc765x2['removeAdPlayingText'](), _0xc765x2['removeCTAButton'](), _0xc765x2['vastLogoBehaviour'](!1), _0xc765x2['adFinished'] = !0, _0xc765x2['displayOptions']['vastOptions']['vastAdvanced']['vastVideoEndedCallback'](), _0xc765x2['vastOptions'] = null, 'browser' !== _0xc765x2['displayOptions']['layoutControls']['layout']) && (_0xc765x2['setBuffering'](), null !== document['getElementById'](_0xc765x2['videoPlayerId'] + '_fluid_controls_progress_container') && (backgroundColor = _0xc765x2['displayOptions']['layoutControls']['primaryColor'] ? _0xc765x2['displayOptions']['layoutControls']['primaryColor'] : 'white', document['getElementById'](_0xc765x2['videoPlayerId'] + '_vast_control_currentprogress')['style']['backgroundColor'] = backgroundColor));
        _0xc765x3['removeEventListener']('ended', _0xc765x2['onVastAdEnded']), 'browser' === _0xc765x2['displayOptions']['layoutControls']['layout'] && _0xc765x3['setAttribute']('controls', 'controls'), _0xc765x2['displayOptions']['vastOptions']['showProgressbarMarkers'] && _0xc765x2['showAdMarkers']()
    },
    vastLogoBehaviour: function(_0xc765x2) {
        if (!this['displayOptions']['layoutControls']['logo']['showOverAds']) {
            var _0xc765x3 = document['getElementById'](this['videoPlayerId'] + '_logo'),
                _0xc765x4 = document['getElementById'](this['videoPlayerId'] + '_logo_image');
            if (!_0xc765x3 || !_0xc765x4) {
                return
            };
            var _0xc765x5 = _0xc765x2 ? 'none' : 'inline';
            _0xc765x3['style']['display'] = _0xc765x5
        }
    },
    onVastAdEnded: function() {
        var _0xc765x2 = fluidPlayerClass['getInstanceById'](this['id']);
        _0xc765x2['switchToMainVideo'](), _0xc765x2['vastOptions'] = null, _0xc765x2['adFinished'] = !0
    },
    onMainVideoEnded: function() {
        var _0xc765x2 = fluidPlayerClass['getInstanceById'](this['id']);
        if (!(_0xc765x2['isCurrentlyPlayingAd'] && _0xc765x2['autoplayAfterAd'] || (Math['floor'](_0xc765x2['getCurrentTime']()) >= Math['floor'](_0xc765x2['mainVideoDuration']) && clearInterval(_0xc765x2['timer']), !0 !== _0xc765x2['displayOptions']['layoutControls']['loop']))) {
            var _0xc765x3 = fluidPlayerClass['getInstanceIdByWrapperId'](this['getAttribute']('id'));
            fluidPlayerClass['getInstanceById'](_0xc765x3);
            _0xc765x2['switchToMainVideo'](), _0xc765x2['playPauseToggle'](this)
        }
    },
    getCurrentTime: function() {
        return this['isCurrentlyPlayingAd'] ? this['mainVideoCurrentTime'] : document['getElementById'](this['videoPlayerId'])['currentTime']
    },
    addSkipButton: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId']),
            _0xc765x3 = document['createElement']('div');
        _0xc765x3['id'] = 'skip_button_' + this['videoPlayerId'], _0xc765x3['className'] = 'skip_button skip_button_disabled', _0xc765x3['innerHTML'] = this['displayOptions']['vastOptions']['skipButtonCaption']['replace']('[seconds]', this['vastOptions']['skipoffset']), document['getElementById']('fluid_video_wrapper_' + this['videoPlayerId'])['appendChild'](_0xc765x3), _0xc765x2['addEventListener']('timeupdate', this['decreaseSkipOffset'], !1)
    },
    addAdCountdown: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId']),
            _0xc765x3 = document['getElementById']('fluid_video_wrapper_' + this['videoPlayerId']),
            _0xc765x4 = document['createElement']('div'),
            _0xc765x5 = this['pad'](parseInt(this['currentVideoDuration'] / 60)) + ':' + this['pad'](parseInt(this['currentVideoDuration'] % 60)),
            _0xc765x6 = parseInt(_0xc765x5);
        _0xc765x4['id'] = 'ad_countdown' + this['videoPlayerId'], _0xc765x4['className'] = 'ad_countdown', _0xc765x4['innerHTML'] = 'Ad - ' + _0xc765x6, _0xc765x3['appendChild'](_0xc765x4), _0xc765x2['addEventListener']('timeupdate', this['decreaseAdCountdown'], !1), _0xc765x3['addEventListener']('mouseover', function() {
            _0xc765x4['style']['display'] = 'none'
        }, !1)
    },
    decreaseAdCountdown: function() {
        var _0xc765x2 = fluidPlayerClass['getInstanceById'](this['id']),
            _0xc765x3 = parseInt(_0xc765x2['currentVideoDuration']) - parseInt(this['currentTime']),
            _0xc765x4 = document['getElementById']('ad_countdown' + _0xc765x2['videoPlayerId']);
        _0xc765x4 ? _0xc765x4['innerHTML'] = 'Ad - ' + _0xc765x2['pad'](parseInt(_0xc765x3 / 60)) + ':' + _0xc765x2['pad'](parseInt(_0xc765x3 % 60)) : this['removeEventListener']('timeupdate', _0xc765x2['decreaseAdCountdown'])
    },
    removeAdCountdown: function() {
        var _0xc765x2 = document['getElementById']('ad_countdown' + this['videoPlayerId']);
        _0xc765x2 && _0xc765x2['parentElement']['removeChild'](_0xc765x2)
    },
    toggleAdCountdown: function(_0xc765x2) {
        var _0xc765x3 = document['getElementById']('ad_countdown' + this['videoPlayerId']);
        _0xc765x3 && (_0xc765x3['style']['display'] = _0xc765x2 ? 'inline-block' : 'none')
    },
    addAdPlayingText: function(_0xc765x2) {
        var _0xc765x3 = document['createElement']('div');
        _0xc765x3['id'] = this['videoPlayerId'] + '_fluid_ad_playing', this['displayOptions']['layoutControls']['primaryColor'] && (_0xc765x3['style']['backgroundColor'] = this['displayOptions']['layoutControls']['primaryColor'], _0xc765x3['style']['opacity'] = 1), _0xc765x3['className'] = 'fluid_ad_playing', _0xc765x3['innerText'] = _0xc765x2, document['getElementById']('fluid_video_wrapper_' + this['videoPlayerId'])['appendChild'](_0xc765x3)
    },
    positionTextElements: function(_0xc765x2) {
        var _0xc765x3 = this,
            _0xc765x4 = ['top left', 'top right', 'bottom left', 'bottom right'],
            _0xc765x5 = document['getElementById']('skip_button_' + _0xc765x3['videoPlayerId']),
            _0xc765x6 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_ad_playing'),
            _0xc765x7 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_cta'),
            _0xc765x9 = 0,
            _0xc765xa = 0,
            _0xc765xb = !1,
            _0xc765xc = 0,
            _0xc765xd = [],
            _0xc765xe = {
                top: {
                    left: {
                        h: 34,
                        v: 34
                    },
                    right: {
                        h: 0,
                        v: 34
                    }
                },
                bottom: {
                    left: {
                        h: 34,
                        v: 50
                    },
                    right: {
                        h: 0,
                        v: 50
                    }
                }
            };
        null !== _0xc765x5 && (_0xc765xc = _0xc765x5['offsetHeight'] + 8, document['getElementById']('fluid_video_wrapper_' + _0xc765x3['videoPlayerId'])['classList']['contains']('mobile') && (_0xc765xe['bottom']['left']['v'] = 75, _0xc765xe['bottom']['right']['v'] = 75));
        if (null !== _0xc765x7) {
            var _0xc765xf = _0xc765x3['displayOptions']['vastOptions']['adCTATextPosition']['toLowerCase'](); - 1 == _0xc765x4['indexOf'](_0xc765xf) && (console['log']('[FP Error] Invalid position for CTAText. Reverting to "bottom right"'), _0xc765xf = 'bottom right'), _0xc765xb = 'bottom' == (_0xc765xd = _0xc765xf['split'](' '))[0], _0xc765x7['style'][_0xc765xd[0]] = _0xc765xe[_0xc765xd[0]][_0xc765xd[1]]['v'] + 'px', _0xc765x7['style'][_0xc765xd[1]] = _0xc765xe[_0xc765xd[0]][_0xc765xd[1]]['h'] + 'px', _0xc765xb && 'right' == _0xc765xd[1] && (_0xc765x7['style'][_0xc765xd[0]] = _0xc765xe[_0xc765xd[0]][_0xc765xd[1]]['v'] + _0xc765xc + 'px'), _0xc765x9 = _0xc765x7['offsetHeight'] + 8 + 'px'
        };
        if (null !== _0xc765x6) {
            var _0xc765x10 = null !== _0xc765x2['adTextPosition'] ? _0xc765x2['adTextPosition']['toLowerCase']() : this['displayOptions']['vastOptions']['adTextPosition']['toLowerCase'](); - 1 == _0xc765x4['indexOf'](_0xc765x10) && (console['log']('[FP Error] Invalid position for adText. Reverting to "top left"'), _0xc765x10 = 'top left');
            var _0xc765x11 = _0xc765x10['split'](' ');
            _0xc765x6['style'][_0xc765x11[0]] = _0xc765xe[_0xc765x11[0]][_0xc765x11[1]]['v'] + 'px', _0xc765x6['style'][_0xc765x11[1]] = _0xc765xe[_0xc765x11[0]][_0xc765x11[1]]['h'] + 'px', _0xc765xa = _0xc765x6['offsetHeight'] + 8 + 'px'
        };
        0 < _0xc765x9 && 0 < _0xc765xa && _0xc765xf == _0xc765x10 && (_0xc765xb ? 'right' == _0xc765xd[1] ? _0xc765x6['style']['bottom'] = _0xc765xe[_0xc765x11[0]][_0xc765x11[1]]['v'] + _0xc765xc + _0xc765x9 + 'px' : _0xc765x6['style']['bottom'] = _0xc765xe[_0xc765x11[0]][_0xc765x11[1]]['v'] + _0xc765x9 + 'px' : _0xc765x7['style']['top'] = _0xc765xe[_0xc765xd[0]][_0xc765xd[1]]['v'] + _0xc765xa + 'px')
    },
    removeAdPlayingText: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId'] + '_fluid_ad_playing');
        _0xc765x2 && _0xc765x2['parentElement']['removeChild'](_0xc765x2)
    },
    addCTAButton: function(_0xc765x2) {
        if (this['displayOptions']['vastOptions']['adCTAText']) {
            var _0xc765x3 = this,
                _0xc765x4 = document['getElementById'](this['videoPlayerId']),
                _0xc765x5 = document['createElement']('div');
            _0xc765x5['id'] = this['videoPlayerId'] + '_fluid_cta', _0xc765x5['className'] = 'fluid_ad_cta';
            var _0xc765x6 = document['createElement']('span');
            _0xc765x6['innerHTML'] = this['displayOptions']['vastOptions']['adCTAText'] + '<br/><span class="add_icon_clickthrough">' + _0xc765x2 + '</span>', _0xc765x5['addEventListener']('click', function() {
                return _0xc765x4['paused'] || _0xc765x4['pause'](), window['open'](_0xc765x3['vastOptions']['clickthroughUrl'], '_blank')['focus'](), !0
            }, !1), _0xc765x5['appendChild'](_0xc765x6), document['getElementById']('fluid_video_wrapper_' + this['videoPlayerId'])['appendChild'](_0xc765x5)
        }
    },
    removeCTAButton: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId'] + '_fluid_cta');
        _0xc765x2 && _0xc765x2['parentElement']['removeChild'](_0xc765x2)
    },
    decreaseSkipOffset: function() {
        var _0xc765x2 = this,
            _0xc765x3 = fluidPlayerClass['getInstanceById'](_0xc765x2['id']),
            _0xc765x4 = _0xc765x3['vastOptions']['skipoffset'] - Math['floor'](_0xc765x2['currentTime']),
            _0xc765x5 = document['getElementById']('skip_button_' + _0xc765x3['videoPlayerId']);
        _0xc765x5 ? 1 <= _0xc765x4 ? _0xc765x5['innerHTML'] = _0xc765x3['displayOptions']['vastOptions']['skipButtonCaption']['replace']('[seconds]', _0xc765x4) : (_0xc765x5['innerHTML'] = '<a href="javascript:;" id="skipHref_' + _0xc765x3['videoPlayerId'] + '" onclick="fluidPlayerClass.getInstanceById(\'' + _0xc765x3['videoPlayerId'] + '\').pressSkipButton();">' + _0xc765x3['displayOptions']['vastOptions']['skipButtonClickCaption'] + '</a>', _0xc765x5['className'] = _0xc765x5['className']['replace'](/\bskip_button_disabled\b/, ''), _0xc765x2['removeEventListener']('timeupdate', _0xc765x3['decreaseSkipOffset'])) : (_0xc765x4 = 0, _0xc765x2['removeEventListener']('timeupdate', _0xc765x2['decreaseSkipOffset']))
    },
    pressSkipButton: function() {
        this['removeSkipButton'](), this['removeAdPlayingText'](), this['removeCTAButton'](), this['displayOptions']['vastOptions']['vastAdvanced']['vastVideoSkippedCallback']();
        var _0xc765x2 = document['createEvent']('Event');
        _0xc765x2['initEvent']('ended', !1, !0), document['getElementById'](this['videoPlayerId'])['dispatchEvent'](_0xc765x2)
    },
    removeSkipButton: function() {
        btn = document['getElementById']('skip_button_' + this['videoPlayerId']), btn && btn['parentElement']['removeChild'](btn)
    },
    addClickthroughLayer: function() {
        var _0xc765x2 = this,
            _0xc765x3 = document['getElementById'](_0xc765x2['videoPlayerId']),
            _0xc765x4 = document['getElementById']('fluid_video_wrapper_' + _0xc765x2['videoPlayerId']),
            _0xc765x5 = document['createElement']('div');
        _0xc765x5['className'] = 'vast_clickthrough_layer', _0xc765x5['id'] = 'vast_clickthrough_layer_' + _0xc765x2['videoPlayerId'], _0xc765x5['setAttribute']('style', 'position: absolute; cursor: pointer; top: 0; left: 0; width: ' + _0xc765x3['offsetWidth'] + 'px; height: ' + _0xc765x3['offsetHeight'] + 'px;'), _0xc765x4['appendChild'](_0xc765x5);
        var _0xc765x6 = function() {
                window['open'](_0xc765x2['vastOptions']['clickthroughUrl']), void(0) !== _0xc765x2['vastOptions']['clicktracking'] && _0xc765x2['callUris'](_0xc765x2['vastOptions']['clicktracking'])
            },
            _0xc765x7 = document['getElementById']('vast_clickthrough_layer_' + _0xc765x2['videoPlayerId']),
            _0xc765x9 = 'iPhone' === _0xc765x2['mobileInfo']['device'] && !1 !== _0xc765x2['mobileInfo']['userOsMajor'] && _0xc765x2['mobileInfo']['userOsMajor'] <= 9;
        _0xc765x7['onclick'] = function() {
            _0xc765x3['paused'] ? _0xc765x9 && !_0xc765x2['suppressClickthrough'] ? (_0xc765x6(), _0xc765x2['suppressClickthrough'] = !0) : _0xc765x3['play']() : (_0xc765x6(), _0xc765x3['pause']())
        }
    },
    removeClickthrough: function() {
        var _0xc765x2 = document['getElementById']('vast_clickthrough_layer_' + this['videoPlayerId']);
        _0xc765x2 && _0xc765x2['parentNode']['removeChild'](_0xc765x2)
    },
    getCurrentSrc: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId'])['getElementsByTagName']('source');
        return _0xc765x2['length'] ? _0xc765x2[0]['getAttribute']('src') : null
    },
    getCurrentSrcType: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId'])['getElementsByTagName']('source');
        if (_0xc765x2['length']) {
            for (var _0xc765x3 = 0; _0xc765x3 < _0xc765x2['length']; _0xc765x3++) {
                if (_0xc765x2[_0xc765x3]['getAttribute']('src') == this['originalSrc']) {
                    return _0xc765x2[_0xc765x3]['getAttribute']('type')
                }
            }
        };
        return null
    },
    convertTimeStringToSeconds: function(_0xc765x2) {
        if (_0xc765x2 && _0xc765x2['match'](/^(\d){2}(:[0-5][0-9]){2}(.(\d){1,3})?$/)) {
            var _0xc765x3 = _0xc765x2['split'](':');
            return 3600 * parseInt(_0xc765x3[0], 10) + 60 * parseInt(_0xc765x3[1], 10) + parseInt(_0xc765x3[2], 10)
        };
        return !1
    },
    onRecentWaiting: function() {
        var _0xc765x2 = fluidPlayerClass['getInstanceById'](this['id']);
        _0xc765x2['recentWaiting'] = !0, setTimeout(function() {
            _0xc765x2['recentWaiting'] = !1
        }, 1e3)
    },
    onFluidPlayerPause: function() {
        var _0xc765x3 = this;
        setTimeout(function() {
            if (!fluidPlayerClass['getInstanceById'](_0xc765x3['id'])['recentWaiting']) {
                var _0xc765x2 = document['createEvent']('CustomEvent');
                _0xc765x2['initEvent']('fluidplayerpause', !1, !0), _0xc765x3['dispatchEvent'](_0xc765x2)
            }
        }, 100)
    },
    checkShouldDisplayVolumeBar: function() {
        return 'iOS' !== fluidPlayerClass['getMobileOs']()['userOs']
    },
    generateCustomControlTags: function() {
        return '<div class="fluid_controls_left">   <div id="' + this['videoPlayerId'] + '_fluid_control_playpause" class="fluid_button fluid_button_play"></div></div><div id="' + this['videoPlayerId'] + '_fluid_controls_progress_container" class="fluid_controls_progress_container fluid_slider">   <div class="fluid_controls_progress">      <div id="' + this['videoPlayerId'] + '_vast_control_currentprogress" class="fluid_controls_currentprogress">          <div id="' + this['videoPlayerId'] + '_vast_control_currentpos" class="fluid_controls_currentpos"></div>      </div>   </div>   <div id="' + this['videoPlayerId'] + '_buffered_amount" class="fluid_controls_buffered"></div>   <div id="' + this['videoPlayerId'] + '_ad_markers_holder" class="fluid_controls_ad_markers_holder"></div></div><div class="fluid_controls_right">   <div id="' + this['videoPlayerId'] + '_fluid_control_fullscreen" class="fluid_button fluid_button_fullscreen"></div>   <div id="' + this['videoPlayerId'] + '_fluid_control_theatre" class="fluid_button fluid_button_theatre"></div>   <div id="' + this['videoPlayerId'] + '_fluid_control_video_source" class="fluid_button fluid_button_video_source"></div>   <div id="' + this['videoPlayerId'] + '_fluid_control_playback_rate" class="fluid_button fluid_button_playback_rate"></div>   <div id="' + this['videoPlayerId'] + '_fluid_control_download" class="fluid_button fluid_button_download"></div>   <div id="' + this['videoPlayerId'] + '_fluid_control_volume_container" class="fluid_control_volume_container fluid_slider">       <div id="' + this['videoPlayerId'] + '_fluid_control_volume" class="fluid_control_volume">           <div id="' + this['videoPlayerId'] + '_fluid_control_currentvolume" class="fluid_control_currentvolume">               <div id="' + this['videoPlayerId'] + '_fluid_control_volume_currentpos" class="fluid_control_volume_currentpos"></div>           </div>       </div>   </div>   <div id="' + this['videoPlayerId'] + '_fluid_control_mute" class="fluid_button fluid_button_volume"></div>   <div id="' + this['videoPlayerId'] + '_fluid_control_duration" class="fluid_fluid_control_duration">00:00 / 00:00</div></div>'
    },
    controlPlayPauseToggle: function(_0xc765x2) {
        var _0xc765x3 = document['getElementById'](_0xc765x2 + '_fluid_control_playpause'),
            _0xc765x4 = document['getElementById'](_0xc765x2 + 'context_option_play'),
            _0xc765x5 = fluidPlayerClass['getInstanceById'](_0xc765x2),
            _0xc765x6 = document['getElementById'](_0xc765x5['videoPlayerId'] + '_fluid_controls_container'),
            _0xc765x7 = document['getElementById'](_0xc765x5['videoPlayerId'] + '_logo'),
            _0xc765x9 = document['getElementById'](_0xc765x5['videoPlayerId']);
        document['getElementById'](_0xc765x2 + '_fluid_initial_play') && (document['getElementById'](_0xc765x2 + '_fluid_initial_play')['style']['display'] = 'none', document['getElementById'](_0xc765x2 + '_fluid_initial_play_button')['style']['opacity'] = '1'), _0xc765x9['paused'] ? (_0xc765x3['className'] = _0xc765x3['className']['replace'](/\bfluid_button_pause\b/g, 'fluid_button_play'), _0xc765x6['classList']['add']('initial_controls_show'), _0xc765x7 && _0xc765x7['classList']['add']('initial_controls_show'), null !== _0xc765x4 && (_0xc765x4['innerHTML'] = 'Play')) : (_0xc765x3['className'] = _0xc765x3['className']['replace'](/\bfluid_button_play\b/g, 'fluid_button_pause'), _0xc765x6['classList']['remove']('initial_controls_show'), _0xc765x7 && _0xc765x7['classList']['remove']('initial_controls_show'), null !== _0xc765x4 && (_0xc765x4['innerHTML'] = 'Pause'))
    },
    playPauseAnimationToggle: function(_0xc765x2) {
        this['isCurrentlyPlayingAd'] || !this['displayOptions']['layoutControls']['playPauseAnimation'] || this['isSwitchingSource'] || (videoPlayerId = this['videoPlayerId'], _0xc765x2 ? (document['getElementById'](videoPlayerId + '_fluid_state_button')['classList']['remove']('fluid_initial_pause_button'), document['getElementById'](videoPlayerId + '_fluid_state_button')['classList']['add']('fluid_initial_play_button')) : (document['getElementById'](videoPlayerId + '_fluid_state_button')['classList']['remove']('fluid_initial_play_button'), document['getElementById'](videoPlayerId + '_fluid_state_button')['classList']['add']('fluid_initial_pause_button')), document['getElementById'](videoPlayerId + '_fluid_initial_play')['classList']['add']('transform-active'), setTimeout(function() {
            document['getElementById'](videoPlayerId + '_fluid_initial_play')['classList']['remove']('transform-active')
        }, 800))
    },
    contolProgressbarUpdate: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceById'](_0xc765x2),
            _0xc765x4 = document['getElementById'](_0xc765x2);
        document['getElementById'](_0xc765x2 + '_vast_control_currentprogress')['style']['width'] = _0xc765x4['currentTime'] / _0xc765x3['currentVideoDuration'] * 100 + '%'
    },
    contolDurationUpdate: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceById'](_0xc765x2),
            _0xc765x4 = document['getElementById'](_0xc765x2),
            _0xc765x5 = _0xc765x3['pad'](parseInt(_0xc765x4['currentTime'] / 60)) + ':' + _0xc765x3['pad'](parseInt(_0xc765x4['currentTime'] % 60)) + ' / ' + _0xc765x3['pad'](parseInt(_0xc765x3['currentVideoDuration'] / 60)) + ':' + _0xc765x3['pad'](parseInt(_0xc765x3['currentVideoDuration'] % 60));
        document['getElementById'](_0xc765x2 + '_fluid_control_duration')['innerHTML'] = _0xc765x5
    },
    pad: function(_0xc765x2) {
        return _0xc765x2 < 10 ? '0' + _0xc765x2 : _0xc765x2
    },
    contolVolumebarUpdate: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceById'](_0xc765x2);
        if ('browser' !== _0xc765x3['displayOptions']['layoutControls']['layout']) {
            var _0xc765x4 = document['getElementById'](_0xc765x2),
                _0xc765x5 = document['getElementById'](_0xc765x2 + '_fluid_control_currentvolume'),
                _0xc765x6 = document['getElementById'](_0xc765x2 + '_fluid_control_volume_currentpos'),
                _0xc765x7 = document['getElementById'](_0xc765x2 + '_fluid_control_volume')['clientWidth'],
                _0xc765x9 = _0xc765x6['clientWidth'],
                _0xc765xa = document['getElementById'](_0xc765x2 + '_fluid_control_mute'),
                _0xc765xb = document['getElementById'](_0xc765x2 + 'context_option_mute');
            _0xc765x4['volume'] && (_0xc765x3['latestVolume'] = _0xc765x4['volume'], _0xc765x3['fluidStorage']['fluidMute'] = !1), _0xc765x4['volume'] && !_0xc765x4['muted'] ? (_0xc765xa['className'] = _0xc765xa['className']['replace'](/\bfluid_button_mute\b/g, 'fluid_button_volume'), null !== _0xc765xb && (_0xc765xb['innerHTML'] = 'Mute')) : (_0xc765xa['className'] = _0xc765xa['className']['replace'](/\bfluid_button_volume\b/g, 'fluid_button_mute'), null !== _0xc765xb && (_0xc765xb['innerHTML'] = 'Unmute')), _0xc765x5['style']['width'] = _0xc765x4['volume'] * _0xc765x7 + 'px', _0xc765x6['style']['left'] = _0xc765x4['volume'] * _0xc765x7 - _0xc765x9 / 2 + 'px'
        }
    },
    muteToggle: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceById'](_0xc765x2),
            _0xc765x4 = document['getElementById'](_0xc765x2);
        _0xc765x4['volume'] && !_0xc765x4['muted'] ? (_0xc765x4['volume'] = 0, _0xc765x4['muted'] = !0) : (_0xc765x4['volume'] = _0xc765x3['latestVolume'], _0xc765x4['muted'] = !1), this['fluidStorage']['fluidVolume'] = _0xc765x3['latestVolume'], this['fluidStorage']['fluidMute'] = _0xc765x4['muted']
    },
    checkFullscreenSupport: function(_0xc765x2) {
        var _0xc765x3 = document['getElementById'](_0xc765x2),
            _0xc765x4 = document['getElementById'](this['videoPlayerId']);
        return _0xc765x3['mozRequestFullScreen'] ? {
            goFullscreen: 'mozRequestFullScreen',
            exitFullscreen: 'mozCancelFullScreen',
            isFullscreen: 'mozFullScreenElement'
        } : _0xc765x3['webkitRequestFullscreen'] ? {
            goFullscreen: 'webkitRequestFullscreen',
            exitFullscreen: 'webkitExitFullscreen',
            isFullscreen: 'webkitFullscreenElement'
        } : _0xc765x3['msRequestFullscreen'] ? {
            goFullscreen: 'msRequestFullscreen',
            exitFullscreen: 'msExitFullscreen',
            isFullscreen: 'msFullscreenElement'
        } : _0xc765x3['requestFullscreen'] ? {
            goFullscreen: 'requestFullscreen',
            exitFullscreen: 'exitFullscreen',
            isFullscreen: 'fullscreenElement'
        } : !!_0xc765x4['webkitSupportsFullscreen'] && {
            goFullscreen: 'webkitEnterFullscreen',
            exitFullscreen: 'webkitExitFullscreen',
            isFullscreen: 'webkitDisplayingFullscreen'
        }
    },
    fullscreenOff: function(_0xc765x2, _0xc765x3) {
        _0xc765x2['className'] = _0xc765x2['className']['replace'](/\bfluid_button_fullscreen_exit\b/g, 'fluid_button_fullscreen'), null !== _0xc765x3 && (_0xc765x3['innerHTML'] = 'Fullscreen'), this['fullscreenMode'] = !1
    },
    fullscreenOn: function(_0xc765x2, _0xc765x3) {
        _0xc765x2['className'] = _0xc765x2['className']['replace'](/\bfluid_button_fullscreen\b/g, 'fluid_button_fullscreen_exit'), null !== _0xc765x3 && (_0xc765x3['innerHTML'] = 'Exit Fullscreen'), this['fullscreenMode'] = !0
    },
    fullscreenToggle: function() {
        fluidPlayerClass['activeVideoPlayerId'] = this['videoPlayerId'];
        var _0xc765x2 = document['getElementById']('fluid_video_wrapper_' + this['videoPlayerId']),
            _0xc765x3 = this['checkFullscreenSupport']('fluid_video_wrapper_' + this['videoPlayerId']),
            _0xc765x4 = document['getElementById'](this['videoPlayerId'] + '_fluid_control_fullscreen'),
            _0xc765x5 = document['getElementById'](this['videoPlayerId'] + 'context_option_fullscreen'),
            _0xc765x6 = document['getElementById'](this['videoPlayerId']);
        if (this['theatreMode'] && this['theatreToggle'](), _0xc765x3) {
            switch (_0xc765x3['goFullscreen']) {
                case 'webkitEnterFullscreen':
                    _0xc765x6[_0xc765x3['isFullscreen']] || (functionNameToExecute = 'videoPlayerTag.' + _0xc765x3['goFullscreen'] + '();', this['fullscreenOn'](_0xc765x4, _0xc765x5), new Function('videoPlayerTag', functionNameToExecute)(_0xc765x6));
                    break;
                default:
                    null === document[_0xc765x3['isFullscreen']] ? (functionNameToExecute = 'videoPlayerTag.' + _0xc765x3['goFullscreen'] + '();', this['fullscreenOn'](_0xc765x4, _0xc765x5)) : (functionNameToExecute = 'document.' + _0xc765x3['exitFullscreen'] + '();', this['fullscreenOff'](_0xc765x4, _0xc765x5)), new Function('videoPlayerTag', functionNameToExecute)(_0xc765x2)
            }
        } else {
            -1 !== _0xc765x2['className']['search'](/\bpseudo_fullscreen\b/g) ? (_0xc765x2['className'] = _0xc765x2['className']['replace'](/\bpseudo_fullscreen\b/g, ''), this['fullscreenOff'](_0xc765x4, _0xc765x5)) : (_0xc765x2['className'] += ' pseudo_fullscreen', this['fullscreenOn'](_0xc765x4, _0xc765x5))
        }
    },
    findClosestParent: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4, _0xc765x5;
        if (['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector']['some'](function(_0xc765x2) {
                return 'function' == typeof document['body'][_0xc765x2] && (_0xc765x4 = _0xc765x2, !0)
            }), _0xc765x2[_0xc765x4](_0xc765x3)) {
            return _0xc765x2
        };
        for (; _0xc765x2;) {
            if ((_0xc765x5 = _0xc765x2['parentElement']) && _0xc765x5[_0xc765x4](_0xc765x3)) {
                return _0xc765x5
            };
            _0xc765x2 = _0xc765x5
        };
        return null
    },
    getTranslateX: function(_0xc765x2) {
        var _0xc765x3 = null;
        try {
            var _0xc765x4 = _0xc765x2['style']['transform']['match'](/translate3d\((-?\d+px,\s?){2}-?\d+px\)/);
            _0xc765x4 && _0xc765x4['length'] && (_0xc765x3 = _0xc765x4[0]['replace']('translate3d(', '')['replace'](')', '')['replace'](/\s/g, '')['replace'](/px/g, '')['split'](','))
        } catch (_0xc765x2) {
            _0xc765x3 = null
        };
        return _0xc765x3 && 3 === _0xc765x3['length'] ? parseInt(_0xc765x3[0]) : 0
    },
    getEventOffsetX: function(_0xc765x2, _0xc765x3) {
        for (var _0xc765x4 = 0, _0xc765x5 = 0; _0xc765x3 && !isNaN(_0xc765x3['offsetLeft']);) {
            _0xc765x5 = fluidPlayerClass['getTranslateX'](_0xc765x3), 'BODY' === _0xc765x3['tagName'] ? _0xc765x4 += _0xc765x3['offsetLeft'] + _0xc765x3['clientLeft'] + _0xc765x5 - (_0xc765x3['scrollLeft'] || document['documentElement']['scrollLeft']) : _0xc765x4 += _0xc765x3['offsetLeft'] + _0xc765x3['clientLeft'] + _0xc765x5 - _0xc765x3['scrollLeft'], _0xc765x3 = _0xc765x3['offsetParent']
        };
        return (void(0) !== _0xc765x2['touches'] && void(0) !== _0xc765x2['touches'][0] ? _0xc765x2['touches'][0]['clientX'] : _0xc765x2['clientX']) - _0xc765x4
    },
    getEventOffsetY: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = 1,
            _0xc765x5 = fluidPlayerClass['findClosestParent'](_0xc765x3, 'div[id^="fluid_video_wrapper_"]');
        if (_0xc765x5) {
            var _0xc765x6 = _0xc765x5['id']['replace']('fluid_video_wrapper_', ''),
                _0xc765x7 = fluidPlayerClass['checkFullscreenSupport']('fluid_video_wrapper_' + _0xc765x6);
            _0xc765x7 && document[_0xc765x7['isFullscreen']] && (_0xc765x4 = 0)
        };
        for (var _0xc765x9 = 0; _0xc765x3 && !isNaN(_0xc765x3['offsetTop']);) {
            'BODY' === _0xc765x3['tagName'] ? _0xc765x9 += _0xc765x3['offsetTop'] - (_0xc765x3['scrollTop'] || document['documentElement']['scrollTop']) * _0xc765x4 : _0xc765x9 += _0xc765x3['offsetTop'] - _0xc765x3['scrollTop'] * _0xc765x4, _0xc765x3 = _0xc765x3['offsetParent']
        };
        return _0xc765x2['clientY'] - _0xc765x9
    },
    onProgressbarMouseDown: function(_0xc765x4, _0xc765x2) {
        var _0xc765x5 = fluidPlayerClass['getInstanceById'](_0xc765x4);
        _0xc765x5['displayOptions']['layoutControls']['playPauseAnimation'] = !1;
        var _0xc765x6 = fluidPlayerClass['getEventOffsetX'](_0xc765x2, document['getElementById'](_0xc765x4 + '_fluid_controls_progress_container'));
        if (!_0xc765x5['isCurrentlyPlayingAd']) {
            _0xc765x5['fluidPseudoPause'] = !0;
            var _0xc765x7 = document['getElementById'](_0xc765x4),
                _0xc765x9 = _0xc765x7['paused'];
            _0xc765x9 || _0xc765x7['pause'](), document['addEventListener']('mouseup', _0xc765xc), document['addEventListener']('touchend', _0xc765xc), document['addEventListener']('mousemove', _0xc765xb), document['addEventListener']('touchmove', _0xc765xb)
        };

        function _0xc765xa(_0xc765x2, _0xc765x3) {
            var _0xc765x4 = document['getElementById'](_0xc765x2 + '_fluid_controls_progress_container')['clientWidth'];
            _0xc765x4 && (_0xc765x7['currentTime'] = _0xc765x5['currentVideoDuration'] * _0xc765x3 / _0xc765x4)
        }

        function _0xc765xb(_0xc765x2) {
            var _0xc765x3 = fluidPlayerClass['getEventOffsetX'](_0xc765x2, document['getElementById'](_0xc765x4 + '_fluid_controls_progress_container'));
            _0xc765x6 = NaN, _0xc765xa(_0xc765x4, _0xc765x3), _0xc765x5['contolProgressbarUpdate'](_0xc765x5['videoPlayerId']), _0xc765x5['contolDurationUpdate'](_0xc765x5['videoPlayerId'])
        }

        function _0xc765xc(_0xc765x2) {
            document['removeEventListener']('mousemove', _0xc765xb), document['removeEventListener']('touchmove', _0xc765xb), document['removeEventListener']('mouseup', _0xc765xc), document['removeEventListener']('touchend', _0xc765xc);
            var _0xc765x3 = fluidPlayerClass['getEventOffsetX'](_0xc765x2, document['getElementById'](_0xc765x4 + '_fluid_controls_progress_container'));
            isNaN(_0xc765x3) && !isNaN(_0xc765x6) && (_0xc765x3 = _0xc765x6), isNaN(_0xc765x3) || _0xc765xa(_0xc765x4, _0xc765x3), _0xc765x9 || _0xc765x5['play'](), _0xc765x5['initialAnimationSet'] && setTimeout(function() {
                _0xc765x5['displayOptions']['layoutControls']['playPauseAnimation'] = _0xc765x5['initialAnimationSet']
            }, 200), _0xc765x5['fluidPseudoPause'] = !1
        }
    },
    onVolumebarMouseDown: function(_0xc765x4) {
        function _0xc765x5(_0xc765x2, _0xc765x3) {
            var _0xc765x4 = document['getElementById'](_0xc765x2),
                _0xc765x5 = document['getElementById'](_0xc765x2 + '_fluid_control_volume_container')['clientWidth'],
                _0xc765x6 = fluidPlayerClass['getInstanceById'](_0xc765x2);
            if (_0xc765x5) {
                var _0xc765x7 = _0xc765x3 / _0xc765x5;
                _0xc765x7 < 0.05 ? (_0xc765x7 = 0, _0xc765x4['muted'] = !0) : 0.95 < _0xc765x7 && (_0xc765x7 = 1), _0xc765x4['muted'] && 0 < _0xc765x7 && (_0xc765x4['muted'] = !1), _0xc765x6['setVolume'](_0xc765x7)
            }
        }

        function _0xc765x6(_0xc765x2) {
            var _0xc765x3 = fluidPlayerClass['getEventOffsetX'](_0xc765x2, document['getElementById'](_0xc765x4 + '_fluid_control_volume_container'));
            _0xc765x5(_0xc765x4, _0xc765x3)
        }

        function _0xc765x7(_0xc765x2) {
            document['removeEventListener']('mousemove', _0xc765x6), document['removeEventListener']('touchmove', _0xc765x6), document['removeEventListener']('mouseup', _0xc765x7), document['removeEventListener']('touchend', _0xc765x7);
            var _0xc765x3 = fluidPlayerClass['getEventOffsetX'](_0xc765x2, document['getElementById'](_0xc765x4 + '_fluid_control_volume_container'));
            isNaN(_0xc765x3) || _0xc765x5(_0xc765x4, _0xc765x3)
        }
        document['addEventListener']('mouseup', _0xc765x7), document['addEventListener']('touchend', _0xc765x7), document['addEventListener']('mousemove', _0xc765x6), document['addEventListener']('touchmove', _0xc765x6)
    },
    setVastList: function() {
        var _0xc765x2, _0xc765x3, _0xc765x4 = this,
            _0xc765x5 = {},
            _0xc765x6 = {
                id: null,
                roll: null,
                played: !1,
                vastLoaded: !1,
                error: !1,
                adText: null,
                adTextPosition: null
            },
            _0xc765x7 = 0,
            _0xc765x9 = function(_0xc765x2) {
                var _0xc765x3 = !1;
                switch (_0xc765x2['roll']) {
                    case 'midRoll':
                        void(0) === _0xc765x2['timer'] && (_0xc765x3 = !0)
                };
                return _0xc765x3
            };
        if (_0xc765x4['displayOptions']['vastOptions']['hasOwnProperty']('adList')) {
            for (var _0xc765xa in _0xc765x4['displayOptions']['vastOptions']['adList']) {
                adItem = _0xc765x4['displayOptions']['vastOptions']['adList'][_0xc765xa], _0xc765x2 = adItem, _0xc765x3 = void(0), _0xc765x3 = !1, _0xc765x2['vastTag'] || (_0xc765x4['announceLocalError'](102, '"vastTag" property is missing from adList.'), _0xc765x3 = !0), _0xc765x2['roll'] || (_0xc765x4['announceLocalError'](102, '"roll" is missing from adList.'), _0xc765x3 = !0), -1 === _0xc765x4['availableRolls']['indexOf'](_0xc765x2['roll']) && (_0xc765x4['announceLocalError'](102, 'Only ' + _0xc765x4['availableRolls']['join'](',') + ' rolls are supported.'), _0xc765x3 = !0), _0xc765x2['size'] && -1 === _0xc765x4['supportedNonLinearAd']['indexOf'](_0xc765x2['size']) && (_0xc765x4['announceLocalError'](102, 'Only ' + _0xc765x4['supportedNonLinearAd']['join'](',') + ' size are supported.'), _0xc765x3 = !0), _0xc765x3 ? _0xc765x4['announceLocalError'](102, 'Wrong adList parameters.') : (id = 'ID' + _0xc765x7, _0xc765x5[id] = Object['assign']({}, _0xc765x6), _0xc765x5[id] = Object['assign'](_0xc765x5[id], _0xc765x4['displayOptions']['vastOptions']['adList'][_0xc765xa]), 'midRoll' == adItem['roll'] && (_0xc765x5[id]['error'] = _0xc765x9('midRoll', adItem)), _0xc765x5[id]['id'] = id, _0xc765x7++)
            }
        };
        _0xc765x4['adList'] = _0xc765x5
    },
    findRoll: function(_0xc765x2) {
        var _0xc765x3 = [];
        if (_0xc765x3['length'] = 0, _0xc765x2 && this['hasOwnProperty']('adList')) {
            for (var _0xc765x4 in this['adList']) {
                this['adList'][_0xc765x4]['roll'] == _0xc765x2 && _0xc765x3['push'](_0xc765x4)
            };
            return _0xc765x3
        }
    },
    volumeChange: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = document['getElementById'](_0xc765x2)['volume'];
        'asc' == _0xc765x3 ? _0xc765x4 += 0.05 : 'desc' == _0xc765x3 && (_0xc765x4 -= 0.05), _0xc765x4 < 0.05 ? _0xc765x4 = 0 : 0.95 < _0xc765x4 && (_0xc765x4 = 1), this['setVolume'](_0xc765x4)
    },
    currentTimeChange: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = fluidPlayerClass['getInstanceById'](_0xc765x2);
        if (!_0xc765x4['isCurrentlyPlayingAd']) {
            var _0xc765x5 = document['getElementById'](_0xc765x2);
            _0xc765x5['currentTime'] = _0xc765x4['getNewCurrentTimeValueByKeyCode'](_0xc765x3, _0xc765x5['currentTime'], _0xc765x5['duration'])
        }
    },
    getNewCurrentTimeValueByKeyCode: function(_0xc765x2, _0xc765x3, _0xc765x4) {
        var _0xc765x5 = _0xc765x3;
        switch (_0xc765x2) {
            case 37:
                _0xc765x5 = (_0xc765x5 -= 5) < 5 ? 0 : _0xc765x5;
                break;
            case 39:
                _0xc765x5 = _0xc765x4 - 5 < (_0xc765x5 += 5) ? _0xc765x4 : _0xc765x5;
                break;
            case 35:
                _0xc765x5 = _0xc765x4;
                break;
            case 36:
                _0xc765x5 = 0;
                break;
            case 48:
                ;
            case 49:
                ;
            case 50:
                ;
            case 51:
                ;
            case 52:
                ;
            case 53:
                ;
            case 54:
                ;
            case 55:
                ;
            case 56:
                ;
            case 57:
                if (_0xc765x2 < 58 && 47 < _0xc765x2) {
                    _0xc765x5 = _0xc765x4 * (10 * (_0xc765x2 - 48)) / 100
                }
        };
        return _0xc765x5
    },
    handleMouseleave: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceIdByWrapperId'](this['getAttribute']('id')),
            _0xc765x4 = fluidPlayerClass['getInstanceById'](_0xc765x3);
        void(0) !== _0xc765x2['clientX'] && document['getElementById']('fluid_video_wrapper_' + _0xc765x3)['contains'](document['elementFromPoint'](_0xc765x2['clientX'], _0xc765x2['clientY'])) || _0xc765x4['hideControlBar']['call'](this)
    },
    handleMouseenterForKeyboard: function() {
        var _0xc765x4 = fluidPlayerClass['getInstanceIdByWrapperId'](this['getAttribute']('id')),
            _0xc765x5 = fluidPlayerClass['getInstanceById'](_0xc765x4),
            _0xc765x6 = document['getElementById'](_0xc765x4);
        _0xc765x5['captureKey'] || (_0xc765x5['captureKey'] = function(_0xc765x2) {
            _0xc765x2['stopPropagation']();
            var _0xc765x3 = _0xc765x2['keyCode'];
            switch (_0xc765x3) {
                case 70:
                    _0xc765x5['fullscreenToggle'](), _0xc765x2['preventDefault']();
                    break;
                case 13:
                    ;
                case 32:
                    _0xc765x5['playPauseToggle'](_0xc765x6), _0xc765x2['preventDefault']();
                    break;
                case 77:
                    _0xc765x5['muteToggle'](_0xc765x4), _0xc765x2['preventDefault']();
                    break;
                case 38:
                    _0xc765x5['volumeChange'](_0xc765x4, 'asc'), _0xc765x2['preventDefault']();
                    break;
                case 40:
                    _0xc765x5['volumeChange'](_0xc765x4, 'desc'), _0xc765x2['preventDefault']();
                    break;
                case 37:
                    ;
                case 39:
                    ;
                case 35:
                    ;
                case 36:
                    ;
                case 48:
                    ;
                case 49:
                    ;
                case 50:
                    ;
                case 51:
                    ;
                case 52:
                    ;
                case 53:
                    ;
                case 54:
                    ;
                case 55:
                    ;
                case 56:
                    ;
                case 57:
                    _0xc765x5['currentTimeChange'](_0xc765x4, _0xc765x3), _0xc765x2['preventDefault']()
            };
            return !1
        }, document['addEventListener']('keydown', _0xc765x5['captureKey'], !0))
    },
    keyboardControl: function() {
        var _0xc765x5 = this;
        document['getElementById']('fluid_video_wrapper_' + _0xc765x5['videoPlayerId'])['addEventListener']('click', _0xc765x5['handleMouseenterForKeyboard'], !1), window['addEventListener']('click', function(_0xc765x2) {
            var _0xc765x3 = _0xc765x5['videoPlayerId'],
                _0xc765x4 = fluidPlayerClass['getInstanceById'](_0xc765x3);
            document['getElementById']('fluid_video_wrapper_' + _0xc765x3)['contains'](_0xc765x2['target']) || _0xc765x2['target']['id'] == 'skipHref_' + _0xc765x3 || (document['removeEventListener']('keydown', _0xc765x4['captureKey'], !0), delete _0xc765x4['captureKey'], _0xc765x4['theatreMode'] && !_0xc765x4['theatreModeAdvanced'] && _0xc765x4['theatreToggle']())
        })
    },
    initialPlay: function() {
        var _0xc765x2 = this,
            _0xc765x3 = fluidPlayerClass['getInstanceById'](_0xc765x2['id']);
        if (_0xc765x2['addEventListener']('playing', function() {
                _0xc765x3['toggleLoader'](!1)
            }), _0xc765x2['addEventListener']('waiting', function() {
                _0xc765x3['toggleLoader'](!0)
            }), !_0xc765x3['displayOptions']['layoutControls']['playButtonShowing']) {
            document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_controls_container')['classList']['remove']('initial_controls_show');
            var _0xc765x4 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_logo');
            _0xc765x4 && _0xc765x4['classList']['remove']('initial_controls_show')
        };
        _0xc765x3['firstPlayLaunched'] || (_0xc765x3['playPauseToggle'](_0xc765x2), _0xc765x2['removeEventListener']('play', _0xc765x3['initialPlay']))
    },
    playPauseToggle: function(_0xc765x2) {
        var _0xc765x3 = fluidPlayerClass['getInstanceById'](_0xc765x2['id']),
            _0xc765x4 = !_0xc765x3['firstPlayLaunched'],
            _0xc765x5 = _0xc765x3['findRoll']('preRoll');
        if (_0xc765x4 && 0 != _0xc765x5['length']) {
            var _0xc765x6 = fluidPlayerClass['getBrowserVersion']();
            _0xc765x3['isCurrentlyPlayingAd'] = !0, ('Safari' == _0xc765x6['browserName'] || !1 !== _0xc765x3['mobileInfo']['userOs'] && 'Android' == _0xc765x3['mobileInfo']['userOs'] && 'Google Chrome' == _0xc765x6['browserName']) && (_0xc765x2['src'] = fluidPlayerScriptLocation + 'blank.mp4', _0xc765x2['play'](), this['playPauseAnimationToggle'](!0)), _0xc765x3['firstPlayLaunched'] = !0, _0xc765x3['prepareVast']('preRoll')
        } else {
            _0xc765x4 && 0 == _0xc765x5['length'] && (_0xc765x3['firstPlayLaunched'] = !0, _0xc765x3['displayOptions']['vastOptions']['vastAdvanced']['noVastVideoCallback']()), 'browser' !== _0xc765x3['displayOptions']['layoutControls']['layout'] && (_0xc765x2['paused'] ? (_0xc765x3['dashPlayer'] ? _0xc765x3['dashPlayer']['play']() : _0xc765x2['play'](), this['playPauseAnimationToggle'](!0)) : _0xc765x4 || (_0xc765x2['pause'](), this['playPauseAnimationToggle'](!1))), _0xc765x3['toggleOnPauseAd']()
        };
        var _0xc765x7 = function() {
            _0xc765x3['prepareVast']('onPauseRoll'), _0xc765x3['prepareVast']('postRoll'), _0xc765x3['prepareVast']('midRoll')
        };
        if (_0xc765x4) {
            var _0xc765x9 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_pseudo_poster');
            _0xc765x9 && _0xc765x9['parentNode']['removeChild'](_0xc765x9), 0 < _0xc765x3['mainVideoDuration'] ? _0xc765x7() : _0xc765x2['addEventListener']('mainVideoDurationSet', _0xc765x7)
        };
        _0xc765x3['adTimer']();
        var _0xc765xa = document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_html_on_pause');
        _0xc765xa && !_0xc765x3['isCurrentlyPlayingAd'] && (_0xc765x2['paused'] ? _0xc765xa['style']['display'] = 'flex' : _0xc765xa['style']['display'] = 'none')
    },
    setCustomControls: function() {
        var _0xc765x3 = this,
            _0xc765x2 = document['getElementById'](this['videoPlayerId']);
        document['getElementById'](this['videoPlayerId'] + '_fluid_control_playpause')['addEventListener']('click', function() {
            _0xc765x3['firstPlayLaunched'] || _0xc765x2['removeEventListener']('play', _0xc765x3['initialPlay']), _0xc765x3['playPauseToggle'](_0xc765x2)
        }, !1), document['getElementById'](_0xc765x3['videoPlayerId'])['addEventListener']('play', function() {
            _0xc765x3['controlPlayPauseToggle'](_0xc765x3['videoPlayerId']), _0xc765x3['contolVolumebarUpdate'](_0xc765x3['videoPlayerId'])
        }, !1), document['getElementById'](_0xc765x3['videoPlayerId'])['addEventListener']('fluidplayerpause', function() {
            _0xc765x3['controlPlayPauseToggle'](_0xc765x3['videoPlayerId'])
        }, !1), _0xc765x2['addEventListener']('timeupdate', function() {
            _0xc765x3['contolProgressbarUpdate'](_0xc765x3['videoPlayerId']), _0xc765x3['contolDurationUpdate'](_0xc765x3['videoPlayerId'])
        });
        var _0xc765x4 = fluidPlayerClass['getMobileOs']()['userOs'] ? 'touchstart' : 'mousedown';
        document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_controls_progress_container')['addEventListener'](_0xc765x4, function(_0xc765x2) {
            _0xc765x3['onProgressbarMouseDown'](_0xc765x3['videoPlayerId'], _0xc765x2)
        }, !1), document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_control_volume_container')['addEventListener'](_0xc765x4, function(_0xc765x2) {
            _0xc765x3['onVolumebarMouseDown'](_0xc765x3['videoPlayerId'])
        }, !1), _0xc765x2['addEventListener']('volumechange', function() {
            _0xc765x3['contolVolumebarUpdate'](_0xc765x3['videoPlayerId'])
        }), document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_control_mute')['addEventListener']('click', function() {
            _0xc765x3['muteToggle'](_0xc765x3['videoPlayerId'])
        }), _0xc765x3['setBuffering'](), document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_control_fullscreen')['addEventListener']('click', function() {
            _0xc765x3['fullscreenToggle']()
        }), _0xc765x3['displayOptions']['layoutControls']['allowTheatre'] && !_0xc765x3['isInIframe'] ? document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_control_theatre')['addEventListener']('click', function() {
            _0xc765x3['theatreToggle'](_0xc765x3['videoPlayerId'])
        }) : document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_control_theatre')['style']['display'] = 'none', _0xc765x2['addEventListener']('ratechange', function() {
            _0xc765x3['isCurrentlyPlayingAd'] && (this['playbackRate'] = 1)
        })
    },
    createTimePositionPreview: function() {
        var _0xc765x7 = this,
            _0xc765x9 = document['getElementById'](_0xc765x7['videoPlayerId']);
        if (_0xc765x7['showTimeOnHover']) {
            var _0xc765x2 = document['getElementById'](_0xc765x7['videoPlayerId'] + '_fluid_controls_progress_container'),
                _0xc765x3 = document['createElement']('div');
            _0xc765x3['id'] = _0xc765x7['videoPlayerId'] + '_fluid_timeline_preview', _0xc765x3['className'] = 'fluid_timeline_preview', _0xc765x3['style']['display'] = 'none', _0xc765x3['style']['position'] = 'absolute', _0xc765x2['appendChild'](_0xc765x3), document['getElementById'](_0xc765x7['videoPlayerId'] + '_fluid_controls_progress_container')['addEventListener']('mousemove', function(_0xc765x2) {
                var _0xc765x3 = document['getElementById'](_0xc765x7['videoPlayerId'] + '_fluid_controls_progress_container'),
                    _0xc765x4 = _0xc765x3['clientWidth'],
                    _0xc765x5 = document['getElementById'](_0xc765x7['videoPlayerId'] + '_fluid_timeline_preview'),
                    _0xc765x6 = fluidPlayerClass['getEventOffsetX'](_0xc765x2, _0xc765x3);
                hoverSecondQ = _0xc765x7['currentVideoDuration'] * _0xc765x6 / _0xc765x4, showad = _0xc765x7['pad'](parseInt(hoverSecondQ / 60)) + ':' + _0xc765x7['pad'](parseInt(hoverSecondQ % 60)), _0xc765x5['innerText'] = showad, _0xc765x5['style']['display'] = 'block', _0xc765x5['style']['left'] = hoverSecondQ / _0xc765x9['duration'] * 100 + '%'
            }, !1), document['getElementById'](_0xc765x7['videoPlayerId'] + '_fluid_controls_progress_container')['addEventListener']('mouseout', function() {
                document['getElementById'](_0xc765x7['videoPlayerId'] + '_fluid_timeline_preview')['style']['display'] = 'none'
            }, !1)
        }
    },
    setCustomContextMenu: function() {
        var _0xc765x2 = this,
            _0xc765x3 = document['getElementById'](_0xc765x2['videoPlayerId']),
            _0xc765x4 = document['getElementById']('fluid_video_wrapper_' + _0xc765x2['videoPlayerId']),
            _0xc765x5 = document['createElement']('div');
        _0xc765x5['id'] = _0xc765x2['videoPlayerId'] + '_fluid_context_menu', _0xc765x5['className'] = 'fluid_context_menu', _0xc765x5['style']['display'] = 'none', _0xc765x5['style']['position'] = 'absolute', _0xc765x5['innerHTML'] = '<ul>    <li id="' + _0xc765x2['videoPlayerId'] + 'context_option_play">Play</li>    <li id="' + _0xc765x2['videoPlayerId'] + 'context_option_mute">Mute</li>    <li id="' + _0xc765x2['videoPlayerId'] + 'context_option_fullscreen">Fullscreen</li>    <li id="' + _0xc765x2['videoPlayerId'] + 'context_option_homepage">Fluid Player ' + _0xc765x2['version'] + '</li></ul>', _0xc765x3['parentNode']['insertBefore'](_0xc765x5, _0xc765x3['nextSibling']), _0xc765x4['addEventListener']('contextmenu', function(_0xc765x2) {
            _0xc765x2['preventDefault'](), _0xc765x5['style']['left'] = fluidPlayerClass['getEventOffsetX'](_0xc765x2, _0xc765x3) + 'px', _0xc765x5['style']['top'] = fluidPlayerClass['getEventOffsetY'](_0xc765x2, _0xc765x3) + 'px', _0xc765x5['style']['display'] = 'block'
        }, !1), document['addEventListener']('click', function(_0xc765x2) {
            _0xc765x2['target'] === _0xc765x3 && 2 === _0xc765x2['button'] || (_0xc765x5['style']['display'] = 'none')
        }, !1);
        var _0xc765x6 = document['getElementById'](_0xc765x2['videoPlayerId'] + 'context_option_play'),
            _0xc765x7 = document['getElementById'](_0xc765x2['videoPlayerId'] + 'context_option_mute'),
            _0xc765x9 = document['getElementById'](_0xc765x2['videoPlayerId'] + 'context_option_fullscreen'),
            _0xc765xa = document['getElementById'](_0xc765x2['videoPlayerId'] + 'context_option_homepage');
        _0xc765x6['addEventListener']('click', function() {
            _0xc765x2['playPauseToggle'](_0xc765x3)
        }, !1), _0xc765x7['addEventListener']('click', function() {
            _0xc765x2['muteToggle'](_0xc765x2['videoPlayerId'])
        }, !1), _0xc765x9['addEventListener']('click', function() {
            _0xc765x2['fullscreenToggle']()
        }, !1), _0xc765xa['addEventListener']('click', function() {
            window['open'](_0xc765x2['homepage'], '_blank')['focus']()
        }, !1)
    },
    setDefaultLayout: function() {
        var _0xc765x2 = this,
            _0xc765x3 = document['getElementById'](_0xc765x2['videoPlayerId']);
        document['getElementById']('fluid_video_wrapper_' + _0xc765x2['videoPlayerId'])['className'] += ' fluid_player_layout_' + _0xc765x2['displayOptions']['layoutControls']['layout'], _0xc765x3['removeAttribute']('controls'), _0xc765x2['setCustomContextMenu']();
        var _0xc765x4 = '';
        _0xc765x2['checkShouldDisplayVolumeBar']() || (_0xc765x4 = ' no_volume_bar');
        var _0xc765x5 = document['createElement']('div');
        _0xc765x5['id'] = _0xc765x2['videoPlayerId'] + '_fluid_controls_container', _0xc765x5['className'] = 'fluid_controls_container' + _0xc765x4, _0xc765x5['innerHTML'] = _0xc765x2['generateCustomControlTags'](), _0xc765x3['parentNode']['insertBefore'](_0xc765x5, _0xc765x3['nextSibling']);
        var _0xc765x6 = document['createElement']('div');
        _0xc765x6['className'] = 'vast_video_loading', _0xc765x6['id'] = 'vast_video_loading_' + _0xc765x2['videoPlayerId'], _0xc765x6['style']['display'] = 'none', backgroundColor = _0xc765x2['displayOptions']['layoutControls']['primaryColor'] ? _0xc765x2['displayOptions']['layoutControls']['primaryColor'] : 'white', document['getElementById'](_0xc765x2['videoPlayerId'] + '_vast_control_currentprogress')['style']['backgroundColor'] = backgroundColor, _0xc765x3['parentNode']['insertBefore'](_0xc765x6, _0xc765x3['nextSibling']);
        var _0xc765x7 = 100,
            _0xc765x9 = setInterval(function() {
                _0xc765x7 ? _0xc765x2['checkIfVolumebarIsRendered']() ? (clearInterval(_0xc765x9), _0xc765x2['contolVolumebarUpdate'](_0xc765x2['videoPlayerId'])) : _0xc765x7-- : clearInterval(_0xc765x9)
            }, 100);
        _0xc765x2['initHtmlOnPauseBlock'](), _0xc765x2['setCustomControls'](), _0xc765x2['setupThumbnailPreview'](), _0xc765x2['createTimePositionPreview'](), _0xc765x2['posterImage'](), _0xc765x2['initPlayButton'](), _0xc765x2['createPlaybackList'](), _0xc765x2['createDownload']()
    },
    checkIfVolumebarIsRendered: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId'] + '_fluid_control_volume_currentpos'),
            _0xc765x3 = document['getElementById'](this['videoPlayerId'] + '_fluid_control_volume')['clientWidth'];
        return _0xc765x2['clientWidth'] !== _0xc765x3
    },
    setLayout: function() {
        var _0xc765x2 = this,
            _0xc765x3 = document['getElementById'](_0xc765x2['videoPlayerId']),
            _0xc765x4 = fluidPlayerClass['isTouchDevice']() ? 'touchend' : 'click';
        switch (document['getElementById'](this['videoPlayerId'])['addEventListener'](_0xc765x4, function() {
            _0xc765x2['playPauseToggle'](_0xc765x3)
        }, !1), this['displayOptions']['layoutControls']['layout']) {
            case 'browser':
                break;
            default:
                _0xc765x3['addEventListener']('play', _0xc765x2['initialPlay'], !1), this['setDefaultLayout']()
        }
    },
    handleFullscreen: function() {
        var _0xc765x3 = this;
        void(0) === document['vastFullsreenChangeEventListenersAdded'] && (['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'msfullscreenchange']['forEach'](function(_0xc765x2) {
            'object' == typeof document['on' + _0xc765x2] && document['addEventListener'](_0xc765x2, function(_0xc765x2) {
                _0xc765x3['recalculateAdDimensions'](fluidPlayerClass['activeVideoPlayerId'])
            }, !1)
        }), document['vastFullsreenChangeEventListenersAdded'] = !0)
    },
    setupThumbnailPreviewVtt: function() {
        var _0xc765xc = this;
        _0xc765xc['sendRequest'](_0xc765xc['displayOptions']['layoutControls']['timelinePreview']['file'], !0, _0xc765xc['displayOptions']['vastOptions']['vastTimeout'], function() {
            var _0xc765x2 = this;
            if ((4 !== _0xc765x2['readyState'] || 200 === _0xc765x2['status']) && 4 === _0xc765x2['readyState'] && 200 === _0xc765x2['status']) {
                var _0xc765x3 = _0xc765x2['responseText'],
                    _0xc765x4 = (new WebVTTParser)['parse'](_0xc765x3);
                _0xc765xc['timelinePreviewData'] = function(_0xc765x2) {
                    if (void(0) === _0xc765x2['cues'] || !_0xc765x2['cues']['length']) {
                        return []
                    };
                    for (var _0xc765x3 = [], _0xc765x4 = null, _0xc765x5 = null, _0xc765x6 = 0; _0xc765x6 < _0xc765x2['cues']['length']; _0xc765x6++) {
                        var _0xc765x7 = 0,
                            _0xc765x9 = 0,
                            _0xc765xa = 122.5,
                            _0xc765xb = 69;
                        2 === (_0xc765x4 = _0xc765x2['cues'][_0xc765x6]['text']['split']('#'))['length'] && 0 === _0xc765x4[1]['indexOf']('xywh=') && 4 === (_0xc765x5 = (_0xc765x5 = _0xc765x4[1]['substring'](5))['split'](','))['length'] && (_0xc765xc['displayOptions']['layoutControls']['timelinePreview']['spriteImage'] = !0, _0xc765x7 = parseInt(_0xc765x5[0]), _0xc765x9 = parseInt(_0xc765x5[1]), _0xc765xa = parseInt(_0xc765x5[2]), _0xc765xb = parseInt(_0xc765x5[3])), !_0xc765xc['displayOptions']['layoutControls']['timelinePreview']['spriteRelativePath'] || -1 === _0xc765xc['displayOptions']['layoutControls']['timelinePreview']['file']['indexOf']('/') || void(0) !== _0xc765xc['displayOptions']['layoutControls']['timelinePreview']['sprite'] && '' != _0xc765xc['displayOptions']['layoutControls']['timelinePreview']['sprite'] ? imageUrl = _0xc765xc['displayOptions']['layoutControls']['timelinePreview']['sprite'] ? _0xc765xc['displayOptions']['layoutControls']['timelinePreview']['sprite'] : _0xc765x4[0] : (imageUrl = _0xc765xc['displayOptions']['layoutControls']['timelinePreview']['file']['substring'](0, _0xc765xc['displayOptions']['layoutControls']['timelinePreview']['file']['lastIndexOf']('/')), imageUrl += '/' + _0xc765x4[0]), _0xc765x3['push']({
                            startTime: _0xc765x2['cues'][_0xc765x6]['startTime'],
                            endTime: _0xc765x2['cues'][_0xc765x6]['endTime'],
                            image: imageUrl,
                            x: _0xc765x7,
                            y: _0xc765x9,
                            w: _0xc765xa,
                            h: _0xc765xb
                        })
                    };
                    return _0xc765x3
                }(_0xc765x4)
            }
        })
    },
    generateTimelinePreviewTags: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId'] + '_fluid_controls_progress_container'),
            _0xc765x3 = document['createElement']('div');
        _0xc765x3['id'] = this['videoPlayerId'] + '_fluid_timeline_preview_container', _0xc765x3['className'] = 'fluid_timeline_preview_container', _0xc765x3['style']['display'] = 'none', _0xc765x3['style']['position'] = 'absolute', _0xc765x2['appendChild'](_0xc765x3);
        var _0xc765x4 = document['createElement']('div');
        _0xc765x4['id'] = this['videoPlayerId'] + '_fluid_timeline_preview_container_shadow', _0xc765x4['className'] = 'fluid_timeline_preview_container_shadow', _0xc765x4['style']['position'] = 'absolute', _0xc765x4['style']['display'] = 'none', _0xc765x4['style']['opacity'] = 1, _0xc765x2['appendChild'](_0xc765x4)
    },
    getThumbnailCoordinates: function(_0xc765x2) {
        var _0xc765x3 = this;
        if (_0xc765x3['timelinePreviewData']['length']) {
            for (var _0xc765x4 = 0; _0xc765x4 < _0xc765x3['timelinePreviewData']['length']; _0xc765x4++) {
                if (_0xc765x2 >= _0xc765x3['timelinePreviewData'][_0xc765x4]['startTime'] && _0xc765x2 <= _0xc765x3['timelinePreviewData'][_0xc765x4]['endTime']) {
                    return _0xc765x3['timelinePreviewData'][_0xc765x4]
                }
            }
        };
        return !1
    },
    drawTimelinePreview: function(_0xc765x2) {
        var _0xc765x3 = this,
            _0xc765x4 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_timeline_preview_container'),
            _0xc765x5 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_timeline_preview_container_shadow'),
            _0xc765x6 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_controls_progress_container'),
            _0xc765x7 = _0xc765x6['clientWidth'];
        if (_0xc765x3['isCurrentlyPlayingAd']) {
            'none' !== _0xc765x4['style']['display'] && (_0xc765x4['style']['display'] = 'none')
        } else {
            var _0xc765x9 = fluidPlayerClass['getEventOffsetX'](_0xc765x2, _0xc765x6),
                _0xc765xa = null;
            if (_0xc765x7) {
                _0xc765xa = _0xc765x3['currentVideoDuration'] * _0xc765x9 / _0xc765x7;
                var _0xc765xb = _0xc765x3['getThumbnailCoordinates'](_0xc765xa);
                _0xc765x5['style']['width'] = _0xc765x7 + 'px', !(_0xc765x5['style']['display'] = 'block') !== _0xc765xb ? (_0xc765x4['style']['width'] = _0xc765xb['w'] + 'px', _0xc765x4['style']['height'] = _0xc765xb['h'] + 'px', _0xc765x5['style']['height'] = _0xc765xb['h'] + 'px', _0xc765x4['style']['background'] = 'url(' + _0xc765xb['image'] + ') no-repeat scroll -' + _0xc765xb['x'] + 'px -' + _0xc765xb['y'] + 'px', _0xc765x4['style']['left'] = _0xc765x9 - _0xc765xb['w'] / 2 + 'px', _0xc765x4['style']['display'] = 'block', _0xc765x3['displayOptions']['layoutControls']['timelinePreview']['spriteImage'] || (_0xc765x4['style']['backgroundSize'] = 'contain')) : _0xc765x4['style']['display'] = 'none'
            }
        }
    },
    setupThumbnailPreview: function() {
        var _0xc765x4 = this;
        if (_0xc765x4['displayOptions']['layoutControls']['timelinePreview'] && 'string' == typeof _0xc765x4['displayOptions']['layoutControls']['timelinePreview']['file'] && 'string' == typeof _0xc765x4['displayOptions']['layoutControls']['timelinePreview']['type']) {
            switch (_0xc765x4['displayOptions']['layoutControls']['timelinePreview']['type']) {
                case 'VTT':
                    fluidPlayerClass['requestScript'](fluidPlayerScriptLocation + fluidPlayerClass['vttParserScript'], _0xc765x4['setupThumbnailPreviewVtt']['bind'](this));
                    var _0xc765x2 = 'mousemove',
                        _0xc765x3 = 'mouseleave';
                    _0xc765x4['mobileInfo']['userOs'] && (_0xc765x2 = 'touchmove', _0xc765x3 = 'touchend'), document['getElementById'](_0xc765x4['videoPlayerId'] + '_fluid_controls_progress_container')['addEventListener'](_0xc765x2, _0xc765x4['drawTimelinePreview']['bind'](_0xc765x4), !1), document['getElementById'](_0xc765x4['videoPlayerId'] + '_fluid_controls_progress_container')['addEventListener'](_0xc765x3, function(_0xc765x2) {
                        var _0xc765x3 = document['getElementById'](_0xc765x4['videoPlayerId'] + '_fluid_controls_progress_container');
                        void(0) !== _0xc765x2['clientX'] && _0xc765x3['contains'](document['elementFromPoint'](_0xc765x2['clientX'], _0xc765x2['clientY'])) || (document['getElementById'](_0xc765x4['videoPlayerId'] + '_fluid_timeline_preview_container')['style']['display'] = 'none', document['getElementById'](_0xc765x4['videoPlayerId'] + '_fluid_timeline_preview_container_shadow')['style']['display'] = 'none')
                    }, !1), _0xc765x4['generateTimelinePreviewTags']()
            };
            _0xc765x4['showTimeOnHover'] = !1
        }
    },
    setupPlayerWrapper: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId']),
            _0xc765x3 = document['createElement']('div');
        _0xc765x3['className'] = fluidPlayerClass['isTouchDevice']() ? 'fluid_video_wrapper mobile' : 'fluid_video_wrapper', _0xc765x3['id'] = 'fluid_video_wrapper_' + this['videoPlayerId'], this['displayOptions']['layoutControls']['fillToContainer'] ? (_0xc765x3['style']['width'] = '100%', _0xc765x3['style']['height'] = '100%') : (_0xc765x3['style']['height'] = _0xc765x2['clientHeight'] + 'px', _0xc765x3['style']['width'] = _0xc765x2['clientWidth'] + 'px'), _0xc765x2['style']['height'] = '100%', _0xc765x2['style']['width'] = '100%', _0xc765x2['parentNode']['insertBefore'](_0xc765x3, _0xc765x2), _0xc765x3['appendChild'](_0xc765x2)
    },
    onErrorDetection: function() {
        var _0xc765x2 = fluidPlayerClass['getInstanceById'](this['id']);
        this['networkState'] === this['NETWORK_NO_SOURCE'] && _0xc765x2['isCurrentlyPlayingAd'] && _0xc765x2['playMainVideoWhenVastFails'](401)
    },
    createVideoSourceSwitch: function() {
        var _0xc765x7 = this,
            _0xc765x9 = document['getElementById'](_0xc765x7['videoPlayerId']);
        if ('browser' !== _0xc765x7['displayOptions']['layoutControls']['layout']) {
            var _0xc765x3 = [],
                _0xc765x2 = _0xc765x9['querySelectorAll']('source');
            if ([]['forEach']['call'](_0xc765x2, function(_0xc765x2) {
                    _0xc765x2['title'] && _0xc765x2['src'] && _0xc765x3['push']({
                        title: _0xc765x2['title'],
                        url: _0xc765x2['src'],
                        isHD: null != _0xc765x2['getAttribute']('data-fluid-hd')
                    })
                }), _0xc765x7['videoSources'] = _0xc765x3, 1 < _0xc765x7['videoSources']['length']) {
                var _0xc765x4 = document['getElementById'](_0xc765x7['videoPlayerId'] + '_fluid_control_video_source'),
                    _0xc765xa = !1,
                    _0xc765xb = document['createElement']('div');
                _0xc765xb['id'] = _0xc765x7['videoPlayerId'] + '_fluid_control_video_source_list', _0xc765xb['className'] = 'fluid_video_sources_list', _0xc765xb['style']['display'] = 'none';
                var _0xc765xc = !0;
                _0xc765x7['videoSources']['forEach'](function(_0xc765x2) {
                    var _0xc765x3 = _0xc765x2['url']['split']('.')['pop']();
                    if ('iOS' != _0xc765x7['mobileInfo']['userOs'] || 'mkv' != _0xc765x3) {
                        var _0xc765x4 = _0xc765xc ? 'source_selected' : '',
                            _0xc765x5 = _0xc765x2['isHD'] ? '<sup style="color:' + _0xc765x7['displayOptions']['layoutControls']['primaryColor'] + '" class="fp_hd_source"></sup>' : '';
                        _0xc765xc = !1;
                        var _0xc765x6 = document['createElement']('div');
                        _0xc765x6['id'] = 'source_' + _0xc765x7['videoPlayerId'] + '_' + _0xc765x2['title'], _0xc765x6['className'] = 'fluid_video_source_list_item', _0xc765x6['innerHTML'] = '<span class="source_button_icon ' + _0xc765x4 + '"></span>' + _0xc765x2['title'] + _0xc765x5, _0xc765x6['addEventListener']('click', function(_0xc765x2) {
                            _0xc765x9['style']['width'] = _0xc765x9['clientWidth'] + 'px', _0xc765x9['style']['height'] = _0xc765x9['clientHeight'] + 'px', _0xc765x2['stopPropagation']();
                            for (var _0xc765x3 = this, _0xc765x4 = document['getElementsByClassName']('source_button_icon'), _0xc765x5 = 0; _0xc765x5 < _0xc765x4['length']; _0xc765x5++) {
                                _0xc765x4[_0xc765x5]['className'] = _0xc765x4[_0xc765x5]['className']['replace']('source_selected', '')
                            };
                            _0xc765x3['firstChild']['className'] += ' source_selected', _0xc765x7['videoSources']['forEach'](function(_0xc765x2) {
                                _0xc765x2['title'] == _0xc765x3['innerText']['replace'](/(\r\n\t|\n|\r\t)/gm, '') && (_0xc765x7['setBuffering'](), _0xc765x7['setVideoSource'](_0xc765x2['url']), _0xc765x7['fluidStorage']['fluidQuality'] = _0xc765x2['title'])
                            }), _0xc765x7['openCloseVideoSourceSwitch']()
                        }), _0xc765xb['appendChild'](_0xc765x6), _0xc765xa = !0
                    }
                }), _0xc765xa ? (_0xc765x4['appendChild'](_0xc765xb), _0xc765x4['addEventListener']('click', function() {
                    _0xc765x7['openCloseVideoSourceSwitch']()
                })) : document['getElementById'](_0xc765x7['videoPlayerId'] + '_fluid_control_video_source')['style']['display'] = 'none'
            } else {
                document['getElementById'](_0xc765x7['videoPlayerId'] + '_fluid_control_video_source')['style']['display'] = 'none'
            }
        }
    },
    openCloseVideoSourceSwitch: function() {
        var _0xc765x3 = document['getElementById'](this['videoPlayerId'] + '_fluid_control_video_source_list'),
            _0xc765x4 = document['getElementById'](this['videoPlayerId'] + '_fluid_control_video_source');
        if (this['isCurrentlyPlayingAd']) {
            _0xc765x3['style']['display'] = 'none'
        } else {
            if ('none' == _0xc765x3['style']['display']) {
                _0xc765x3['style']['display'] = 'block';
                var _0xc765x5 = function(_0xc765x2) {
                    _0xc765x4['removeEventListener']('mouseleave', _0xc765x5), _0xc765x3['style']['display'] = 'none'
                };
                _0xc765x4['addEventListener']('mouseleave', _0xc765x5)
            } else {
                _0xc765x3['style']['display'] = 'none'
            }
        }
    },
    setVideoSource: function(_0xc765x2) {
        var _0xc765x3 = this,
            _0xc765x4 = document['getElementById'](_0xc765x3['videoPlayerId']);
        if ('iOS' == _0xc765x3['mobileInfo']['userOs'] && 0 < _0xc765x2['indexOf']('.mkv')) {
            return console['log']('[FP_ERROR] .mkv files not supported by iOS devices.'), !1
        };
        if (_0xc765x3['isCurrentlyPlayingAd']) {
            _0xc765x3['originalSrc'] = _0xc765x2
        } else {
            var _0xc765x5 = !(_0xc765x3['isSwitchingSource'] = !0);
            _0xc765x4['paused'] || (_0xc765x4['pause'](), _0xc765x5 = !0);
            var _0xc765x6 = _0xc765x4['currentTime'];
            _0xc765x3['setCurrentTimeAndPlay'](_0xc765x6, _0xc765x5), _0xc765x4['src'] = _0xc765x2, _0xc765x3['originalSrc'] = _0xc765x2, _0xc765x3['displayOptions']['layoutControls']['mediaType'] = _0xc765x3['getCurrentSrcType'](), _0xc765x3['initialiseStreamers']()
        }
    },
    setCurrentTimeAndPlay: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = document['getElementById'](this['videoPlayerId']),
            _0xc765x5 = this,
            _0xc765x6 = function() {
                _0xc765x4['currentTime'] = _0xc765x2, _0xc765x4['removeEventListener']('loadedmetadata', _0xc765x6), 'iOS' == _0xc765x5['mobileInfo']['userOs'] && _0xc765x4['addEventListener']('playing', _0xc765x7), _0xc765x3 && _0xc765x4['play'](), _0xc765x5['isSwitchingSource'] = !1, _0xc765x4['style']['width'] = '100%', _0xc765x4['style']['height'] = '100%'
            },
            _0xc765x7 = function() {
                this['currentTime'] = _0xc765x2, _0xc765x4['removeEventListener']('playing', _0xc765x7)
            };
        _0xc765x4['addEventListener']('loadedmetadata', _0xc765x6, !1), _0xc765x4['load']()
    },
    initLogo: function() {
        var _0xc765x2 = this,
            _0xc765x3 = document['getElementById'](_0xc765x2['videoPlayerId']);
        if (_0xc765x2['displayOptions']['layoutControls']['logo']['imageUrl']) {
            var _0xc765x4 = document['createElement']('div');
            _0xc765x4['id'] = _0xc765x2['videoPlayerId'] + '_logo';
            var _0xc765x5 = 'logo_maintain_display';
            _0xc765x2['displayOptions']['layoutControls']['logo']['hideWithControls'] && (_0xc765x5 = 'initial_controls_show'), _0xc765x4['classList']['add'](_0xc765x5, 'fp_logo');
            var _0xc765x6 = document['createElement']('img');
            _0xc765x6['id'] = _0xc765x2['videoPlayerId'] + '_logo_image', _0xc765x2['displayOptions']['layoutControls']['logo']['imageUrl'] && (_0xc765x6['src'] = _0xc765x2['displayOptions']['layoutControls']['logo']['imageUrl']), _0xc765x6['style']['position'] = 'absolute', _0xc765x6['style']['margin'] = _0xc765x2['displayOptions']['layoutControls']['logo']['imageMargin'];
            var _0xc765x7 = _0xc765x2['displayOptions']['layoutControls']['logo']['position']['toLowerCase'](); - 1 !== _0xc765x7['indexOf']('bottom') ? _0xc765x6['style']['bottom'] = 0 : _0xc765x6['style']['top'] = 0, -1 !== _0xc765x7['indexOf']('right') ? _0xc765x6['style']['right'] = 0 : _0xc765x6['style']['left'] = 0, _0xc765x2['displayOptions']['layoutControls']['logo']['opacity'] && (_0xc765x6['style']['opacity'] = _0xc765x2['displayOptions']['layoutControls']['logo']['opacity']), null !== _0xc765x2['displayOptions']['layoutControls']['logo']['clickUrl'] && (_0xc765x6['style']['cursor'] = 'pointer', _0xc765x6['addEventListener']('click', function() {
                window['open'](_0xc765x2['displayOptions']['layoutControls']['logo']['clickUrl'], '_blank')['focus']()
            })), _0xc765x2['displayOptions']['layoutControls']['logo']['mouseOverImageUrl'] && (_0xc765x6['addEventListener']('mouseover', function() {
                _0xc765x6['src'] = _0xc765x2['displayOptions']['layoutControls']['logo']['mouseOverImageUrl']
            }, !1), _0xc765x6['addEventListener']('mouseout', function() {
                _0xc765x6['src'] = _0xc765x2['displayOptions']['layoutControls']['logo']['imageUrl']
            }, !1)), _0xc765x3['parentNode']['insertBefore'](_0xc765x4, null), _0xc765x4['appendChild'](_0xc765x6, null)
        }
    },
    initHtmlOnPauseBlock: function() {
        var _0xc765x3 = this;
        if (!_0xc765x3['hasValidOnPauseAd']() && _0xc765x3['displayOptions']['layoutControls']['htmlOnPauseBlock']['html']) {
            var _0xc765x4 = document['getElementById'](_0xc765x3['videoPlayerId']),
                _0xc765x2 = document['createElement']('div');
            _0xc765x2['id'] = _0xc765x3['videoPlayerId'] + '_fluid_html_on_pause', _0xc765x2['className'] = 'fluid_html_on_pause', _0xc765x2['style']['display'] = 'none', _0xc765x2['innerHTML'] = _0xc765x3['displayOptions']['layoutControls']['htmlOnPauseBlock']['html'], _0xc765x2['onclick'] = function(_0xc765x2) {
                _0xc765x3['playPauseToggle'](_0xc765x4)
            }, _0xc765x3['displayOptions']['layoutControls']['htmlOnPauseBlock']['width'] && (_0xc765x2['style']['width'] = _0xc765x3['displayOptions']['layoutControls']['htmlOnPauseBlock']['width'] + 'px'), _0xc765x3['displayOptions']['layoutControls']['htmlOnPauseBlock']['height'] && (_0xc765x2['style']['height'] = _0xc765x3['displayOptions']['layoutControls']['htmlOnPauseBlock']['height'] + 'px'), _0xc765x4['parentNode']['insertBefore'](_0xc765x2, null)
        }
    },
    initPlayButton: function() {
        var _0xc765x2 = this,
            _0xc765x3 = document['getElementById'](_0xc765x2['videoPlayerId']),
            _0xc765x4 = document['createElement']('div');
        _0xc765x4['id'] = _0xc765x2['videoPlayerId'] + '_fluid_initial_play_button', _0xc765x4['className'] = 'fluid_html_on_pause', backgroundColor = _0xc765x2['displayOptions']['layoutControls']['primaryColor'] ? _0xc765x2['displayOptions']['layoutControls']['primaryColor'] : '#333333', _0xc765x4['innerHTML'] = '<div id="' + _0xc765x2['videoPlayerId'] + '_fluid_initial_play" class="fluid_initial_play" style="background-color:' + backgroundColor + '"><div id="' + _0xc765x2['videoPlayerId'] + '_fluid_state_button" class="fluid_initial_play_button"></div></div>';
        var _0xc765x5 = function() {
            _0xc765x2['playPauseToggle'](_0xc765x3), _0xc765x4['removeEventListener']('click', _0xc765x5)
        };
        (_0xc765x4['addEventListener']('click', _0xc765x5), _0xc765x2['displayOptions']['layoutControls']['playButtonShowing']) || (document['getElementById'](_0xc765x2['videoPlayerId'] + '_fluid_controls_container')['classList']['add']('initial_controls_show'), _0xc765x4['style']['opacity'] = '0');
        _0xc765x3['parentNode']['insertBefore'](_0xc765x4, null)
    },
    mainVideoReady: function() {
        var _0xc765x2 = fluidPlayerClass['getInstanceById'](this['id']);
        if (0 == _0xc765x2['mainVideoDuration'] && !_0xc765x2['isCurrentlyPlayingAd'] && !1 === _0xc765x2['mainVideoReadyState']) {
            _0xc765x2['mainVideoDuration'] = this['duration'], _0xc765x2['mainVideoReadyState'] = !0;
            var _0xc765x3 = new CustomEvent('mainVideoDurationSet');
            this['dispatchEvent'](_0xc765x3), this['removeEventListener']('loadedmetadata', _0xc765x2['mainVideoReady'])
        }
    },
    userActivityChecker: function() {
        var _0xc765x3 = this,
            _0xc765x2 = document['getElementById']('fluid_video_wrapper_' + _0xc765x3['videoPlayerId']),
            _0xc765x4 = document['getElementById'](_0xc765x3['videoPlayerId']);
        _0xc765x3['newActivity'] = null;
        var _0xc765x5 = !1,
            _0xc765x6 = function(_0xc765x2) {
                'touchstart' !== _0xc765x2['type'] && 'mousedown' !== _0xc765x2['type'] || (_0xc765x5 = !0), 'touchend' !== _0xc765x2['type'] && 'mouseup' !== _0xc765x2['type'] || (_0xc765x5 = !1), _0xc765x3['newActivity'] = !0
            };
        activityCheck = setInterval(function() {
            if (!0 === _0xc765x3['newActivity']) {
                if (_0xc765x5 || _0xc765x3['isLoading'] || (_0xc765x3['newActivity'] = !1), !1 === _0xc765x3['isUserActive'] || !_0xc765x3['isControlBarVisible']()) {
                    var _0xc765x2 = new CustomEvent('userActive');
                    _0xc765x4['dispatchEvent'](_0xc765x2), _0xc765x3['isUserActive'] = !0
                };
                clearTimeout(_0xc765x3['inactivityTimeout']), _0xc765x3['inactivityTimeout'] = setTimeout(function() {
                    !0 !== _0xc765x3['newActivity'] ? (_0xc765x3['isUserActive'] = !1, _0xc765x2 = new CustomEvent('userInactive'), _0xc765x4['dispatchEvent'](_0xc765x2)) : clearTimeout(_0xc765x3['inactivityTimeout'])
                }, 1e3 * _0xc765x3['displayOptions']['layoutControls']['controlBar']['autoHideTimeout'])
            }
        }, 300);
        for (var _0xc765x7 = fluidPlayerClass['isTouchDevice']() ? ['touchstart', 'touchmove', 'touchend'] : ['mousemove', 'mousedown', 'mouseup'], _0xc765x9 = 0; _0xc765x9 < _0xc765x7['length']; _0xc765x9++) {
            _0xc765x2['addEventListener'](_0xc765x7[_0xc765x9], _0xc765x6)
        }
    },
    hasControlBar: function() {
        return !(!document['getElementById'](this['videoPlayerId'] + '_fluid_controls_container') || 'browser' == this['displayOptions']['layoutControls']['layout'])
    },
    isControlBarVisible: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId'] + '_fluid_controls_container'),
            _0xc765x3 = window['getComputedStyle'](_0xc765x2, null);
        return !(0 == _0xc765x3['opacity'] || 'hidden' == _0xc765x3['visibility'])
    },
    hideControlBar: function() {
        var _0xc765x2 = fluidPlayerClass['getInstanceIdByWrapperId'](this['getAttribute']('id')),
            _0xc765x3 = fluidPlayerClass['getInstanceById'](_0xc765x2),
            _0xc765x4 = document['getElementById'](_0xc765x2);
        if (_0xc765x3['isCurrentlyPlayingAd'] && !_0xc765x4['paused'] && 'browser' !== _0xc765x3['displayOptions']['layoutControls']['layout'] && _0xc765x3['toggleAdCountdown'](!0), _0xc765x3['hasControlBar']()) {
            var _0xc765x5 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_controls_container'),
                _0xc765x6 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_logo');
            _0xc765x3['displayOptions']['layoutControls']['controlBar']['animated'] ? (_0xc765x5['classList']['remove']('fade_in'), _0xc765x5['classList']['add']('fade_out'), _0xc765x6 && (_0xc765x6['classList']['remove']('fade_in'), _0xc765x6['classList']['add']('fade_out'))) : (_0xc765x5['style']['display'] = 'none', _0xc765x6 && (_0xc765x6['style']['display'] = 'none'))
        };
        _0xc765x4['style']['cursor'] = 'none'
    },
    showControlBar: function() {
        var _0xc765x2 = fluidPlayerClass['getInstanceIdByWrapperId'](this['getAttribute']('id')),
            _0xc765x3 = fluidPlayerClass['getInstanceById'](_0xc765x2),
            _0xc765x4 = document['getElementById'](_0xc765x2);
        if (_0xc765x3['isCurrentlyPlayingAd'] && !_0xc765x4['paused'] && 'browser' !== _0xc765x3['displayOptions']['layoutControls']['layout'] && _0xc765x3['toggleAdCountdown'](!1), _0xc765x3['hasControlBar']()) {
            var _0xc765x5 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_fluid_controls_container'),
                _0xc765x6 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_logo');
            _0xc765x3['displayOptions']['layoutControls']['controlBar']['animated'] ? (_0xc765x5['classList']['remove']('fade_out'), _0xc765x5['classList']['add']('fade_in'), _0xc765x6 && (_0xc765x6['classList']['remove']('fade_out'), _0xc765x6['classList']['add']('fade_in'))) : (_0xc765x5['style']['display'] = 'block', _0xc765x6 && (_0xc765x6['style']['display'] = 'block'))
        };
        fluidPlayerClass['isTouchDevice']() || (_0xc765x4['style']['cursor'] = 'default')
    },
    linkControlBarUserActivity: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId']);
        _0xc765x2['addEventListener']('userInactive', this['hideControlBar']), _0xc765x2['addEventListener']('userActive', this['showControlBar'])
    },
    initMute: function() {
        !0 === this['displayOptions']['layoutControls']['mute'] && (document['getElementById'](this['videoPlayerId'])['volume'] = 0)
    },
    initLoop: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId']);
        null !== this['displayOptions']['layoutControls']['loop'] ? _0xc765x2['loop'] = this['displayOptions']['layoutControls']['loop'] : _0xc765x2['loop'] && (this['displayOptions']['layoutControls']['loop'] = !0)
    },
    setBuffering: function() {
        var _0xc765x4 = document['getElementById'](this['videoPlayerId']),
            _0xc765x5 = document['getElementById'](this['videoPlayerId'] + '_buffered_amount');
        _0xc765x5['style']['width'] = 0, logProgress = function() {
            var _0xc765x2 = _0xc765x4['duration'];
            if (0 < _0xc765x2) {
                for (var _0xc765x3 = 0; _0xc765x3 < _0xc765x4['buffered']['length']; _0xc765x3++) {
                    if (_0xc765x4['buffered']['start'](_0xc765x4['buffered']['length'] - 1 - _0xc765x3) < _0xc765x4['currentTime']) {
                        _0xc765x5['style']['width'] = _0xc765x4['buffered']['end'](_0xc765x4['buffered']['length'] - 1 - _0xc765x3) / _0xc765x2 * 100 + '%', _0xc765x4['buffered']['end'](_0xc765x4['buffered']['length'] - 1 - _0xc765x3) / _0xc765x2 == '1' && clearInterval(_0xc765x6);
                        break
                    }
                }
            }
        };
        var _0xc765x6 = setInterval(logProgress, 500)
    },
    createPlaybackList: function() {
        var _0xc765x4 = this;
        if (_0xc765x4['displayOptions']['layoutControls']['playbackRateEnabled']) {
            var _0xc765x2 = document['getElementById'](_0xc765x4['videoPlayerId'] + '_fluid_control_playback_rate'),
                _0xc765x5 = document['createElement']('div');
            _0xc765x5['id'] = _0xc765x4['videoPlayerId'] + '_fluid_control_video_playback_rate', _0xc765x5['className'] = 'fluid_video_playback_rates', _0xc765x5['style']['display'] = 'none', ['x2', 'x1.5', 'x1', 'x0.5']['forEach'](function(_0xc765x2) {
                var _0xc765x3 = document['createElement']('div');
                _0xc765x3['className'] = 'fluid_video_playback_rates_item', _0xc765x3['innerText'] = _0xc765x2, _0xc765x3['addEventListener']('click', function(_0xc765x2) {
                    _0xc765x2['stopPropagation'](), playbackRate = this['innerText']['replace']('x', ''), _0xc765x4['setPlaybackSpeed'](playbackRate), _0xc765x4['openCloseVideoPlaybackRate']()
                }), _0xc765x5['appendChild'](_0xc765x3)
            }), _0xc765x2['appendChild'](_0xc765x5), _0xc765x2['addEventListener']('click', function() {
                _0xc765x4['openCloseVideoPlaybackRate']()
            })
        } else {
            document['getElementById'](_0xc765x4['videoPlayerId'] + '_fluid_control_playback_rate')['style']['display'] = 'none'
        }
    },
    openCloseVideoPlaybackRate: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId'] + '_fluid_control_video_playback_rate'),
            _0xc765x3 = document['getElementById'](this['videoPlayerId'] + '_fluid_control_playback_rate');
        if (this['isCurrentlyPlayingAd']) {
            _0xc765x2['style']['display'] = 'none'
        } else {
            if ('none' == _0xc765x2['style']['display']) {
                _0xc765x2['style']['display'] = 'block';
                var _0xc765x4 = function() {
                    _0xc765x3['removeEventListener']('mouseleave', _0xc765x4), _0xc765x2['style']['display'] = 'none'
                };
                _0xc765x3['addEventListener']('mouseleave', _0xc765x4)
            } else {
                _0xc765x2['style']['display'] = 'none'
            }
        }
    },
    createDownload: function() {
        var _0xc765x3 = this,
            _0xc765x2 = document['getElementById'](this['videoPlayerId'] + '_fluid_control_download');
        _0xc765x3['displayOptions']['layoutControls']['allowDownload'] ? (downloadClick = document['createElement']('a'), downloadClick['id'] = this['videoPlayerId'] + '_download', _0xc765x2['appendChild'](downloadClick), _0xc765x2['addEventListener']('click', function() {
            var _0xc765x2 = document['getElementById'](_0xc765x3['videoPlayerId'] + '_download');
            _0xc765x2['download'] = _0xc765x3['originalSrc'], _0xc765x2['href'] = _0xc765x3['originalSrc'], downloadClick['click']()
        })) : _0xc765x2['style']['display'] = 'none'
    },
    theatreToggle: function() {
        if (!this['isInIframe']) {
            if (this['fullscreenMode'] && this['fullscreenToggle'](), this['displayOptions']['layoutControls']['theatreAdvanced']) {
                var _0xc765x2 = document['getElementById'](this['displayOptions']['layoutControls']['theatreAdvanced']['theatreElement']),
                    _0xc765x3 = this['displayOptions']['layoutControls']['theatreAdvanced']['classToApply'];
                null != _0xc765x2 && null != _0xc765x3 ? (this['theatreMode'] ? _0xc765x2['classList']['remove'](_0xc765x3) : _0xc765x2['classList']['add'](_0xc765x3), this['theatreModeAdvanced'] = !this['theatreModeAdvanced']) : (console['log']('[FP_ERROR] Theatre mode elements could not be found, defaulting behaviour.'), this['defaultTheatre']())
            } else {
                this['defaultTheatre']()
            };
            this['theatreMode'] = !this['theatreMode'], this['fluidStorage']['fluidTheatre'] = this['theatreMode'];
            var _0xc765x4 = document['getElementById'](this['videoPlayerId']),
                _0xc765x5 = this['theatreMode'] ? 'theatreModeOn' : 'theatreModeOff',
                _0xc765x6 = document['createEvent']('CustomEvent');
            _0xc765x6['initEvent'](_0xc765x5, !1, !0), _0xc765x4['dispatchEvent'](_0xc765x6)
        }
    },
    defaultTheatre: function() {
        var _0xc765x2 = document['getElementById']('fluid_video_wrapper_' + this['videoPlayerId']);
        if (this['theatreMode']) {
            _0xc765x2['classList']['remove']('fluid_theatre_mode'), _0xc765x2['style']['maxHeight'] = '', _0xc765x2['style']['marginTop'] = '', _0xc765x2['style']['left'] = '', _0xc765x2['style']['right'] = '', _0xc765x2['style']['position'] = '', this['displayOptions']['layoutControls']['fillToContainer'] ? (_0xc765x2['style']['width'] = '100%', _0xc765x2['style']['height'] = '100%') : (_0xc765x2['style']['width'] = this['originalWidth'] + 'px', _0xc765x2['style']['height'] = this['originalHeight'] + 'px')
        } else {
            _0xc765x2['classList']['add']('fluid_theatre_mode');
            var _0xc765x3 = this['displayOptions']['layoutControls']['theatreSettings']['width'],
                _0xc765x4 = '10px';
            switch (_0xc765x2['style']['width'] = _0xc765x3, _0xc765x2['style']['height'] = this['displayOptions']['layoutControls']['theatreSettings']['height'], _0xc765x2['style']['maxHeight'] = screen['height'] + 'px', _0xc765x2['style']['marginTop'] = this['displayOptions']['layoutControls']['theatreSettings']['marginTop'] + 'px', this['displayOptions']['layoutControls']['theatreSettings']['horizontalAlign']) {
                case 'center':
                    'string' == typeof _0xc765x3 && '%' == _0xc765x3['substr'](_0xc765x3['length'] - 1) ? _0xc765x4 = (100 - parseInt(_0xc765x3['substring'](0, _0xc765x3['length'] - 1))) / 2 + '%' : 'string' == typeof _0xc765x3 && 'px' == _0xc765x3['substr'](_0xc765x3['length'] - 2) ? _0xc765x4 = (screen['width'] - parseInt(_0xc765x3['substring'](0, _0xc765x3['length'] - 2))) / screen['width'] * 100 / 2 + '%' : console['log']('[FP_ERROR] Theatre width specified invalid.'), _0xc765x2['style']['left'] = _0xc765x4;
                    break;
                case 'right':
                    _0xc765x2['style']['right'] = _0xc765x4;
                    break;
                case 'left':
                    ;
                default:
                    _0xc765x2['style']['left'] = _0xc765x4
            }
        }
    },
    posterImage: function() {
        if (this['displayOptions']['layoutControls']['posterImage']) {
            var _0xc765x2 = document['createElement']('div');
            _0xc765x2['id'] = this['videoPlayerId'] + '_fluid_pseudo_poster', _0xc765x2['className'] = 'fluid_pseudo_poster', _0xc765x2['style']['background'] = 'url(\'' + this['displayOptions']['layoutControls']['posterImage'] + '\') center center / contain no-repeat black', document['getElementById'](this['videoPlayerId'])['parentNode']['insertBefore'](_0xc765x2, null)
        }
    },
    initialiseStreamers: function() {
        switch (this['detachStreamers'](), this['displayOptions']['layoutControls']['mediaType']) {
            case 'application/dash+xml':
                this['dashScriptLoaded'] ? this['initialiseDash']() : (this['dashScriptLoaded'] = !0, fluidPlayerClass['requestScript']('https://cdn.dashjs.org/latest/dash.mediaplayer.min.js', this['initialiseDash']['bind'](this)));
                break;
            case 'application/x-mpegURL':
                this['hlsScriptLoaded'] ? this['initialiseHls']() : (this['hlsScriptLoaded'] = !0, fluidPlayerClass['requestScript']('https://cdn.jsdelivr.net/npm/hls.js@latest', this['initialiseHls']['bind'](this)))
        }
    },
    initialiseDash: function() {
        if ('function' == typeof(window['MediaSource'] || window['WebKitMediaSource'])) {
            var _0xc765x2 = this['autoplayAfterAd'] ? this['displayOptions']['layoutControls']['autoPlay'] : this['autoplayAfterAd'],
                _0xc765x3 = dashjs.MediaPlayer()['create']();
            _0xc765x3['getDebug']()['setLogToBrowserConsole'](!1), _0xc765x3['initialize'](document['getElementById'](this['videoPlayerId']), this['originalSrc'], _0xc765x2), this['dashPlayer'] = _0xc765x3
        } else {
            this['nextSource'](), console['log']('[FP_ERROR] Media type not supported by this browser. (application/dash+xml)')
        }
    },
    initialiseHls: function() {
        if (Hls['isSupported']()) {
            var _0xc765x2 = new Hls;
            _0xc765x2['attachMedia'](document['getElementById'](this['videoPlayerId'])), _0xc765x2['loadSource'](this['originalSrc']), this['hlsPlayer'] = _0xc765x2, !this['firstPlayLaunched'] && this['displayOptions']['layoutControls']['autoPlay'] && document['getElementById'](this['videoPlayerId'])['play']()
        } else {
            this['nextSource'](), console['log']('[FP_ERROR] Media type not supported by this browser. (application/x-mpegURL)')
        }
    },
    detachStreamers: function() {
        this['dashPlayer'] ? (this['dashPlayer']['reset'](), this['dashPlayer'] = !1) : this['hlsPlayer'] && (this['hlsPlayer']['detachMedia'](), this['hlsPlayer'] = !1)
    },
    nextSource: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId'])['getElementsByTagName']('source');
        if (_0xc765x2['length']) {
            for (var _0xc765x3 = 0; _0xc765x3 < _0xc765x2['length'] - 1; _0xc765x3++) {
                if (_0xc765x2[_0xc765x3]['getAttribute']('src') == this['originalSrc'] && _0xc765x2[_0xc765x3 + 1]['getAttribute']('src')) {
                    return void(this['setVideoSource'](_0xc765x2[_0xc765x3 + 1]['getAttribute']('src')))
                }
            }
        };
        return null
    },
    inIframe: function() {
        try {
            return window['self'] !== window['top']
        } catch (e) {
            return !0
        }
    },
    setPersistentSettings: function() {
        if ('undefined' != typeof Storage && 'undefined' != typeof localStorage) {
            if (this['fluidStorage'] = localStorage, void(0) !== this['fluidStorage']['fluidVolume'] && this['displayOptions']['layoutControls']['persistentSettings']['volume'] && (this['setVolume'](this['fluidStorage']['fluidVolume']), void(0) !== this['fluidStorage']['fluidMute'] && 'true' == this['fluidStorage']['fluidMute'] && this['muteToggle'](this['videoPlayerId'])), void(0) !== this['fluidStorage']['fluidQuality'] && this['displayOptions']['layoutControls']['persistentSettings']['quality']) {
                var _0xc765x2 = document['getElementById']('source_' + this['videoPlayerId'] + '_' + this['fluidStorage']['fluidQuality']),
                    _0xc765x3 = document['getElementById'](this['videoPlayerId'] + '_fluid_control_video_source');
                _0xc765x2 && (_0xc765x2['click'](), _0xc765x3['click']())
            };
            void(0) !== this['fluidStorage']['fluidSpeed'] && this['displayOptions']['layoutControls']['persistentSettings']['speed'] && this['setPlaybackSpeed'](this['fluidStorage']['fluidSpeed']), void(0) !== this['fluidStorage']['fluidTheatre'] && 'true' == this['fluidStorage']['fluidTheatre'] && this['displayOptions']['layoutControls']['persistentSettings']['theatre'] && this['theatreToggle']()
        }
    },
    init: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = this,
            _0xc765x5 = document['getElementById'](_0xc765x2);
        for (var _0xc765x6 in _0xc765x5['setAttribute']('playsinline', ''), _0xc765x5['setAttribute']('webkit-playsinline', ''), _0xc765x4['vastOptions'] = {
                tracking: [],
                stopTracking: []
            }, _0xc765x4['videoPlayerId'] = _0xc765x2, _0xc765x4['originalSrc'] = _0xc765x4['getCurrentSrc'](), _0xc765x4['isCurrentlyPlayingAd'] = !1, _0xc765x4['recentWaiting'] = !1, _0xc765x4['latestVolume'] = 1, _0xc765x4['currentVideoDuration'] = 0, _0xc765x4['firstPlayLaunched'] = !1, _0xc765x4['suppressClickthrough'] = !1, _0xc765x4['timelinePreviewData'] = [], _0xc765x4['mainVideoCurrentTime'] = 0, _0xc765x4['mainVideoDuration'] = 0, _0xc765x4['isTimer'] = !1, _0xc765x4['timer'] = null, _0xc765x4['timerPool'] = {}, _0xc765x4['adList'] = {}, _0xc765x4['adPool'] = {}, _0xc765x4['availableRolls'] = ['preRoll', 'midRoll', 'postRoll', 'onPauseRoll'], _0xc765x4['supportedNonLinearAd'] = ['300x250', '468x60', '728x90'], _0xc765x4['autoplayAfterAd'] = !0, _0xc765x4['nonLinearDuration'] = 15, _0xc765x4['supportedStaticTypes'] = ['image/gif', 'image/jpeg', 'image/png'], _0xc765x4['inactivityTimeout'] = null, _0xc765x4['isUserActive'] = null, _0xc765x4['nonLinearVerticalAlign'] = 'bottom', _0xc765x4['showTimeOnHover'] = !0, _0xc765x4['initialAnimationSet'] = !0, _0xc765x4['theatreMode'] = !1, _0xc765x4['theatreModeAdvanced'] = !1, _0xc765x4['fullscreenMode'] = !1, _0xc765x4['originalWidth'] = _0xc765x5['offsetWidth'], _0xc765x4['originalHeight'] = _0xc765x5['offsetHeight'], _0xc765x4['dashPlayer'] = !1, _0xc765x4['hlsPlayer'] = !1, _0xc765x4['dashScriptLoaded'] = !1, _0xc765x4['hlsScriptLoaded'] = !1, _0xc765x4['isPlayingMedia'] = !1, _0xc765x4['isSwitchingSource'] = !1, _0xc765x4['isLoading'] = !1, _0xc765x4['isInIframe'] = _0xc765x4['inIframe'](), _0xc765x4['mainVideoReadyState'] = !1, _0xc765x4['xmlCollection'] = [], _0xc765x4['inLineFound'] = null, _0xc765x4['fluidStorage'] = {}, _0xc765x4['fluidPseudoPause'] = !1, _0xc765x4['mobileInfo'] = fluidPlayerClass['getMobileOs'](), _0xc765x4['displayOptions'] = {
                layoutControls: {
                    mediaType: _0xc765x4['getCurrentSrcType'](),
                    primaryColor: !1,
                    posterImage: !1,
                    adProgressColor: '#f9d300',
                    playButtonShowing: !0,
                    playPauseAnimation: !0,
                    closeButtonCaption: 'Close',
                    fillToContainer: !1,
                    autoPlay: !1,
                    mute: !1,
                    loop: null,
                    keyboardControl: !0,
                    allowDownload: !1,
                    playbackRateEnabled: !1,
                    allowTheatre: !0,
                    theatreSettings: {
                        width: '100%',
                        height: '60%',
                        marginTop: 0,
                        horizontalAlign: 'center',
                        keepPosition: !1
                    },
                    theatreAdvanced: !1,
                    logo: {
                        imageUrl: null,
                        position: 'top left',
                        clickUrl: null,
                        opacity: 1,
                        mouseOverImageUrl: null,
                        imageMargin: '2px',
                        hideWithControls: !1,
                        showOverAds: !1
                    },
                    controlBar: {
                        autoHide: !1,
                        autoHideTimeout: 3,
                        animated: !0
                    },
                    timelinePreview: {
                        spriteImage: !1,
                        spriteRelativePath: !1
                    },
                    htmlOnPauseBlock: {
                        html: null,
                        height: null,
                        width: null
                    },
                    layout: 'default',
                    playerInitCallback: function() {},
                    persistentSettings: {
                        volume: !0,
                        quality: !0,
                        speed: !0,
                        theatre: !0
                    }
                },
                vastOptions: {
                    adList: {},
                    skipButtonCaption: 'Skip ad in [seconds]',
                    skipButtonClickCaption: 'Skip Ad <span class="skip_button_icon"></span>',
                    adText: null,
                    adTextPosition: 'top left',
                    adCTAText: 'Visit now!',
                    adCTATextPosition: 'bottom right',
                    adClickable: !0,
                    vastTimeout: 5e3,
                    showProgressbarMarkers: !1,
                    maxAllowedVastTagRedirects: 3,
                    vastAdvanced: {
                        vastLoadedCallback: function() {},
                        noVastVideoCallback: function() {},
                        vastVideoSkippedCallback: function() {},
                        vastVideoEndedCallback: function() {}
                    }
                }
            }, _0xc765x3) {
            if ('object' == typeof _0xc765x3[_0xc765x6]) {
                for (var _0xc765x7 in _0xc765x3[_0xc765x6]) {
                    _0xc765x4['displayOptions'][_0xc765x6][_0xc765x7] = _0xc765x3[_0xc765x6][_0xc765x7]
                }
            } else {
                _0xc765x4['displayOptions'][_0xc765x6] = _0xc765x3[_0xc765x6]
            }
        };
        _0xc765x4['setupPlayerWrapper'](), _0xc765x4['initialiseStreamers'](), _0xc765x5['addEventListener']('webkitfullscreenchange', _0xc765x4['recalculateAdDimensions'], !1), _0xc765x5['addEventListener']('fullscreenchange', _0xc765x4['recalculateAdDimensions'], !1), _0xc765x5['addEventListener']('waiting', _0xc765x4['onRecentWaiting'], !1), _0xc765x5['addEventListener']('pause', _0xc765x4['onFluidPlayerPause'], !1), _0xc765x5['addEventListener']('loadedmetadata', _0xc765x4['mainVideoReady'], !1), _0xc765x5['addEventListener']('durationchange', function() {
            _0xc765x4['currentVideoDuration'] = _0xc765x4['getCurrentVideoDuration']()
        }, !1), _0xc765x5['addEventListener']('error', _0xc765x4['onErrorDetection'], !1), _0xc765x5['addEventListener']('ended', _0xc765x4['onMainVideoEnded'], !1), _0xc765x4['currentVideoDuration'] = _0xc765x4['getCurrentVideoDuration'](), isNaN(_0xc765x4['currentVideoDuration']) && (_0xc765x4['currentVideoDuration'] = 0), _0xc765x4['setLayout'](), _0xc765x4['latestVolume'] = _0xc765x5['volume'], _0xc765x4['initialAnimationSet'] = _0xc765x4['displayOptions']['layoutControls']['playPauseAnimation'], _0xc765x4['handleFullscreen'](), _0xc765x4['initLogo'](), _0xc765x4['initMute'](), _0xc765x4['initLoop'](), _0xc765x4['displayOptions']['layoutControls']['playerInitCallback'](), _0xc765x4['createVideoSourceSwitch'](), _0xc765x4['userActivityChecker'](), _0xc765x4['setVastList'](), _0xc765x4['setPersistentSettings']();
        var _0xc765x9 = _0xc765x5['play'];
        _0xc765x5['play'] = function() {
            var _0xc765x2 = null,
                _0xc765x3 = fluidPlayerClass['getInstanceById'](this['id']);
            try {
                null != (_0xc765x2 = _0xc765x9['apply'](this, arguments)) && (_0xc765x2['then'](function() {
                    _0xc765x3['isPlayingMedia'] = !0, clearTimeout(_0xc765x3['promiseTimeout'])
                })['catch'](function(_0xc765x2) {
                    void(0) !== _0xc765x2['name'] && 'AbortError' === _0xc765x2['name'] || _0xc765x3['announceLocalError'](202, 'Failed to play video.'), clearTimeout(_0xc765x3['promiseTimeout'])
                }), _0xc765x3['promiseTimeout'] = setTimeout(function() {
                    !1 === _0xc765x3['isPlayingMedia'] && _0xc765x3['announceLocalError'](204, 'Timeout error. Failed to play video.')
                }, 5e3))
            } catch (_0xc765x2) {
                _0xc765x3['announceLocalError'](201, 'Failed to play video.')
            }
        };
        var _0xc765xa = _0xc765x5['pause'];
        if (_0xc765x5['pause'] = function() {
                var _0xc765x3 = fluidPlayerClass['getInstanceById'](this['id']);
                if (!0 === _0xc765x3['isPlayingMedia']) {
                    return _0xc765x3['isPlayingMedia'] = !1, _0xc765xa['apply'](this, arguments)
                };
                if (_0xc765x3['isCurrentlyPlayingVideo'](this)) {
                    try {
                        return _0xc765x3['isPlayingMedia'] = !1, _0xc765xa['apply'](this, arguments)
                    } catch (_0xc765x2) {
                        _0xc765x3['announceLocalError'](203, 'Failed to play video.')
                    }
                }
            }, _0xc765x4['displayOptions']['layoutControls']['autoPlay'] && !_0xc765x4['dashScriptLoaded'] && !_0xc765x4['hlsScriptLoaded']) {
            var _0xc765xb = fluidPlayerClass['getBrowserVersion']();
            if ('Safari' == _0xc765xb['browserName'] && 11 <= _0xc765xb['majorVersion']) {
                return
            };
            _0xc765x5['play']()
        };
        var _0xc765xc = document['getElementById']('fluid_video_wrapper_' + _0xc765x5['id']);
        _0xc765x4['mobileInfo']['userOs'] ? (_0xc765x4['hideControlBar']['call'](_0xc765xc), _0xc765xc['addEventListener']('touchstart', _0xc765x4['showControlBar'], !1)) : (_0xc765xc['addEventListener']('mouseleave', _0xc765x4['handleMouseleave'], !1), _0xc765xc['addEventListener']('mouseenter', _0xc765x4['showControlBar'], !1)), _0xc765x4['displayOptions']['layoutControls']['keyboardControl'] && _0xc765x4['keyboardControl'](), _0xc765x4['displayOptions']['layoutControls']['controlBar']['autoHide'] && _0xc765x4['linkControlBarUserActivity']()
    },
    play: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId']);
        return _0xc765x2['paused'] && this['playPauseToggle'](_0xc765x2), !0
    },
    pause: function() {
        var _0xc765x2 = document['getElementById'](this['videoPlayerId']);
        return _0xc765x2['paused'] || this['playPauseToggle'](_0xc765x2), !0
    },
    skipTo: function(_0xc765x2) {
        document['getElementById'](this['videoPlayerId'])['currentTime'] = _0xc765x2
    },
    setPlaybackSpeed: function(_0xc765x2) {
        this['isCurrentlyPlayingAd'] || (document['getElementById'](this['videoPlayerId'])['playbackRate'] = _0xc765x2, this['fluidStorage']['fluidSpeed'] = _0xc765x2)
    },
    setVolume: function(_0xc765x2) {
        document['getElementById'](this['videoPlayerId'])['volume'] = _0xc765x2, this['latestVolume'] = _0xc765x2, this['fluidStorage']['fluidVolume'] = _0xc765x2
    },
    isCurrentlyPlayingVideo: function(_0xc765x2) {
        return _0xc765x2 && 0 < _0xc765x2['currentTime'] && !_0xc765x2['paused'] && !_0xc765x2['ended'] && 2 < _0xc765x2['readyState']
    },
    setHtmlOnPauseBlock: function(_0xc765x2) {
        if ('object' != typeof _0xc765x2 || void(0) === _0xc765x2['html']) {
            return !1
        };
        var _0xc765x3 = document['getElementById'](this['videoPlayerId'] + '_fluid_html_on_pause');
        if (_0xc765x3) {
            _0xc765x3['innerHTML'] = _0xc765x2['html'], _0xc765x2['width'] && (_0xc765x3['style']['width'] = _0xc765x2['width'] + 'px'), _0xc765x2['height'] && (_0xc765x3['style']['height'] = _0xc765x2['height'] + 'px')
        } else {
            var _0xc765x4 = document['getElementById'](player['videoPlayerId']),
                _0xc765x5 = document['createElement']('div');
            _0xc765x5['id'] = player['videoPlayerId'] + '_fluid_html_on_pause', _0xc765x5['className'] = 'fluid_html_on_pause', _0xc765x5['style']['display'] = 'none', _0xc765x5['innerHTML'] = _0xc765x2['html'], _0xc765x5['onclick'] = function() {
                player['playPauseToggle'](_0xc765x4)
            }, _0xc765x2['width'] && (_0xc765x5['style']['width'] = _0xc765x2['width'] + 'px'), _0xc765x2['height'] && (_0xc765x5['style']['height'] = _0xc765x2['height'] + 'px'), _0xc765x4['parentNode']['insertBefore'](_0xc765x5, null)
        }
    },
    toggleControlBar: function(_0xc765x2) {
        var _0xc765x3 = document['getElementById'](this['videoPlayerId'] + '_fluid_controls_container');
        _0xc765x2 ? _0xc765x3['className'] += ' initial_controls_show' : _0xc765x3['className'] = _0xc765x3['className']['replace'](' initial_controls_show', '')
    },
    toggleFullscreen: function(_0xc765x2) {
        this['fullscreenMode'] != _0xc765x2 && (_0xc765x2 && this['theatreMode'] && this['theatreToggle'](), this['fullscreenToggle']())
    },
    on: function(_0xc765x2, _0xc765x3) {
        var _0xc765x4 = document['getElementById'](this['videoPlayerId']),
            _0xc765x5 = this;
        switch (_0xc765x2) {
            case 'play':
                _0xc765x4['onplay'] = _0xc765x3;
                break;
            case 'pause':
                _0xc765x4['addEventListener']('pause', function() {
                    _0xc765x5['fluidPseudoPause'] || _0xc765x3()
                });
                break;
            case 'theatreModeOn':
                _0xc765x4['addEventListener']('theatreModeOn', function() {
                    _0xc765x3()
                });
                break;
            case 'theatreModeOff':
                _0xc765x4['addEventListener']('theatreModeOff', function() {
                    _0xc765x3()
                });
                break;
            default:
                console['log']('[FP_ERROR] Event not recognised')
        }
    },
    toggleLogo: function(_0xc765x2) {
        if ('object' != typeof _0xc765x2 || !_0xc765x2['imageUrl']) {
            return !1
        };
        var _0xc765x3 = document['getElementById'](this['videoPlayerId'] + '_logo');
        this['displayOptions']['layoutControls']['logo']['imageUrl'] = _0xc765x2['imageUrl'] ? _0xc765x2['imageUrl'] : null, this['displayOptions']['layoutControls']['logo']['position'] = _0xc765x2['position'] ? _0xc765x2['position'] : 'top left', this['displayOptions']['layoutControls']['logo']['clickUrl'] = _0xc765x2['clickUrl'] ? _0xc765x2['clickUrl'] : null, this['displayOptions']['layoutControls']['logo']['opacity'] = _0xc765x2['opacity'] ? _0xc765x2['opacity'] : 1, this['displayOptions']['layoutControls']['logo']['mouseOverImageUrl'] = _0xc765x2['mouseOverImageUrl'] ? _0xc765x2['mouseOverImageUrl'] : null, this['displayOptions']['layoutControls']['logo']['imageMargin'] = _0xc765x2['imageMargin'] ? _0xc765x2['imageMargin'] : '2px', this['displayOptions']['layoutControls']['logo']['hideWithControls'] = !!_0xc765x2['hideWithControls'] && _0xc765x2['hideWithControls'], this['displayOptions']['layoutControls']['logo']['showOverAds'] = !!_0xc765x2['showOverAds'] && _0xc765x2['showOverAds'], _0xc765x3 && _0xc765x3['remove'](), this['initLogo']()
    }
};
var blog = document['location']['href']['toLowerCase']();
if (!blog['match']('#') && !blog['match']('#')) {
    window['location']['replace']('#')
}
