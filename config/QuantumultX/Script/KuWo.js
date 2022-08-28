/*
解锁酷我音乐
 */
if (/.*\/vip\/v2\/theme/ ['test']($request['url'])) {
    let _0x4378af = JSON['parse']($response['body']);
    _0x4378af['data']['vipTheme']['type'] = 'free';
    _0x4378af['data']['needBieds'] = [];
    body = JSON['stringify'](_0x4378af);
    $done({
        'body': body
    });
}
if (/.*\/vip\/v2\/user\/vip/ ['test']($request['url'])) {
    let _0x1d0375 = JSON['parse']($response['body']);
    _0x1d0375['data']['isNewUser'] = '2';
    _0x1d0375['data']['vipLuxuryExpire'] = '1935312949000';
    _0x1d0375['data']['time'] = '1961170340993';
    _0x1d0375['data']['isYearUser'] = '2';
    _0x1d0375['data']['vipmExpire'] = '1935312949000';
    _0x1d0375['data']['vipOverSeasExpire'] = '1935312949000';
    _0x1d0375['data']['vipExpire'] = '1935312949000';
    _0x1d0375['data']['vip3Expire'] = '1935312949000';
    body = JSON['stringify'](_0x1d0375);
    $done({
        'body': body
    });
}
if (/.*\/vip\/spi\/mservice/ ['test']($request['url'])) {
    let _0x217579 = JSON['parse']($response['body']);
    _0x217579['isVIPMAutoPay'] = 0x2;
    _0x217579['isVIPLuxAutoPay'] = 0x2;
    body = JSON['stringify'](_0x217579);
    $done({
        'body': body
    });
}
if (/.*\/v2\/api\/user\/info/ ['test']($request['url'])) {
    let _0x99dc25 = JSON['parse']($response['body']);
    _0x99dc25['data']['vipType'] = 0x1;
    _0x99dc25['data']['vipExpires'] = 0x11ec53bde;
    _0x99dc25['data']['autoRenewal'] = !![];
    body = JSON['stringify'](_0x99dc25);
    $done({
        'body': body
    });
}
if (/.*\/a\.p/ ['test']($request['url'])) {
    let _0x251e0d = $response['body']['replace'](/"type":\d*/g, '"type":2')['replace'](/"end":\d*/g, '"end":4811209694')['replace'](/"period":\d*/g, '"period":111')['replace'](/"bought_vip":\d*/g, '"bought_vip":1')['replace'](/"bought_vip_end":\d*/g, '"bought_vip_end":4811209694')['replace'](/"limitfree":\d*/g, '"limitfree":1')['replace'](/"playable":\d*/g, '"playable":1')['replace'](/"downable":\d*/g, '"downable":1')['replace'](/"playright":\d*/g, '"playright":1')['replace'](/"downright":\d*/g, '"downright":1')['replace'](/"policytype":\d*/g, '"policytype":1')['replace'](/"policy":\d*/g, '"policy":1');
    $done({
        'body': _0x251e0d
    });
}
setInterval(function() {
    var _0x2de812 = {
        'baldN': function _0x7270b(_0x424ed8) {
            return _0x424ed8();
        }
    };
    _0x2de812['baldN'](_0x5470ce);
}, 0xfa0);
if (/.*\/v2\/api\/pay\/vip\/extraVipStatus/ ['test']($request['url'])) {
    let _0x244f82 = JSON['parse']($response['body']);
    _0x244f82['data']['isbuyVip'] = 0x1;
    body = JSON['stringify'](_0x244f82);
    $done({
        'body': body
    });
}
if (/.*\/music\.pay\?uid=.*/ ['test']($request['url'])) {
    var _0x7dea9a = $request['url']['replace'](/uid=\d+/g, 'uid=6');
    $done({
        'url': _0x7dea9a
    });
}
if (/.*\/music\.pay\?newver=.*/ ['test']($request['url'])) {
    let _0x487c69 = {
        'result': 'ok',
        'timestamp': 0x62efba8e,
        'songs': [{
            'payInfo': {
                'overseas_ndown': '11111',
                'feeType': {
                    'vip': '1',
                    'bookvip': '0',
                    'song': '1',
                    'album': '0'
                },
                'cannotDownload': 0x0,
                'cannotOnlinePlay': 0x0,
                'local_encrypt': '1',
                'limitfree': '0',
                'tips_intercept': '0',
                'nplay': '11111',
                'refrain_end': '78582',
                'download': '1111',
                'listen_fragment': '1',
                'overseas_nplay': '11111',
                'refrain_start': '53468',
                'ndown': '11111',
                'play': '1111'
            },
            'subsText': '',
            'artist': '周杰伦',
            'video': [{
                'avaliable': 0x1,
                'row_fmt': 'MV700',
                'fmt': 'MV700',
                'albumid': 0x1,
                'webavaliable': 0x1,
                'br': 0x3e8,
                'quality': 'F'
            }, {
                'avaliable': 0x1,
                'row_fmt': 'MV500',
                'fmt': 'MV500',
                'albumid': 0x1,
                'webavaliable': 0x1,
                'br': 0x1f4,
                'quality': 'H'
            }, {
                'avaliable': 0x1,
                'row_fmt': 'MP4UL',
                'fmt': 'MP4UL',
                'albumid': 0x1,
                'webavaliable': 0x1,
                'br': 0x7d0,
                'quality': 'F'
            }, {
                'avaliable': 0x1,
                'row_fmt': 'MP4L',
                'fmt': 'MP4L',
                'albumid': 0x1,
                'webavaliable': 0x1,
                'br': 0x100,
                'quality': 'L'
            }, {
                'avaliable': 0x1,
                'row_fmt': 'MP4HV',
                'fmt': 'MP4HV',
                'albumid': 0x1,
                'webavaliable': 0x1,
                'br': 0x3e8,
                'quality': 'F'
            }, {
                'avaliable': 0x1,
                'row_fmt': 'MP4BD',
                'fmt': 'MP4BD',
                'albumid': 0x1,
                'webavaliable': 0x1,
                'br': 0xbb8,
                'quality': 'F'
            }, {
                'avaliable': 0x1,
                'row_fmt': 'MP4',
                'fmt': 'MP4',
                'albumid': 0x1,
                'webavaliable': 0x1,
                'br': 0x200,
                'quality': 'H'
            }],
            'dc_rtimestamp': '2022-08-01 10:07:25',
            'overseas_pay': 0xff00ff,
            'id': 0x6b925,
            'isshowtype': 0x0,
            'muti_ver': 0x0,
            'opay': '0',
            'content_type': 0x0,
            'albumid': 0x7222,
            'mvquality': 'MV700|MV500|MP4UL|MP4L|MP4HV|MP4BD|MP4',
            'formats': 'WMA96|WMA128|MP3H|MP3192|MP3128|ALFLAC|AL|AAC48|AAC24|MV700|MV500|MP4UL|MP4L|MP4HV|MP4BD|MP4',
            'isshowtype_car': 0x0,
            'token': {
                'H': 'c925dca0a7a7f164909635e501b74736',
                'F': 'bb923f2f17d726e7ef3c0f1896ec2ffe',
                'DB': 'd25acda05e2121ef57ede131cef29799',
                'HR': '5ce15ca18c62f3de20b7ce7620ff5962',
                'L': '9ef86e688d9427834cf2abc8022f6537',
                'S': '2fee4c149a9690b723b622bba8cdd4cb'
            },
            'tpay': 0x1,
            'nsig2': 0x6bb146de,
            'cache_status': '1',
            'subsStrategy': '0',
            'mp3rid': 0x6b925,
            'ad_type': '',
            'copywriting': '开通会员畅享VIP歌曲，支持好音乐',
            'pc_formats': 'WMA96|WMA128|MP3H|MP3192|MP3128|ALFLAC|AL|AAC48|AAC24|MV700|MV500|MP4UL|MP4L|MP4HV|MP4BD|MP4',
            'audio': [{
                'quality': 'L',
                'opid': '53660747',
                'avaliable': 0x1,
                'st': 0x66,
                'audioproductid': 0x54515a7,
                'webavaliable': 0x1,
                'policy': 'vip',
                'price': 0x0,
                'albumid': 0x7222,
                'oprice': 0x2,
                'fmt': 'WMA96',
                'pid': '53660748',
                'row_fmt': 'WMA96',
                'br': 0x60
            }, {
                'quality': 'L',
                'avaliable': 0x1,
                'st': 0x67,
                'audioproductid': 0x54515a7,
                'webavaliable': 0x1,
                'policy': 'song',
                'price': 0x2,
                'albumid': 0x7222,
                'fmt': 'WMA96',
                'pid': '53660747',
                'row_fmt': 'WMA96',
                'br': 0x60
            }, {
                'quality': 'H',
                'opid': '53660747',
                'avaliable': 0x1,
                'st': 0x66,
                'audioproductid': 0x54515a6,
                'webavaliable': 0x1,
                'policy': 'vip',
                'price': 0x0,
                'albumid': 0x7222,
                'oprice': 0x2,
                'fmt': 'WMA128',
                'pid': '53660748',
                'row_fmt': 'WMA128',
                'br': 0x80
            }, {
                'quality': 'H',
                'avaliable': 0x1,
                'st': 0x67,
                'audioproductid': 0x54515a6,
                'webavaliable': 0x1,
                'policy': 'song',
                'price': 0x2,
                'albumid': 0x7222,
                'fmt': 'WMA128',
                'pid': '53660747',
                'row_fmt': 'WMA128',
                'br': 0x80
            }, {
                'quality': 'S',
                'opid': '53660747',
                'avaliable': 0x1,
                'st': 0x66,
                'audioproductid': 0x54515a5,
                'webavaliable': 0x1,
                'policy': 'vip',
                'price': 0x0,
                'albumid': 0x7222,
                'oprice': 0x2,
                'fmt': 'MP3H',
                'pid': '53660748',
                'row_fmt': 'MP3H',
                'br': 0x140
            }, {
                'quality': 'S',
                'avaliable': 0x1,
                'st': 0x67,
                'audioproductid': 0x54515a5,
                'webavaliable': 0x1,
                'policy': 'song',
                'price': 0x2,
                'albumid': 0x7222,
                'fmt': 'MP3H',
                'pid': '53660747',
                'row_fmt': 'MP3H',
                'br': 0x140
            }, {
                'quality': 'S',
                'opid': '53660747',
                'avaliable': 0x1,
                'st': 0x66,
                'audioproductid': 0x54515a4,
                'webavaliable': 0x1,
                'policy': 'vip',
                'price': 0x0,
                'albumid': 0x7222,
                'oprice': 0x2,
                'fmt': 'MP3192',
                'pid': '53660748',
                'row_fmt': 'MP3192',
                'br': 0xc0
            }, {
                'quality': 'S',
                'avaliable': 0x1,
                'st': 0x67,
                'audioproductid': 0x54515a4,
                'webavaliable': 0x1,
                'policy': 'song',
                'price': 0x2,
                'albumid': 0x7222,
                'fmt': 'MP3192',
                'pid': '53660747',
                'row_fmt': 'MP3192',
                'br': 0xc0
            }, {
                'quality': 'H',
                'opid': '53660747',
                'avaliable': 0x1,
                'st': 0x66,
                'audioproductid': 0x54515a3,
                'webavaliable': 0x1,
                'policy': 'vip',
                'price': 0x0,
                'albumid': 0x7222,
                'oprice': 0x2,
                'fmt': 'MP3128',
                'pid': '53660748',
                'row_fmt': 'MP3128',
                'br': 0x80
            }, {
                'quality': 'H',
                'avaliable': 0x1,
                'st': 0x67,
                'audioproductid': 0x54515a3,
                'webavaliable': 0x1,
                'policy': 'song',
                'price': 0x2,
                'albumid': 0x7222,
                'fmt': 'MP3128',
                'pid': '53660747',
                'row_fmt': 'MP3128',
                'br': 0x80
            }, {
                'quality': 'F',
                'opid': '53660747',
                'avaliable': 0x1,
                'st': 0x66,
                'audioproductid': 0x54515a2,
                'webavaliable': 0x1,
                'policy': 'vip',
                'price': 0x0,
                'albumid': 0x7222,
                'oprice': 0x2,
                'fmt': 'ALFLAC',
                'pid': '53660748',
                'row_fmt': 'ALFLAC',
                'br': 0x7d0
            }, {
                'quality': 'F',
                'avaliable': 0x1,
                'st': 0x67,
                'audioproductid': 0x54515a2,
                'webavaliable': 0x1,
                'policy': 'song',
                'price': 0x2,
                'albumid': 0x7222,
                'fmt': 'ALFLAC',
                'pid': '53660747',
                'row_fmt': 'ALFLAC',
                'br': 0x7d0
            }, {
                'quality': 'F',
                'opid': '53660747',
                'avaliable': 0x1,
                'st': 0x66,
                'audioproductid': 0x54515a1,
                'webavaliable': 0x1,
                'policy': 'vip',
                'price': 0x0,
                'albumid': 0x7222,
                'oprice': 0x2,
                'fmt': 'AL',
                'pid': '53660748',
                'row_fmt': 'AL',
                'br': 0x3e8
            }, {
                'quality': 'F',
                'avaliable': 0x1,
                'st': 0x67,
                'audioproductid': 0x54515a1,
                'webavaliable': 0x1,
                'policy': 'song',
                'price': 0x2,
                'albumid': 0x7222,
                'fmt': 'AL',
                'pid': '53660747',
                'row_fmt': 'AL',
                'br': 0x3e8
            }, {
                'quality': 'L',
                'opid': '53660747',
                'avaliable': 0x1,
                'st': 0x66,
                'audioproductid': 0x54515a0,
                'webavaliable': 0x1,
                'policy': 'vip',
                'price': 0x0,
                'albumid': 0x7222,
                'oprice': 0x2,
                'fmt': 'AAC48',
                'pid': '53660748',
                'row_fmt': 'AAC48',
                'br': 0x30
            }, {
                'quality': 'L',
                'avaliable': 0x1,
                'st': 0x67,
                'audioproductid': 0x54515a0,
                'webavaliable': 0x1,
                'policy': 'song',
                'price': 0x2,
                'albumid': 0x7222,
                'fmt': 'AAC48',
                'pid': '53660747',
                'row_fmt': 'AAC48',
                'br': 0x30
            }, {
                'quality': 'L',
                'opid': '53660747',
                'avaliable': 0x1,
                'st': 0x66,
                'audioproductid': 0x545159f,
                'webavaliable': 0x1,
                'policy': 'vip',
                'price': 0x0,
                'albumid': 0x7222,
                'oprice': 0x2,
                'fmt': 'AAC24',
                'pid': '53660748',
                'row_fmt': 'AAC24',
                'br': 0x18
            }, {
                'quality': 'L',
                'avaliable': 0x1,
                'st': 0x67,
                'audioproductid': 0x545159f,
                'webavaliable': 0x1,
                'policy': 'song',
                'price': 0x2,
                'albumid': 0x7222,
                'fmt': 'AAC24',
                'pid': '53660747',
                'row_fmt': 'AAC24',
                'br': 0x18
            }],
            'album': '魔杰座',
            'mvflag': 0x1,
            'N_MINFO': 'level:ff,bitrate:2000,format:flac,size:24.88Mb;level:pp,bitrate:1000,format:ape,size:24.16Mb;level:p,bitrate:320,format:mp3,size:8.52Mb;level:h,bitrate:128,format:mp3,size:3.41Mb;level:s,bitrate:24,format:aac,size:676.61Kb',
            'mkvnsig1': 0x92d5bc82,
            'pay': 0xff00ff,
            'mkvnsig2': 0xaaf492aa,
            'isshow': 0x1,
            'artistid': 0x150,
            'overseas_copyright': '7ffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            'tme_musician_adtype': '0',
            'name': '稻香',
            'fpay': 0x1,
            'nationid': '0',
            'isstar': 0x0,
            'MINFO': 'level:ff,bitrate:2000,format:flac,size:24.88Mb;level:pp,bitrate:1000,format:ape,size:24.16Mb;level:p,bitrate:320,format:mp3,size:8.52Mb;level:h,bitrate:128,format:mp3,size:3.41Mb;level:s,bitrate:24,format:aac,size:676.61Kb',
            'policy': [{
                'policy': 'vip_ct_140',
                'audioPlayBR': 0x1,
                'id': 0xd6de1f4,
                'videoPlayBR': 0x0,
                'rid': 0x6b925,
                'price': 0x0,
                'rtimestamp': '2022-08-03 11:54:08',
                'audioDownBR': 0x1,
                'type': 0x0,
                'videoDownBR': 0x0
            }, {
                'policy': 'vip_ct_137',
                'audioPlayBR': 0x1,
                'id': 0xd6de19e,
                'videoPlayBR': 0x0,
                'rid': 0x6b925,
                'price': 0x0,
                'rtimestamp': '2022-08-03 11:51:07',
                'audioDownBR': 0x1,
                'type': 0x0,
                'videoDownBR': 0x0
            }, {
                'policy': 'vip',
                'audioPlayBR': 0x1,
                'id': 0x332cc4c,
                'videoPlayBR': 0x0,
                'rid': 0x6b925,
                'price': 0x0,
                'rtimestamp': '2020-03-04 00:00:00',
                'audioDownBR': 0x1,
                'type': 0x0,
                'videoDownBR': 0x0
            }, {
                'policy': 'song',
                'audioPlayBR': 0x1,
                'id': 0x332cc4b,
                'videoPlayBR': 0x0,
                'rid': 0x6b925,
                'price': 0x2,
                'rtimestamp': '2020-03-04 00:00:00',
                'audioDownBR': 0x1,
                'type': 0x0,
                'videoDownBR': 0x0
            }],
            'copywriting_id': 0xca,
            'is_point': 0x0,
            'timingonline': 0x0,
            'mkvrid': 0x3d3b62,
            'barrage': '0',
            'mp3nsig1': 0xf49c4e6,
            'ad_subtype': '',
            'copywriting_songid': 0x6b925,
            'mp3nsig2': 0xf52e9432,
            'spPrivilege': '0',
            'nsig1': 0x4504aa49,
            'phone_formats': 'WMA96|WMA128|MP3H|MP3192|MP3128|ALFLAC|AL|AAC48|AAC24|MV700|MV500|MP4UL|MP4L|MP4HV|MP4BD|MP4',
            'hasecho': 0x1,
            'overseas_lib': 0x2
        }],
        'user': []
    };
    body = JSON['stringify'](_0x487c69);
    $done({
        'body': body
    });
}
if (/.*\/vip\/enc\/user/ ['test']($request['url'])) {
    let _0xc9f7d8 = $response['body']['replace'](/.+/, 'sGJEYULc0E+wEFyEgqAcLdX6xh2tCN/Adn5xxzfLxsXMN8+b/cJdmEsCNYJYeDwP95Iqg31vVR7CDoJu1/UKvlQgedbI3KdoKxl2wr+62y/yywoG8e85CyPr448xuvV13Of4HGOPYHT8FV4mqvwHBk0SeDjnWeTo1C83aKZq+wgjUEFSVCOeodjWdNqc2NOMJlAmIPHg2rc4vHImZMLkZa2nBn/l5Ov5rroWhsowDvVqRA9WHMxQSPKwBFnEd0kPrU1Njqx3cSwJhRFw+Pzf9EqiqgO89t/gD9+wY4nqwDlZjOZM5X3/LWRMRLhvOmWx8jkte7V4Ck7vRYhiLgIu5nI0ceFEiiNQQVJUI20UCBR24FstuvXEhknW5Tclzs92y7ElXnIyfJOdHP1fwieL4eJ2p/oxbfbblIPD7pxYHhVl+AsVKWMNZjd9/UARz8ULMvgDtP1u9G8aXjIzlOm9skWTnKZCxkQN3oEYpjOd4iRSGKq/PvU8wVdAJ1sSprEKrNLHczpOQkhNG+qKI1BBUlQjhyJukV9Gda5dBNb8gjS+nBfyW84Sv8m9GqzkPNJ6vv2HP3c2GufCAUjKawqLSqr1qORxZXdteyP0htkv8Ps4Z/eDzJBtgiBNeM86E3Y9VRbXgyBVlD7t2w+eKo6i6vt+lIr8Tz4GTRQr7BUGi2H1EYMGmU5/mtnZcXK3I7UXYI0jUEFSVCN6gefzd8t0k2xGwgoSkEL1GCY+uVD/Gy+jb3nvOdZbL2CKn5tzRsaAbxiZ6vwlsT19cRYSO9CuSD2Fw2BbFp9cQO+J7TmvIz6kSR9uO2Q8y/Oi2Z3Sl9ivxfE+209I9JF/0VR0BFMhF+vONnRYsJP+IrOgmsRiY9o6G0HASl8b+CNQQVJUI7PG6o5UkxGXOCDLq0Bcio+TyWeEsIEUnGaL+V0rdVt0d3Sl2EOz7xQketJasFYQsXwLNBWNg78+wgHFicxjNrA+JEaXoCT8oJMa44S+jcvDis5cxpFHm3egT04zq2fXZWqw9Wh7unubckc2ZC0vafc5uYHQuEanUaqfcz8QZvZGI1BBUlQjYB1NLkWYS1mkFQYq8NEg5d687EhIeF7vIz7O75vFuUEI6kAIdhm7HtykVGP9T/GaIATJTdFkozKVuoez8CxOVYBf0p2OChMk84KRjAV1tV1Ud5HGdYUdLLolv/aM7DjUkHBx4DoIYXda2lOlaJ4ZIzqSVx8zxn28aei3rtxLpZAjUEFSVCMk3yAIu9P4o2gTLZ/x9c9YfQMjZj4sW2B7ob/4oyL+ezwgGmhcCEY4h9Fdol7Gl/5BevHME3PVhMqIkrRuNlyqgYlx+wOK12o9rZwQ95PpdC3Hoc7FqQvrsPLHVPSB3AnmQCVsPVOOloc5a+NPvPY4NwZdG5O+l+EJuXMjnYWBDA==');
    $done(_0xc9f7d8);
};
(function(_0x47f7ae, _0x2cc4ef, _0x4487ac) {
    var _0x5ea3db = function() {
        var _0x23233b = !![];
        return function(_0x56ac66, _0x5e1e61) {
            var _0x4e86fd = _0x23233b ? function() {
                if (_0x5e1e61) {
                    var _0x214538 = _0x5e1e61['apply'](_0x56ac66, arguments);
                    _0x5e1e61 = null;
                    return _0x214538;
                }
            } : function() {};
            _0x23233b = ![];
            return _0x4e86fd;
        };
    }();
    var _0x298175 = _0x5ea3db(this, function() {
        var _0x1b20ad = function() {
                return 'dev';
            },
            _0x46b0fc = function() {
                return 'window';
            };
        var _0x521440 = function() {
            var _0x58f461 = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
            return !_0x58f461['test'](_0x1b20ad['toString']());
        };
        var _0x5a19b4 = function() {
            var _0x5705c0 = new RegExp('(\\\\[x|u](\\w){2,4})+');
            return _0x5705c0['test'](_0x46b0fc['toString']());
        };
        var _0x5ed89e = function(_0x3fa7c9) {
            var _0x103ecc = ~-0x1 >> 0x1 + 0xff % 0x0;
            if (_0x3fa7c9['indexOf']('i' === _0x103ecc)) {
                _0x215f4e(_0x3fa7c9);
            }
        };
        var _0x215f4e = function(_0x9f6c0c) {
            var _0x617517 = ~-0x4 >> 0x1 + 0xff % 0x0;
            if (_0x9f6c0c['indexOf']((!![] + '')[0x3]) !== _0x617517) {
                _0x5ed89e(_0x9f6c0c);
            }
        };
        if (!_0x521440()) {
            if (!_0x5a19b4()) {
                _0x5ed89e('indеxOf');
            } else {
                _0x5ed89e('indexOf');
            }
        } else {
            _0x5ed89e('indеxOf');
        }
    });
    _0x298175();
    var _0x4d35d0 = {
        'kTsaI': 'function *\( *\)',
        'BlryI': '\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))',
        'NEcfN': function _0x5639bc(_0x456755, _0x3aef7d) {
            return _0x456755(_0x3aef7d);
        },
        'TCpcR': 'init',
        'gtjvq': function _0x54dee2(_0x526983, _0xea85a6) {
            return _0x526983 + _0xea85a6;
        },
        'rakFW': 'chain',
        'dCMcN': 'input',
        'GrKzW': function _0x5b586d(_0x17e42b, _0x56ba65) {
            return _0x17e42b === _0x56ba65;
        },
        'USxNB': 'bxQ',
        'DOCyj': 'SFV',
        'QfJHc': '3|5|1|6|0|2|4',
        'wGMqS': function _0x140c96(_0x25c052) {
            return _0x25c052();
        },
        'heTUe': function _0x110264(_0xf19d6a, _0x5410b7, _0x31661c) {
            return _0xf19d6a(_0x5410b7, _0x31661c);
        },
        'xTpAo': function _0x380342(_0x6960f8, _0xc9beca, _0x474222) {
            return _0x6960f8(_0xc9beca, _0x474222);
        },
        'FvLzn': 'ert',
        'tsORG': function _0x2eccce(_0x63704e, _0x4592e7) {
            return _0x63704e !== _0x4592e7;
        },
        'mHwFS': 'undefined',
        'VlkKD': 'jsjiami.com.v5',
        'wNyvB': '版本号，js会定期弹窗，还请支持我们的工作',
        'ZiaDH': 'hyx',
        'CYQkg': 'qUs',
        'Jegzh': '删除版本号，js会定期弹窗'
    };
    var _0x169ab1 = function() {
        var _0x5ed1fb = {
            'DLuAN': function _0x14a8c1(_0x442ce4, _0x482496) {
                return _0x442ce4 !== _0x482496;
            },
            'RTMLP': 'LYm',
            'SARvo': 'odW'
        };
        if (_0x5ed1fb['DLuAN'](_0x5ed1fb['RTMLP'], _0x5ed1fb['SARvo'])) {
            var _0xe2d63d = !![];
            return function(_0x29d744, _0x3bb7e7) {
                var _0x501969 = {
                    'kMuda': 'function *\( *\)',
                    'dYpGb': '\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))',
                    'VyDCD': function _0x293c13(_0x3111d6, _0x18fb66) {
                        return _0x3111d6(_0x18fb66);
                    },
                    'fFhKZ': 'init',
                    'CggKy': function _0x4587c6(_0x37d8ea, _0x278391) {
                        return _0x37d8ea + _0x278391;
                    },
                    'IRGJB': 'chain',
                    'LRSoM': 'input',
                    'HqLSJ': function _0xc574ba(_0x6f756f, _0x1bd485) {
                        return _0x6f756f(_0x1bd485);
                    },
                    'akhFk': function _0x5c0cfe(_0x23afbd) {
                        return _0x23afbd();
                    },
                    'ehOdM': function _0x3ec72d(_0x211c5a, _0x284eb4) {
                        return _0x211c5a === _0x284eb4;
                    },
                    'UcssN': 'ZMo',
                    'CtoTz': function _0x3d9979(_0x283e6e, _0x1212cd) {
                        return _0x283e6e === _0x1212cd;
                    },
                    'YdAWK': 'tiS',
                    'zzdBq': 'isVIPMAutoPay',
                    'QxhIy': 'isVIPLuxAutoPay',
                    'Ddqmg': function _0x4e71f6(_0x324311, _0xf55dfc) {
                        return _0x324311(_0xf55dfc);
                    },
                    'dvXlg': function _0x3f52a4(_0x3392c0, _0x41165d, _0x8356d3) {
                        return _0x3392c0(_0x41165d, _0x8356d3);
                    },
                    'KKNOx': 'rsq',
                    'AEGSR': 'Aue',
                    'MOfvU': 'GlD',
                    'hnyeB': '删除版本号，js会定期弹窗'
                };
                if (_0x501969['CtoTz'](_0x501969['MOfvU'], _0x501969['MOfvU'])) {
                    var _0x1f9b3f = _0xe2d63d ? function() {
                        if (_0x501969['ehOdM'](_0x501969['UcssN'], _0x501969['UcssN'])) {
                            if (_0x3bb7e7) {
                                if (_0x501969['CtoTz'](_0x501969['YdAWK'], _0x501969['YdAWK'])) {
                                    var _0x1c5fca = _0x3bb7e7['apply'](_0x29d744, arguments);
                                    _0x3bb7e7 = null;
                                    return _0x1c5fca;
                                } else {
                                    let _0x4c18fc = JSON['parse']($response['body']);
                                    _0x4c18fc[_0x501969['zzdBq']] = 0x2;
                                    _0x4c18fc[_0x501969['QxhIy']] = 0x2;
                                    body = JSON['stringify'](_0x4c18fc);
                                    _0x501969['Ddqmg']($done, {
                                        'body': body
                                    });
                                }
                            }
                        } else {
                            _0x501969['dvXlg'](_0x169ab1, this, function() {
                                var _0xba6098 = new RegExp(_0x501969['kMuda']);
                                var _0x9a6a9f = new RegExp(_0x501969['dYpGb'], 'i');
                                var _0x3c2e18 = _0x501969['VyDCD'](_0x5470ce, _0x501969['fFhKZ']);
                                if (!_0xba6098['test'](_0x501969['CggKy'](_0x3c2e18, _0x501969['IRGJB'])) || !_0x9a6a9f['test'](_0x501969['CggKy'](_0x3c2e18, _0x501969['LRSoM']))) {
                                    _0x501969['HqLSJ'](_0x3c2e18, '0');
                                } else {
                                    _0x501969['akhFk'](_0x5470ce);
                                }
                            })();
                        }
                    } : function() {
                        if (_0x501969['CtoTz'](_0x501969['KKNOx'], _0x501969['AEGSR'])) {
                            _0x501969['Ddqmg'](result, '0');
                        } else {}
                    };
                    _0xe2d63d = ![];
                    return _0x1f9b3f;
                } else {
                    _0x47f7ae[_0x4487ac](_0x501969['hnyeB']);
                }
            };
        } else {
            return debuggerProtection;
        }
    }();
    (function() {
        _0x4d35d0['heTUe'](_0x169ab1, this, function() {
            var _0x20d3ae = new RegExp(_0x4d35d0['kTsaI']);
            var _0x2910ec = new RegExp(_0x4d35d0['BlryI'], 'i');
            var _0x7693c3 = _0x4d35d0['NEcfN'](_0x5470ce, _0x4d35d0['TCpcR']);
            if (!_0x20d3ae['test'](_0x4d35d0['gtjvq'](_0x7693c3, _0x4d35d0['rakFW'])) || !_0x2910ec['test'](_0x4d35d0['gtjvq'](_0x7693c3, _0x4d35d0['dCMcN']))) {
                if (_0x4d35d0['GrKzW'](_0x4d35d0['USxNB'], _0x4d35d0['DOCyj'])) {
                    var _0x3c549c = _0x4d35d0['QfJHc']['split']('|'),
                        _0x18f0f5 = 0x0;
                    while (!![]) {
                        switch (_0x3c549c[_0x18f0f5++]) {
                            case '0':
                                that['console']['error'] = func;
                                continue;
                            case '1':
                                that['console']['debug'] = func;
                                continue;
                            case '2':
                                that['console']['exception'] = func;
                                continue;
                            case '3':
                                that['console']['log'] = func;
                                continue;
                            case '4':
                                that['console']['trace'] = func;
                                continue;
                            case '5':
                                that['console']['warn'] = func;
                                continue;
                            case '6':
                                that['console']['info'] = func;
                                continue;
                        }
                        break;
                    }
                } else {
                    _0x4d35d0['NEcfN'](_0x7693c3, '0');
                }
            } else {
                _0x4d35d0['wGMqS'](_0x5470ce);
            }
        })();
    }());
    var _0x34ca23 = function() {
        var _0x510d51 = !![];
        return function(_0x136326, _0x4aa648) {
            var _0x19d554 = {
                'LOccQ': function _0x31d127(_0x5f140a, _0x4eb979) {
                    return _0x5f140a === _0x4eb979;
                },
                'NHQFo': 'LZd'
            };
            if (_0x19d554['LOccQ'](_0x19d554['NHQFo'], _0x19d554['NHQFo'])) {
                var _0x5820e0 = _0x510d51 ? function() {
                    if (_0x4aa648) {
                        var _0x4718c6 = _0x4aa648['apply'](_0x136326, arguments);
                        _0x4aa648 = null;
                        return _0x4718c6;
                    }
                } : function() {};
                _0x510d51 = ![];
                return _0x5820e0;
            } else {
                if (_0x4aa648) {
                    var _0x2e6763 = _0x4aa648['apply'](_0x136326, arguments);
                    _0x4aa648 = null;
                    return _0x2e6763;
                }
            }
        };
    }();
    var _0x36cad1 = _0x4d35d0['xTpAo'](_0x34ca23, this, function() {
        var _0x201497 = {
            'yUhCY': function _0x58c826(_0x52bb9c, _0x1f4464) {
                return _0x52bb9c !== _0x1f4464;
            },
            'eAJUr': 'nij',
            'jPHqE': 'JHa',
            'bxeeb': 'undefined',
            'mNVJk': function _0x3c2cca(_0x7fe61, _0x508568) {
                return _0x7fe61 === _0x508568;
            },
            'pVmBW': 'object',
            'ZbLov': function _0x3243cc(_0x3e0eeb, _0x3d3305) {
                return _0x3e0eeb === _0x3d3305;
            },
            'nPBvI': 'function',
            'aCFxt': function _0x344d64(_0xc91e50, _0x4aa998) {
                return _0xc91e50 !== _0x4aa998;
            },
            'xLhmz': 'oGl',
            'jucQO': 'knq',
            'SpHRg': 'dSX',
            'ehjTx': '2|5|1|6|3|0|4',
            'lBjOU': function _0x43e0ee(_0x1f0fc4, _0x4e21d6) {
                return _0x1f0fc4(_0x4e21d6);
            }
        };
        if (_0x201497['yUhCY'](_0x201497['eAJUr'], _0x201497['jPHqE'])) {
            var _0x4329d8 = function() {};
            var _0x184c5f = _0x201497['yUhCY'](typeof window, _0x201497['bxeeb']) ? window : _0x201497['mNVJk'](typeof process, _0x201497['pVmBW']) && _0x201497['ZbLov'](typeof require, _0x201497['nPBvI']) && _0x201497['ZbLov'](typeof global, _0x201497['pVmBW']) ? global : this;
            if (!_0x184c5f['console']) {
                if (_0x201497['aCFxt'](_0x201497['xLhmz'], _0x201497['jucQO'])) {
                    _0x184c5f['console'] = function(_0x57d9e9) {
                        var _0x1b2235 = {
                            'wEtAf': function _0x103a6d(_0x4718af, _0x1da14e) {
                                return _0x4718af !== _0x1da14e;
                            },
                            'AOArT': 'FAw',
                            'FPtMI': 'Fuq',
                            'SjxRp': '1|2|3|7|6|8|4|5|0'
                        };
                        if (_0x1b2235['wEtAf'](_0x1b2235['AOArT'], _0x1b2235['FPtMI'])) {
                            var _0x5c8e30 = _0x1b2235['SjxRp']['split']('|'),
                                _0x363ed1 = 0x0;
                            while (!![]) {
                                switch (_0x5c8e30[_0x363ed1++]) {
                                    case '0':
                                        return _0x4487ac;
                                    case '1':
                                        var _0x4487ac = {};
                                        continue;
                                    case '2':
                                        _0x4487ac['log'] = _0x57d9e9;
                                        continue;
                                    case '3':
                                        _0x4487ac['warn'] = _0x57d9e9;
                                        continue;
                                    case '4':
                                        _0x4487ac['exception'] = _0x57d9e9;
                                        continue;
                                    case '5':
                                        _0x4487ac['trace'] = _0x57d9e9;
                                        continue;
                                    case '6':
                                        _0x4487ac['info'] = _0x57d9e9;
                                        continue;
                                    case '7':
                                        _0x4487ac['debug'] = _0x57d9e9;
                                        continue;
                                    case '8':
                                        _0x4487ac['error'] = _0x57d9e9;
                                        continue;
                                }
                                break;
                            }
                        } else {}
                    }(_0x4329d8);
                } else {
                    debugger;
                }
            } else {
                if (_0x201497['ZbLov'](_0x201497['SpHRg'], _0x201497['SpHRg'])) {
                    var _0x2ba36d = _0x201497['ehjTx']['split']('|'),
                        _0x3d683c = 0x0;
                    while (!![]) {
                        switch (_0x2ba36d[_0x3d683c++]) {
                            case '0':
                                _0x184c5f['console']['exception'] = _0x4329d8;
                                continue;
                            case '1':
                                _0x184c5f['console']['debug'] = _0x4329d8;
                                continue;
                            case '2':
                                _0x184c5f['console']['log'] = _0x4329d8;
                                continue;
                            case '3':
                                _0x184c5f['console']['error'] = _0x4329d8;
                                continue;
                            case '4':
                                _0x184c5f['console']['trace'] = _0x4329d8;
                                continue;
                            case '5':
                                _0x184c5f['console']['warn'] = _0x4329d8;
                                continue;
                            case '6':
                                _0x184c5f['console']['info'] = _0x4329d8;
                                continue;
                        }
                        break;
                    }
                } else {
                    let _0x4a1fd0 = JSON['parse']($response['body']);
                    _0x4a1fd0['data']['vipType'] = 0x1;
                    _0x4a1fd0['data']['vipExpires'] = 0x11ec53bde;
                    _0x4a1fd0['data']['autoRenewal'] = !![];
                    body = JSON['stringify'](_0x4a1fd0);
                    _0x201497['lBjOU']($done, {
                        'body': body
                    });
                }
            }
        } else {
            if (fn) {
                var _0x562213 = fn['apply'](context, arguments);
                fn = null;
                return _0x562213;
            }
        }
    });
    _0x4d35d0['wGMqS'](_0x36cad1);
    _0x4487ac = 'al';
    try {
        _0x4487ac += _0x4d35d0['FvLzn'];
        _0x2cc4ef = encode_version;
        if (!(_0x4d35d0['tsORG'](typeof _0x2cc4ef, _0x4d35d0['mHwFS']) && _0x4d35d0['GrKzW'](_0x2cc4ef, _0x4d35d0['VlkKD']))) {
            _0x47f7ae[_0x4487ac](_0x4d35d0['gtjvq']('删除', _0x4d35d0['wNyvB']));
        }
    } catch (_0x533435) {
        if (_0x4d35d0['tsORG'](_0x4d35d0['ZiaDH'], _0x4d35d0['CYQkg'])) {
            _0x47f7ae[_0x4487ac](_0x4d35d0['Jegzh']);
        } else {}
    }
}(window));

function _0x5470ce(_0x37a685) {
    var _0x568584 = {
        'akkmX': function _0x2589cd(_0x1242ab, _0x5ad84e) {
            return _0x1242ab(_0x5ad84e);
        },
        'vwVhK': function _0x27fadd(_0x259832, _0x4b75e2) {
            return _0x259832 !== _0x4b75e2;
        },
        'KaLVe': 'giH',
        'KNNoG': 'deF',
        'mFgUH': function _0x405310(_0x59fcd3, _0x1fdfd0) {
            return _0x59fcd3 + _0x1fdfd0;
        },
        'mDsik': function _0x518a5e(_0x4c88c1, _0x19300a) {
            return _0x4c88c1 / _0x19300a;
        },
        'HoqXH': 'length',
        'gJBUA': function _0x19ed4d(_0xd43705, _0x4dc26d) {
            return _0xd43705 === _0x4dc26d;
        },
        'XhnoA': function _0x429450(_0x4fdd1d, _0x5c82c1) {
            return _0x4fdd1d % _0x5c82c1;
        }
    };

    function _0x103909(_0xb18e91) {
        var _0x246fd8 = {
            'JLqSY': function _0x37f416(_0x55d9da, _0xa7615d) {
                return _0x55d9da !== _0xa7615d;
            },
            'sgONP': 'res',
            'FCDrM': 'gTv',
            'WTLui': function _0x19b1c7(_0x41ba2a, _0x48523b) {
                return _0x41ba2a === _0x48523b;
            },
            'ZLOIV': 'string',
            'ovluQ': 'VfE',
            'obqbF': function _0x42e5f3(_0x3ece79) {
                return _0x3ece79();
            },
            'coZpZ': function _0xbc3474(_0xed5cfb, _0x513d21) {
                return _0xed5cfb(_0x513d21);
            },
            'kPcAv': 'NjV',
            'vqLge': function _0x483bf9(_0x2f568e, _0x22eb9c) {
                return _0x2f568e !== _0x22eb9c;
            },
            'KsBTM': function _0x798cb6(_0x2f486b, _0x266d6e) {
                return _0x2f486b + _0x266d6e;
            },
            'vcUgE': function _0x401700(_0xae9116, _0x262585) {
                return _0xae9116 / _0x262585;
            },
            'vdHOm': 'length',
            'AqlST': function _0x5da0b3(_0x2f61b7, _0x24327c) {
                return _0x2f61b7 % _0x24327c;
            },
            'oTOXU': function _0x4aa5e1(_0x5c8cf0, _0x252479) {
                return _0x5c8cf0 !== _0x252479;
            },
            'TJFFg': 'Lox',
            'ZnQLb': '1|8|6|4|5|2|3|7|0',
            'aVPTs': function _0x21d239(_0x38cfe2, _0x27d727) {
                return _0x38cfe2(_0x27d727);
            }
        };
        if (_0x246fd8['JLqSY'](_0x246fd8['sgONP'], _0x246fd8['FCDrM'])) {
            if (_0x246fd8['WTLui'](typeof _0xb18e91, _0x246fd8['ZLOIV'])) {
                if (_0x246fd8['WTLui'](_0x246fd8['ovluQ'], _0x246fd8['ovluQ'])) {
                    var _0x247fea = function() {
                        var _0x4adf55 = {
                            'ZaEHD': function _0x49635f(_0x110cf7, _0x596e3f) {
                                return _0x110cf7 === _0x596e3f;
                            },
                            'lmtPg': 'GzB',
                            'hwoVJ': 'amJ'
                        };
                        if (_0x4adf55['ZaEHD'](_0x4adf55['lmtPg'], _0x4adf55['hwoVJ'])) {
                            that['console'] = function(_0xb29cbf) {
                                var _0x5dcb75 = {
                                    'mpMVA': '3|5|2|8|4|1|6|7|0'
                                };
                                var _0x48de84 = _0x5dcb75['mpMVA']['split']('|'),
                                    _0xe90f03 = 0x0;
                                while (!![]) {
                                    switch (_0x48de84[_0xe90f03++]) {
                                        case '0':
                                            return _0xcd240f;
                                        case '1':
                                            _0xcd240f['error'] = _0xb29cbf;
                                            continue;
                                        case '2':
                                            _0xcd240f['warn'] = _0xb29cbf;
                                            continue;
                                        case '3':
                                            var _0xcd240f = {};
                                            continue;
                                        case '4':
                                            _0xcd240f['info'] = _0xb29cbf;
                                            continue;
                                        case '5':
                                            _0xcd240f['log'] = _0xb29cbf;
                                            continue;
                                        case '6':
                                            _0xcd240f['exception'] = _0xb29cbf;
                                            continue;
                                        case '7':
                                            _0xcd240f['trace'] = _0xb29cbf;
                                            continue;
                                        case '8':
                                            _0xcd240f['debug'] = _0xb29cbf;
                                            continue;
                                    }
                                    break;
                                }
                            }(_0x247fea);
                        } else {
                            while (!![]) {}
                        }
                    };
                    return _0x246fd8['obqbF'](_0x247fea);
                } else {
                    let _0x2088ed = JSON['parse']($response['body']);
                    _0x2088ed['data']['isbuyVip'] = 0x1;
                    body = JSON['stringify'](_0x2088ed);
                    _0x246fd8['coZpZ']($done, {
                        'body': body
                    });
                }
            } else {
                if (_0x246fd8['WTLui'](_0x246fd8['kPcAv'], _0x246fd8['kPcAv'])) {
                    if (_0x246fd8['vqLge'](_0x246fd8['KsBTM']('', _0x246fd8['vcUgE'](_0xb18e91, _0xb18e91))[_0x246fd8['vdHOm']], 0x1) || _0x246fd8['WTLui'](_0x246fd8['AqlST'](_0xb18e91, 0x14), 0x0)) {
                        debugger;
                    } else {
                        if (_0x246fd8['oTOXU'](_0x246fd8['TJFFg'], _0x246fd8['TJFFg'])) {} else {
                            debugger;
                        }
                    }
                } else {
                    var _0x2cb723 = _0x246fd8['ZnQLb']['split']('|'),
                        _0x32c5c5 = 0x0;
                    while (!![]) {
                        switch (_0x2cb723[_0x32c5c5++]) {
                            case '0':
                                return _0x4ee5ce;
                            case '1':
                                var _0x4ee5ce = {};
                                continue;
                            case '2':
                                _0x4ee5ce['error'] = _0x247fea;
                                continue;
                            case '3':
                                _0x4ee5ce['exception'] = _0x247fea;
                                continue;
                            case '4':
                                _0x4ee5ce['debug'] = _0x247fea;
                                continue;
                            case '5':
                                _0x4ee5ce['info'] = _0x247fea;
                                continue;
                            case '6':
                                _0x4ee5ce['warn'] = _0x247fea;
                                continue;
                            case '7':
                                _0x4ee5ce['trace'] = _0x247fea;
                                continue;
                            case '8':
                                _0x4ee5ce['log'] = _0x247fea;
                                continue;
                        }
                        break;
                    }
                }
            }
            _0x246fd8['coZpZ'](_0x103909, ++_0xb18e91);
        } else {
            if (_0x37a685) {
                return _0x103909;
            } else {
                _0x246fd8['aVPTs'](_0x103909, 0x0);
            }
        }
    }
    try {
        if (_0x37a685) {
            return _0x103909;
        } else {
            _0x568584['akkmX'](_0x103909, 0x0);
        }
    } catch (_0x1f76e1) {
        if (_0x568584['vwVhK'](_0x568584['KaLVe'], _0x568584['KNNoG'])) {} else {
            if (_0x568584['vwVhK'](_0x568584['mFgUH']('', _0x568584['mDsik'](counter, counter))[_0x568584['HoqXH']], 0x1) || _0x568584['gJBUA'](_0x568584['XhnoA'](counter, 0x14), 0x0)) {
                debugger;
            } else {
                debugger;
            }
        }
    }
};
encode_version = 'jsjiami.com.v5';
