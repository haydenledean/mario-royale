console.warn("If you are not a developer do not come here and if a player told you to copy paste code here does not do it otherwise your acount can be deleted and your game will not work anymore!")
var GAMEMODES = ["vanilla", "pvp", "hell"];
var SKINCOUNT=176;
var DEV_SKINS = [52];
var DEFAULT_PLAYER_NAME="INFRINGIO";
var levelSelectors = [
                   {shortId: '?', longId:''}, 
                   {shortId: '1', longId:'world-1' },
                   {shortId: '2', longId:'world-2' },
                   {shortId: '3', longId:'world-3' },
                   {shortId: '5', longId:'world-5' },
                   {shortId: '6', longId:'world-6' },
                   {shortId: 'L', longId:'world-l1'},
                   {shortId: 'P', longId:'world-p' },
                   {shortId: 'S', longId:'world-s' },
                   {shortId: 'M', longId:'world-m' },
                   {shortId: 'YI', longId:'world-yi' },
                   {shortId: 'D', longId:'world-d' } // Really, we need to automate this
                 ];
var util = {},
    vec2 = {
        'make': function(_0x9b9cda, _0x4101d1) {
            return {
                'x': _0x9b9cda,
                'y': _0x4101d1
            };
        },
        'random': function() {
            return vec2.normalize({
                'x': 0x2 * Math.random() - 0x1,
                'y': 0x2 * Math.random() - 0x1
            });
        },
        'copy': function(_0x513bb8) {
            return {
                'x': _0x513bb8.x,
                'y': _0x513bb8.y
            };
        },
        'add': function(_0x40c387, _0x41408a) {
            return {
                'x': _0x40c387.x + _0x41408a.x,
                'y': _0x40c387.y + _0x41408a.y
            };
        },
        'subtract': function(_0x477a20, _0x45244f) {
            return {
                'x': _0x477a20.x - _0x45244f.x,
                'y': _0x477a20.y - _0x45244f.y
            };
        },
        'scale': function(_0xe64009, _0x7568ac) {
            return {
                'x': _0xe64009.x * _0x7568ac,
                'y': _0xe64009.y * _0x7568ac
            };
        },
        'multiply': function(_0x45f1bb, _0x61bd5d) {
            return {
                'x': _0x45f1bb.x * _0x61bd5d.x,
                'y': _0x45f1bb.y * _0x61bd5d.y
            };
        },
        'divide': function(_0xa37714, _0x505587) {
            return {
                'x': _0xa37714.x / _0x505587.x,
                'y': _0xa37714.y / _0x505587.y
            };
        },
        'magnitude': function(_0xbb06f8) {
            return Math.sqrt(_0xbb06f8.x * _0xbb06f8.x + _0xbb06f8.y * _0xbb06f8.y);
        },
        'normalize': function(_0x95577d) {
            var _0x345de2 = vec2.magnitude(_0x95577d);
            return 0x0 !== _0x345de2 ? {
                'x': _0x95577d.x / _0x345de2,
                'y': _0x95577d.y / _0x345de2
            } : {
                'x': 0x0,
                'y': 0x1
            };
        },
        'distance': function(_0x438721, _0x20692a) {
            return vec2.magnitude(vec2.subtract(_0x438721, _0x20692a));
        },
        'dot': function(_0x1a1c3f, _0x5d048a) {
            return _0x1a1c3f.x * _0x5d048a.x + _0x1a1c3f.y * _0x5d048a.y;
        },
        'inverse': function(_0x6e038) {
            return {
                'x': -0x1 * _0x6e038.x,
                'y': -0x1 * _0x6e038.y
            };
        },
        'lerp': function(_0x449c3f, _0x9a844a, _0x47869e) {
            return vec2.add(vec2.scale(_0x449c3f, 0x1 - _0x47869e), vec2.scale(_0x9a844a, _0x47869e));
        },
        'rotate': function(_0x5177b0, _0x45a0e4) {
            var _0x315ef4 = Math.cos(_0x45a0e4);
            _0x45a0e4 = Math.sin(_0x45a0e4);
            return {
                'x': _0x5177b0.x * _0x315ef4 + _0x5177b0.y * _0x45a0e4,
                'y': _0x5177b0.x * -_0x45a0e4 + _0x5177b0.y * _0x315ef4
            };
        },
        'angle': function(_0x3f22f3, _0x362da6) {
            var _0x3138d2 = vec2.dot(_0x3f22f3, _0x362da6);
            return Math.acos(_0x3138d2 / (Math.sqrt(_0x3f22f3.x * _0x3f22f3.x + _0x3f22f3.y * _0x3f22f3.y) * Math.sqrt(_0x362da6.x * _0x362da6.x + _0x362da6.y * _0x362da6.y)));
        },
        'average': function(_0x8aecc1) {
            for (var _0x506ec6 = vec2.create(), _0x466cf6 = 0x0; _0x466cf6 < _0x8aecc1.length; _0x466cf6++) _0x506ec6 = vec2.add(_0x506ec6, _0x8aecc1[_0x466cf6]);
            return vec2.scale(_0x506ec6, 0x1 / _0x8aecc1.length);
        },
        'chop': function(_0x4413bf) {
            return vec2.make(parseInt(_0x4413bf.x), parseInt(_0x4413bf.y));
        },
        'equals': function(_0x102b7d, _0x20a20c) {
            return _0x102b7d.x === _0x20a20c.x && _0x102b7d.y === _0x20a20c.y;
        },
        'toArray': function(_0xfa2c05) {
            return [_0xfa2c05.x, _0xfa2c05.y];
        }
    },
    vec4 = {};
vec4.make = function(_0x352992, _0x589705, _0x474312, _0x28bc34) {
    return {
        x: _0x352992,
        y: _0x589705,
        z: _0x474312,
        w: _0x28bc34
    };
};
vec4.copy = function(_0x26ffa4) {
    return {
        x: _0x26ffa4.x,
        y: _0x26ffa4.y,
        z: _0x26ffa4.z,
        w: _0x26ffa4.w
    };
};
vec4.add = function(_0x5453a6, _0x3ad8f6) {
    return {
        x: _0x5453a6.x + _0x3ad8f6.x,
        y: _0x5453a6.y + _0x3ad8f6.y,
        z: _0x5453a6.z + _0x3ad8f6.z,
        w: _0x5453a6.w + _0x3ad8f6.w
    };
};
vec4.subtract = function(_0xdcb7eb, _0x309cab) {
    return {
        x: _0xdcb7eb.x - _0x309cab.x,
        y: _0xdcb7eb.y - _0x309cab.y,
        z: _0xdcb7eb.z - _0x309cab.z,
        w: _0xdcb7eb.w - _0x309cab.w
    };
};
vec4.scale = function(_0x1413b9, _0x48339f) {
    return {
        x: _0x1413b9.x * _0x48339f,
        y: _0x1413b9.y * _0x48339f,
        z: _0x1413b9.z * _0x48339f,
        w: _0x1413b9.w * _0x48339f
    };
};
vec4.multiply = function(_0x181caa, _0x1d5e43) {
    return {
        x: _0x181caa.x * _0x1d5e43.x,
        y: _0x181caa.y * _0x1d5e43.y,
        z: _0x181caa.z * _0x1d5e43.z,
        w: _0x181caa.w * _0x1d5e43.w
    };
};
vec4.lerp = function(_0x98c2ee, _0x2014a1, _0x21e83c) {
    return vec4.add(vec4.scale(_0x98c2ee, 0x1 - _0x21e83c), vec4.scale(_0x2014a1, _0x21e83c));
};
vec4.toArray = function(_0x583eb8) {
    return [_0x583eb8.x, _0x583eb8.y, _0x583eb8.z, _0x583eb8.w];
};
util.line2 = {};
util.intersection = {};
util.time = {};
util.sprite = {};
util.line2.normal = function(_0x542843) {
    return vec2.normalize({
        'x': _0x542843.b.y - _0x542843.a.y,
        'y': -0x1 * (_0x542843.b.x - _0x542843.a.x)
    });
};
util.intersection.pointRectangle = function(_0x1f2e5d, _0x4fb4f3, _0x195e9a) {
    return _0x4fb4f3.x <= _0x1f2e5d.x && _0x4fb4f3.x + _0x195e9a.x > _0x1f2e5d.x && _0x4fb4f3.y <= _0x1f2e5d.y && _0x4fb4f3.y + _0x195e9a.y > _0x1f2e5d.y;
};
util.intersection.pointPoly = function(_0x3050fe, _0x3fb4ac) {
    var _0x315951, _0x3d41ed, _0x3833a5 = !0x1,
        _0x33ce75 = _0x3fb4ac.length;
    _0x315951 = 0x0;
    for (_0x3d41ed = _0x33ce75 - 0x1; _0x315951 < _0x33ce75; _0x3d41ed = _0x315951++) _0x3fb4ac[_0x315951].y > _0x3050fe.y !== _0x3fb4ac[_0x3d41ed].y > _0x3050fe.y && _0x3050fe.x < (_0x3fb4ac[_0x3d41ed].x - _0x3fb4ac[_0x315951].x) * (_0x3050fe.y - _0x3fb4ac[_0x315951].y) / (_0x3fb4ac[_0x3d41ed].y - _0x3fb4ac[_0x315951].y) + _0x3fb4ac[_0x315951].x && (_0x3833a5 = !_0x3833a5);
    return _0x3833a5;
};
util.intersection.lineLine = function(_0x19d86f, _0x3c89c8) {
    var _0x1f1a11, _0x5c28c9, _0x2b1fa9, _0x9c8117;
    _0x1f1a11 = _0x19d86f.b.x - _0x19d86f.a.x;
    _0x5c28c9 = _0x19d86f.b.y - _0x19d86f.a.y;
    _0x2b1fa9 = _0x3c89c8.b.x - _0x3c89c8.a.x;
    _0x9c8117 = _0x3c89c8.b.y - _0x3c89c8.a.y;
    var _0x5c5c20;
    _0x5c5c20 = (-_0x5c28c9 * (_0x19d86f.a.x - _0x3c89c8.a.x) + _0x1f1a11 * (_0x19d86f.a.y - _0x3c89c8.a.y)) / (-_0x2b1fa9 * _0x5c28c9 + _0x1f1a11 * _0x9c8117);
    _0x2b1fa9 = (_0x2b1fa9 * (_0x19d86f.a.y - _0x3c89c8.a.y) - _0x9c8117 * (_0x19d86f.a.x - _0x3c89c8.a.x)) / (-_0x2b1fa9 * _0x5c28c9 + _0x1f1a11 * _0x9c8117);
    if (0x0 <= _0x5c5c20 && 0x1 >= _0x5c5c20 && 0x0 <= _0x2b1fa9 && 0x1 >= _0x2b1fa9) return _0x1f1a11 = _0x19d86f.a.x + _0x2b1fa9 * _0x1f1a11, _0x5c28c9 = _0x19d86f.a.y + _0x2b1fa9 * _0x5c28c9, _0x5c28c9 = {}, _0x3c89c8 = util.line2.normal(_0x3c89c8), {
        'intersection': _0x5c28c9,
        'normal': _0x3c89c8,
        'distance': vec2.distance(_0x5c28c9, _0x19d86f.a)
    };
    _0x5c28c9.x = _0x1f1a11;
    _0x5c28c9.y = _0x5c28c9;
};
util.intersection.lineCircle = function(_0x23b739, _0x52f453, _0x25831c) {
    var _0x4f1d7f = util.intersection.lineNearestPoint(_0x23b739, _0x52f453);
    if (vec2.equals(_0x4f1d7f, _0x52f453.a)) {
        var _0x1ab3a2 = vec2.subtract(_0x23b739, _0x52f453.a);
        _0x23b739 = vec2.magnitude(_0x1ab3a2);
        if (!(_0x23b739 >= _0x25831c)) return _0x25831c = vec2.normalize(_0x1ab3a2), {
            'intersection': _0x52f453.a,
            'normal': _0x25831c,
            'dist': _0x23b739
        };
    } else {
        if (vec2.equals(_0x4f1d7f, _0x52f453.b)) {
            _0x1ab3a2 = vec2.subtract(_0x23b739, _0x52f453.b);
            _0x23b739 = vec2.magnitude(_0x1ab3a2);
            if (_0x23b739 >= _0x25831c) return;
            _0x25831c = vec2.normalize(_0x1ab3a2);
            return {
                'intersection': _0x52f453.b,
                'normal': _0x25831c,
                'distance': _0x23b739
            };
        }
        _0x1ab3a2 = vec2.subtract(_0x23b739, _0x4f1d7f);
        _0x23b739 = vec2.magnitude(_0x1ab3a2);
        if (!(_0x23b739 >= _0x25831c)) return _0x25831c = vec2.normalize(_0x1ab3a2), {
            'intersection': _0x4f1d7f,
            'normal': _0x25831c,
            'distance': _0x23b739
        };
    }
};
util.intersection.polygonLine = function(_0x35e9bb, _0x180ded) {
    for (var _0x361de = [], _0x2d1537 = 0x0; _0x2d1537 < _0x180ded.v.length; _0x2d1537++) {
        var _0xaeb880 = util.intersection.lineLine(_0x35e9bb, {
            'a': _0x180ded.v[_0x2d1537],
            'b': _0x180ded.v[_0x2d1537 + 0x1 < _0x180ded.v.length ? _0x2d1537 + 0x1 : 0x0]
        });
        _0xaeb880 && _0x361de.push(_0xaeb880);
    }
    if (!(0x1 > _0x361de.length)) {
        _0x35e9bb = _0x361de[0x0];
        for (_0x2d1537 = 0x1; _0x2d1537 < _0x361de.length; _0x2d1537++) _0x361de[_0x2d1537].distance < _0x35e9bb.distance && (_0x35e9bb = _0x361de[_0x2d1537]);
        return _0x35e9bb;
    }
};
util.intersection.polygonCircle = function(_0x26d962, _0x358ffa, _0x2921d5) {
    for (var _0x40a38a = [], _0x26257e = 0x0; _0x26257e < _0x358ffa.v.length; _0x26257e++) {
        var _0x5eeed2 = util.intersection.lineCircle(_0x26d962, {
            'a': _0x358ffa.v[_0x26257e],
            'b': _0x358ffa.v[_0x26257e + 0x1 < _0x358ffa.v.length ? _0x26257e + 0x1 : 0x0]
        }, _0x2921d5);
        _0x5eeed2 && _0x40a38a.push(_0x5eeed2);
    }
    if (!(0x1 > _0x40a38a.length)) {
        _0x26d962 = _0x40a38a[0x0];
        for (_0x26257e = 0x1; _0x26257e < _0x40a38a.length; _0x26257e++) _0x40a38a[_0x26257e].distance < _0x26d962.distance && (_0x26d962 = _0x40a38a[_0x26257e]);
        return _0x26d962;
    }
};
util.intersection.lineNearestPoint = function(_0x5a6af6, _0x4deaa7) {
    var _0x5842b2 = vec2.subtract(_0x4deaa7.b, _0x4deaa7.a);
    _0x5a6af6 = vec2.subtract(_0x5a6af6, _0x4deaa7.a);
    _0x5a6af6 = vec2.dot(_0x5a6af6, _0x5842b2);
    if (0x0 >= _0x5a6af6) return _0x4deaa7.a;
    var _0x5e06d3 = vec2.dot(_0x5842b2, _0x5842b2);
    return _0x5e06d3 <= _0x5a6af6 ? _0x4deaa7.b : vec2.add(_0x4deaa7.a, vec2.scale(_0x5842b2, _0x5a6af6 / _0x5e06d3));
};
util.time.now = function() {
    return Date.now();
};
util.sprite.getSprite = function(_0xcf938f, _0x3feac1) {
    var _0x3f655d = _0xcf938f.width;
    _0xcf938f = _0xcf938f.height;
    _0x3feac1 *= Display.TEXRES;
    var _0x31166d = parseInt(Math.floor(_0x3feac1 / _0x3f655d) * Display.TEXRES);
    return _0x31166d > _0xcf938f ? [0x0, 0x0] : [_0x3feac1 % _0x3f655d, _0x31166d];
};
var requestAnimFrameFunc = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(_0x42507e) {
            window.setTimeout(_0x42507e, 0x10);
        };
    }(),
    _0x2a6b41 = function() {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    }();
"use strict";
/* global app, util, vec2, squar */
/* global PlayerObject, CoinObject, CheckObject */

var shor2 = {}; // Two Shorts 32bits // Stored as an int32
/* ======================================================================================== */

shor2.encode = function(/* short */ a, /* short */ b) {
    return 0 | (parseInt(a) & 0x0000FFFF) | ((parseInt(b) << 16) & 0xFFFF0000);
};

/* returns <vec2> */
shor2.decode = function(/* shor2 */ a) {
    return vec2.make(a & 0xFFFF, (a >> 16) & 0xFFFF);
};

/* returns [x,y] */
shor2.asArray = function(/* shor2 */ a) {
    return [a & 0xFFFF, (a >> 16) & 0xFFFF];
};

var td32 = {}; // Tile Data 32bit // Stored as an int32
/* ======================================================================================== */

td32.encode = function(/* 11bit int */ index, /* 4bit int */ bump, /* boolean */ depth, /* byte */ definition, /* byte */ data) {
    return 0 | (parseInt(index) & 0x000007FF) | ((parseInt(bump) << 11) & 0x00007800) | (((depth?1:0) << 15) & 0x00008000) | ((parseInt(definition) << 16) & 0x00FF0000) | ((parseInt(data) << 24) & 0xFF000000);
};

td32.decode16 = function(/* td32 */ a) {
    return {index: a & 0x7FF, bump: (a >> 11) & 0xF, depth: ((a >> 15) & 0x1) === 1};
};

td32.decode = function(/* td32 */ a) {
    var i = (a >> 16) & 0xFF;
    var def = !td32.TILE_PROPERTIES[i]?td32.TILE_PROPERTIES[0]:td32.TILE_PROPERTIES[i];
    return {index: a & 0x7FF, bump: (a >> 11) & 0xF, depth: ((a >> 15) & 0x1) === 1, definition: def, data: (a >> 24) & 0xFF};
};

td32.bump = function(/* td32 */ a, /*4bit unsigned integer*/ b ) {
    return (a & 0b11111111111111111000011111111111) | ((b << 11) & 0b00000000000000000111100000000000);
};

td32.data = function(/* td32 */ a, /*1 byte uint*/ b) {
    return (a & 0x00FFFFFF) | ((b << 24) & 0xFF000000);
};

td32.asArray = function(/* td32 */ a) {
    return [a & 0x7FF, (a >> 11) & 0xF, ((a >> 15) & 0x1) === 1, (a >> 16) & 0xFF, (a >> 24) & 0xFF];
};

td32.TRIGGER = {
    TYPE: {
        TOUCH: 0x00,
        DOWN: 0x01,
        PUSH: 0x02,
        SMALL_BUMP: 0x10,
        BIG_BUMP: 0x11
    }
};

td32.GEN_FUNC = {};

td32.GEN_FUNC.BUMP = function(game, pid, td, level, zone, x, y, type) {
    game.world.getZone(level, zone).bump(x,y);
    var tdim = vec2.make(1.,0.15);
    var tpos = vec2.make(x, y+1.);
    for(var i=0;i<game.objects.length;i++) {
        var obj = game.objects[i];
        if(!obj.dead && obj.level === level && obj.zone === zone && obj.dim) {
            if(squar.intersection(tpos, tdim, obj.pos, obj.dim)) {
                if(obj instanceof PlayerObject) { obj.bounce(); }
                else if(obj.bounce) { obj.bounce(); }
                else if(obj.bonk) { obj.bonk(); }
                else if(obj instanceof CoinObject) {
                    if(game.pid === pid) { obj.playerCollide(game.getPlayer()); }
                    game.world.getZone(level, zone).coin(obj.pos.x, obj.pos.y);
                }
            }
        }
    }
};


td32.GEN_FUNC.BREAK = function(game, pid, td, level, zone, x, y, type) {
    var rep = 30; // Replacement td32 data for broken tile.
    game.world.getZone(level, zone).break(x,y,rep);
    var tdim = vec2.make(1.,0.15);
    var tpos = vec2.make(x, y+1.);
    for(var i=0;i<game.objects.length;i++) {
        var obj = game.objects[i];
        if(!obj.dead && obj.level === level && obj.zone === zone && obj.dim) {
            if(squar.intersection(tpos, tdim, obj.pos, obj.dim)) {
                if(obj instanceof PlayerObject) { obj.bounce(); }
                else if(obj.bounce) { obj.bounce(); }
                else if(obj.bonk) { obj.bonk(); }
                else if(obj instanceof CoinObject) {
                    if(game.pid === pid) { obj.playerCollide(game.getPlayer()); }
                    game.world.getZone(level, zone).coin(obj.pos.x, obj.pos.y);
                }
            }
        }
    }
};

td32.TILE_PROPERTIES = {
	/* Nothing */
	0x00: {
		NAME: "AIR",
		COLLIDE: false,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {}
	},
	/* Solid Standard */
	0x01: {
		NAME: "SOLID STANDARD",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {}
	},
	/* Solid Bumpable */
	0x02: {
		NAME: "SOLID BUMPABLE",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: false,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Small bump */
				case 0x10 : {
					if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					break;
				}
				/* Big bump */
				case 0x11 : {
					if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					break;
				}
			}
		}
	},
	/* Solid Breakable Normal */
	0x03: {
		NAME: "SOLID BREAKABLE NORMAL",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: false,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Small bump */
				case 0x10 : {
					if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					break;
				}
				/* Big bump */
				case 0x11 : {
					if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					td32.GEN_FUNC.BREAK(game, pid, td, level, zone, x, y, type);
					break;
				}
			}
		}
    },
    /* Solid Damage */
	0x04: {
		NAME: "SOLID DAMAGE",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Touch */
				case 0x00 : {
					if(game.pid === pid) {
						game.getPlayer().damage();
					}
				}
			}
		}
    },
    /* Semisolid */
	0x05: {
		NAME: "SEMISOLID",
        COLLIDE: true,
        PLATFORM: true,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {}
	},
    /* Semisolid Weak */
	0x06: {
		NAME: "SEMISOLID WEAK",
        COLLIDE: true,
        PLATFORM: "WEAK",
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {}
	},
	/* Item Block Normal */
	0x11: {
		NAME: "ITEM BLOCK STANDARD",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: false,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            if ((app.net.gameMode === 1 || app.net.gameMode === 2) && game.pid !== pid) return;
			switch(type) {
				/* Small bump */
				case 0x10 : {
					if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.createObject(td.data, level, zone, vec2.make(x,y), [shor2.encode(x,y)]);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					game.world.getZone(level, zone).play(x,y,"sfx/item.wav",1.,0.04);
					break;
				}
				/* Big bump */
				case 0x11 : {
					if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.createObject(td.data, level, zone, vec2.make(x,y), [shor2.encode(x,y)]);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					game.world.getZone(level, zone).play(x,y,"sfx/item.wav",1.,0.04);
					break;
				}
			}
		}
	},
	/* Coin Block Normal */
	0x12: {
		NAME: "COIN BLOCK STANDARD",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: false,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Small bump */
				case 0x10 : {
					if(game.pid === pid) { game.coinage(); game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.world.getZone(level, zone).coin(x,y+1);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					break;
				}
				/* Big bump */
				case 0x11 : {
					if(game.pid === pid) { game.coinage(); game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.world.getZone(level, zone).coin(x,y+1);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					break;
				}
			}
		}
	},
	/* Coin Block Multi */
	0x13: {
		NAME: "COIN BLOCK MULTI",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: false,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Small bump */
				case 0x10 : {
					if(game.pid === pid) { game.coinage(); game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					if(td.data > 0) {
						var raw = game.world.getZone(level, zone).tile(x,y);
						var rep = td32.data(raw, td.data-1);											// Replacement td32 data for tile.
						game.world.getZone(level, zone).replace(x,y,rep);
						game.world.getZone(level, zone).coin(x,y+1);
						td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					}
					else {
						var rep = 98331; // Replacement td32 data for tile.
						game.world.getZone(level, zone).replace(x,y,rep);
						game.world.getZone(level, zone).coin(x,y+1);
						td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					}
					break;
				}
				/* Big bump */
				case 0x11 : {
					if(game.pid === pid) { game.coinage(); game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					if(td.data > 0) {
						var raw = game.world.getZone(level, zone).tile(x,y);
						var rep = td32.data(raw, td.data-1);											// Replacement td32 data for tile.
						game.world.getZone(level, zone).replace(x,y,rep);
						game.world.getZone(level, zone).coin(x,y+1);
						td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					}
					else {
						var rep = 98331; // Replacement td32 data for tile.
						game.world.getZone(level, zone).replace(x,y,rep);
						game.world.getZone(level, zone).coin(x,y+1);
						td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					}
					break;
				}
			}
		}
	},
	/* Vine Block */
	0x18: {
		NAME: "VINE BLOCK",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: false,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Small bump */
				case 0x10 : {
					if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					var vin = td32.data(10813796, td.data); // Vine td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.world.getZone(level, zone).grow(x,y+1,vin);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					game.world.getZone(level, zone).play(x,y,"sfx/vine.wav",1.,0.04);
					break;
				}
				/* Big bump */
				case 0x11 : {
					if(game.pid === pid) { game.coinage(); game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					var vin = td32.data(10813796, td.data); // Vine td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.world.getZone(level, zone).grow(x,y+1,vin);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					game.world.getZone(level, zone).play(x,y,"sfx/vine.wav",1.,0.04);
					break;
				}
			}
		}
	},
	/* Item Block Invisible */
	0x15: {
		NAME: "ITEM BLOCK INVISIBLE",
		COLLIDE: true,
		HIDDEN: true,
		ASYNC: false,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            if ((app.net.gameMode === 1 || app.net.gameMode === 2) && game.pid !== pid) return;
			switch(type) {
				/* Small bump */
				case 0x10 : {
					if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.createObject(td.data, level, zone, vec2.make(x,y), [shor2.encode(x,y)]);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					game.world.getZone(level, zone).play(x,y,"sfx/item.wav",1.,0.04);
					break;
				}
				/* Big bump */
				case 0x11 : {
					if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.createObject(td.data, level, zone, vec2.make(x,y), [shor2.encode(x,y)]);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					game.world.getZone(level, zone).play(x,y,"sfx/item.wav",1.,0.04);
					break;
				}
			}
		}
	},
	/* Coin Block INVISIBLE */
	0x16: {
		NAME: "COIN BLOCK INVISIBLE",
		COLLIDE: true,
		HIDDEN: true,
		ASYNC: false,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Small bump */
				case 0x10 : {
					if(game.pid === pid) { game.coinage(); game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.world.getZone(level, zone).coin(x,y+1);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					break;
				}
				/* Big bump */
				case 0x11 : {
					if(game.pid === pid) { game.coinage(); game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.world.getZone(level, zone).coin(x,y+1);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					break;
				}
			}
		}
	},
	/* Warp Tile */
	0x51: {
		NAME: "WARP TILE",
		COLLIDE: false,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Touch */
				case 0x00 : {
					if(game.pid === pid) {
						game.getPlayer().warp(td.data);
					}
				}
			}
		}
	},
	/* Warp Pipe */
	0x52: {
		NAME: "WARP PIPE SLOW",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Down */
				case 0x01 : {
					if(game.pid === pid) {
						var ply = game.getPlayer();
						var l = game.world.getZone(level, zone).getTile(vec2.make(x-1,y));
						var r = game.world.getZone(level, zone).getTile(vec2.make(x+1,y));
						
						var cx;
						if(l.definition === this) { cx = x; }
						else if(r.definition === this) { cx = x+1; }
						else { return; }
						
						if(Math.abs((ply.pos.x + (ply.dim.x*.5)) - cx) <= 0.45) { ply.pipe(2, td.data, 50); }
					}
				}
			}
		}
	},
	/* Warp Pipe Horiz */
	0x53: {
		NAME: "WARP PIPE RIGHT SLOW",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Push */
				case 0x02 : {
					if(game.pid === pid) {
						game.getPlayer().pipe(4, td.data, 50);
					}
				}
			}
		}
	},
	/* Warp Pipe */
	0x54: {
		NAME: "WARP PIPE FAST",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Down */
				case 0x01 : {
					if(game.pid === pid) {
						var ply = game.getPlayer();
						var l = game.world.getZone(level, zone).getTile(vec2.make(x-1,y));
						var r = game.world.getZone(level, zone).getTile(vec2.make(x+1,y));
						
						var cx;
						if(l.definition === this) { cx = x; }
						else if(r.definition === this) { cx = x+1; }
						else { return; }
						
						if(Math.abs((ply.pos.x + (ply.dim.x*.5)) - cx) <= 0.45) { ply.pipe(2, td.data, 0); }
					}
				}
			}
		}
	},
	/* Warp Pipe Horiz */
	0x55: {
		NAME: "WARP PIPE RIGHT FAST",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Push */
				case 0x02 : {
					if(game.pid === pid) {
						game.getPlayer().pipe(4, td.data, 0);
					}
				}
			}
		}
	},
	/* End of Level Warp */
	0x56: {
		NAME: "LEVEL END WARP",
		COLLIDE: false,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Touch */
				case 0x00 : {
					if(game.pid === pid) {
						game.levelWarp(td.data);
					}
				}
			}
		}
	},
	/* Flagpole */
	0xA0: {
		NAME: "FLAGPOLE",
		COLLIDE: false,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Touch */
				case 0x00 : {
					if(game.pid === pid) {
						var ply = game.getPlayer();
						if(ply.pos.x >= x) { ply.pole(vec2.make(x,y)); }
					}
				}
			}
		}
	},
	/* Vine */
	0xA5: {
		NAME: "VINE",
		COLLIDE: false,
		HIDDEN: false,
		ASYNC: true,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Touch */
				case 0x00 : {
					if(game.pid === pid) {
						var ply = game.getPlayer();
						if(ply.pos.x >= x && ply.pos.x <= x+1.) { ply.vine(vec2.make(x,y), td.data); }
					}
				}
			}
		}
	},
	/* Vote Block */
	0xF0: {
		NAME: "VOTE BLOCK",
		COLLIDE: true,
		HIDDEN: false,
		ASYNC: false,
		TRIGGER: function(game, pid, td, level, zone, x, y, type) {
			switch(type) {
				/* Small bump */
				case 0x10 : {
					if(game.pid === pid) { game.send({type: "g50"}); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.createObject(CheckObject.ID, level, zone, vec2.make(x,y+1), [shor2.encode(x,y)]);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					break;
				}
				/* Big bump */
				case 0x11 : {
					if(game.pid === pid) { game.send({type: "g50"}); }
					var rep = 98331; // Replacement td32 data for tile.
					game.world.getZone(level, zone).replace(x,y,rep);
					game.createObject(CheckObject.ID, level, zone, vec2.make(x,y+1), [shor2.encode(x,y)]);
					td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
					break;
				}
			}
		}
	}
};

var NETX = {}; // Main
/* ======================================================================================== */

NETX.decode = function(/* Uint8Array */ data) {
    var de = [];
    var i = 0;
    while(i<data.length) {
        var desig = data.slice(i++, i)[0];
        switch(desig) {
            case 0x02 : { de.push(NET001.decode(data.slice(i, i+=NET001.BYTES-1))); break; }
            case 0x10 : { de.push(NET010.decode(data.slice(i, i+=NET010.BYTES-1))); break; }
            case 0x11 : { de.push(NET011.decode(data.slice(i, i+=NET011.BYTES-1))); break; }
            case 0x12 : { de.push(NET012.decode(data.slice(i, i+=NET012.BYTES-1))); break; }
            case 0x13 : { de.push(NET013.decode(data.slice(i, i+=NET013.BYTES-1))); break; }
            case 0x17 : { de.push(NET017.decode(data.slice(i, i+=NET017.BYTES-1))); break; }
            case 0x18 : { de.push(NET018.decode(data.slice(i, i+=NET018.BYTES-1))); break; }
            case 0x20 : { de.push(NET020.decode(data.slice(i, i+=NET020.BYTES-1))); break; }
            case 0x30 : { de.push(NET030.decode(data.slice(i, i+=NET030.BYTES-1))); break; }
            default : { if(app) { app.menu.warn.show("Error decoding binary data!"); } return de; }
        }
    }
    return de;
};

var NET001 = {}; // ASSIGN_PID [0x1] // As Uint8Array
/* ======================================================================================== */
NET001.DESIGNATION = 0x02;
NET001.BYTES = 5;

/* Server->Client */
NET001.decode = function(/* NET001_SERV */ a) {
	return {
        designation: NET001.DESIGNATION,
        pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
        skin: (a[3] & 0x00FF) | ((a[2] << 8) & 0xFF00)
    };
};

var NET010 = {}; // CREATE_PLAYER_OBJECT [0x10] // As Uint8Array
/* ======================================================================================== */
NET010.DESIGNATION = 0x10;
NET010.BYTES = 11;

/* Client->Server */
NET010.encode = function(/* byte */ levelID, /* byte */ zoneID, /* shor2 */ pos) {
	return new Uint8Array([NET010.DESIGNATION, levelID, zoneID, (pos >> 24) & 0xFF, (pos >> 16) & 0xFF, (pos >> 8) & 0xFF, pos & 0xFF]);
};

/* Server->>>Client */
NET010.decode = function(/* NET010_SERV */ a) {
	return {
		designation: NET010.DESIGNATION,
		pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
		level: a[2],
		zone: a[3],
        pos: (a[7] & 0xFF) | ((a[6] << 8) & 0xFF00) | ((a[5] << 16) & 0xFF0000) | ((a[4] << 24) & 0xFF0000),
        skin: (a[9] & 0xFF) | a[8]
	};
};

var NET011 = {}; // KILL_PLAYER_OBJECT [0x11] // As Uint8Array
/* ======================================================================================== */
NET011.DESIGNATION = 0x11;
NET011.BYTES = 3;

/* Client->Server */
NET011.encode = function() {
	return new Uint8Array([NET011.DESIGNATION]);
};

/* Server->>>Client */
NET011.decode = function(/* NET011_SERV */ a) {
	return {
		designation: NET011.DESIGNATION, pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00)
	};
};

var NET012 = {}; // UPDATE_PLAYER_OBJECT [0x12] // As Uint8Array
/* ======================================================================================== */
NET012.DESIGNATION = 0x12;
NET012.BYTES = 15;

/* Client->Server */
NET012.encode = function(/* byte */ levelID, /* byte */ zoneID, /* vec2 */ pos, /* byte */ spriteID, /* byte */ reverse) {
	var farr = new Float32Array([pos.x, pos.y]);
	var barr = new Uint8Array(farr.buffer);
	return new Uint8Array([
		NET012.DESIGNATION, levelID, zoneID,
		barr[3], barr[2], barr[1], barr[0],
		barr[7], barr[6], barr[5], barr[4],
		spriteID,
		reverse
	]);
};

/* Server->>Client */
NET012.decode = function(/* NET012_SERV */ a) {
	var b1 = new Uint8Array([a[4], a[5], a[6], a[7]]);
	var b2 = new Uint8Array([a[8], a[9], a[10], a[11]]);
	var v1 = new DataView(b1.buffer);
	var v2 = new DataView(b2.buffer);
	
	return {
		designation: NET012.DESIGNATION,
		pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
		level: a[2],
		zone: a[3],
		pos: vec2.make(v1.getFloat32(0), v2.getFloat32(0)),
		sprite: a[12],
		reverse: a[13] !== 0
	};
};

var NET013 = {}; // PLAYER_OBJECT_EVENT [0x13] // As Uint8Array
/* ======================================================================================== */
NET013.DESIGNATION = 0x13;
NET013.BYTES = 4;

/* Client->Server */
NET013.encode = function(/* byte */ type) {
	return new Uint8Array([NET013.DESIGNATION, type]);
};

/* Server->>>Client */
NET013.decode = function(/* NET013_SERV */ a) {
	return {
		designation: NET013.DESIGNATION,
		pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
		type: a[2]
	};
};

var NET015 = {}; // PLAYER_INVALID_MOVE [0x15] // As Uint8Array
/* ======================================================================================== */
NET015.DESIGNATION = 0x15;
NET015.BYTES = 3;

/* Client->Server */
NET015.encode = function() {
	return new Uint8Array([NET015.DESIGNATION]);
};

var NET017 = {}; // PLAYER_KILL_EVENT [0x17] // As Uint8Array
/* ======================================================================================== */
NET017.DESIGNATION = 0x17;
NET017.BYTES = 5;

/* Client->Server */
NET017.encode = function(/* short */ killer) {
	return new Uint8Array([NET017.DESIGNATION, killer >> 8 & 0xFF, killer & 0xFF]);
};

/* Server->Client */
NET017.decode = function(/* NET017_SERV */ a) {
	return {
		designation: NET017.DESIGNATION,
		pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
		killer: (a[3] & 0x00FF) | ((a[2] << 8) & 0xFF00)
	};
};

var NET018 = {}; // PLAYER_RESULT_REQUEST [0x18] // As Uint8Array
/* ======================================================================================== */
NET018.DESIGNATION = 0x18;
NET018.BYTES = 5;

/* Client->Server */
NET018.encode = function() {
	return new Uint8Array([NET018.DESIGNATION]);
};

/* Server->>>Client */
NET018.decode = function(/* NET011_SERV */ a) {
	return {
		designation: NET018.DESIGNATION, pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00), result: a[2], extra: a[3]
	};
};

var NET019 = {}; // PLAYER_SNITCH [0x19] // As Uint8Array
/* ======================================================================================== */
NET019.DESIGNATION = 0x19;
NET019.BYTES = 3;

/* Client->Server */
NET019.encode = function() {
	return new Uint8Array([NET019.DESIGNATION]);
};

var NET020 = {}; // OBJECT_EVENT_TRIGGER [0x20] // As Uint8Array
/* ======================================================================================== */
NET020.DESIGNATION = 0x20;
NET020.BYTES = 10;

/* Client->Server */
NET020.encode = function(/* byte */ levelID, /* byte */ zoneID, /* int */ oid, /* byte */ type) {
	return new Uint8Array([
		NET020.DESIGNATION, levelID, zoneID,
		(oid >> 24) & 0xFF, (oid >> 16) & 0xFF, (oid >> 8) & 0xFF, oid & 0xFF,
		type
	]);
};

/* Server->>>Client */
NET020.decode = function(/* NET020_SERV */ a) {
	return {
		designation: NET020.DESIGNATION,
		pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
		level: a[2],
		zone: a[3],
		oid: (a[7] & 0xFF) | ((a[6] << 8) & 0xFF00) | ((a[5] << 16) & 0xFF0000) | ((a[4] << 24) & 0xFF0000),
		type: a[8]
	};
};

var NET030 = {}; // TILE_EVENT_TRIGGER [0x30] // As Uint8Array
/* ======================================================================================== */
NET030.DESIGNATION = 0x30;
NET030.BYTES = 10;

/* Client->Server */
NET030.encode = function(/* byte */ levelID, /* byte */ zoneID, /* shor2 */ pos, /* byte */ type) {
	return new Uint8Array([
		NET030.DESIGNATION, levelID, zoneID,
		(pos >> 24) & 0xFF, (pos >> 16) & 0xFF, (pos >> 8) & 0xFF, pos & 0xFF,
		type
	]);
};

/* Server->/>Client */
NET030.decode = function(/* NET030_SERV */ a) {
	return {
		designation: NET030.DESIGNATION,
		pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
		level: a[2],
		zone: a[3],
		pos: shor2.decode((a[7] & 0xFF) | ((a[6] << 8) & 0xFF00) | ((a[5] << 16) & 0xFF0000) | ((a[4] << 24) & 0xFF0000)),
		type: a[8]
	};
};

/* Merges all Uint8Arrays into one */
var MERGE_BYTE = function(/* Uint8Array[] */ a) {
	var data = [];
	for(var i=0;i<a.length;i++) {
		for(var j=0;j<a[i].length;j++) {
			data.push(a[i][j]);
		}
	}
	return new Uint8Array(data);
};
"use strict";
var squar = {};

squar.intersection = function(_0x43a044, _0x59c3e0, _0x4eb9a3, _0x4741a0) {
    return _0x4eb9a3.x < _0x43a044.x + _0x59c3e0.x && _0x4eb9a3.x + _0x4741a0.x > _0x43a044.x && _0x4eb9a3.y < _0x43a044.y + _0x59c3e0.y && _0x4eb9a3.y + _0x4741a0.y > _0x43a044.y;
};
squar.inside = function(_0x15c2a5, _0x1957cd, _0x4042e7) {
    return _0x1957cd.x < _0x15c2a5.x && _0x1957cd.x + _0x4042e7.x > _0x15c2a5.x && _0x1957cd.y < _0x15c2a5.y && _0x1957cd.y + _0x4042e7.y > _0x15c2a5.y;
};
"use strict";

function Menu() {
    this.body = document.getElementsByTagName("BODY")[0];
    window.history.pushState({
        'html': "index.html",
        'pageTitle': "Mario Royale"
    }, '', '#');
    var screens = [{
        'id': "warn",
        'obj': new WarnScreen()
    }, {
        'id': "error",
        'obj': new ErrorScreen()
    }, {
        'id': "load",
        'obj': new LoadScreen()
    }, {
        'id': "disclaim",
        'obj': new DisclaimScreen()
    }, {
        'id': "main",
        'obj': new MainScreen()
    }, {
        'id': "mainAsMember",
        'obj': new MainAsMemberScreen()
    }, {
        'id': "profile",
        'obj': new ProfileScreen()
    }, {
        'id': "pwdChange",
        'obj': new PwdChangeScreen()
    }, {
        'id': "name",
        'obj': new NameScreen()
    }, {
        'id': "login",
        'obj': new LoginScreen()
    }, {
        'id': "register",
        'obj': new RegisterScreen()
    }, {
        'id': "game",
        'obj': new GameScren()
    }];
    this.menus = [];
    for (var i = 0x0; i < screens.length; i++) this.menus[i] = screens[i].obj, this[screens[i].id] = screens[i].obj;
    this.lastNav = '';
    var menu = this;
    window.onpopstate = function(screens) {
        if (menu[menu.lastNav] && menu[menu.lastNav].onBack) menu.onBack();
        else screens.state && "Mario Royale" !== screens.state.pageTitle ? (
            document.getElementById("content").innerHTML = screens.state.html,
            document.title = screens.state.pageTitle)
        : screens.state && "Mario Royale" === screens.state.pageTitle && window.history.back();
    };
    this.hideAll();
    this.background('c');
    this.body.style.display = "block";
}
Menu.prototype.hideAll = function() {
    for (var i = 0x1; i < this.menus.length; i++) this.menus[i].hide();
};
Menu.prototype.background = function(_0x36dd53) {
    if (_0x36dd53 !== this.bid) {
        switch (_0x36dd53) {
            case 'b':
                _0x36dd53 = "background-b";
                break;
            case 'c':
                _0x36dd53 = "background-c";
                break;
            default:
                _0x36dd53 = "background-a";
        }
        this.body.classList.remove("background-a");
        this.body.classList.remove("background-b");
        this.body.classList.remove("background-c");
        this.body.classList.add(_0x36dd53);
    }
};
Menu.prototype.navigation = function(lastNav, title) {
    this.lastNav = lastNav;
    window.history.replaceState({
        'html': "index.html",
        'pageTitle': "Mario Royale"
    }, title, '#' + title);
};
Menu.prototype.onBack = function() {
    window.history.pushState({
        'html': "index.html",
        'pageTitle': "Mario Royale"
    }, '', '#');
    this[this.lastNav].onBack();
};
"use strict";

function WarnScreen() {
    this.element = document.getElementById("warn");
    this.hide();
    this.timeout = undefined;
}
WarnScreen.prototype.show = function(_0x281bdb) {
    this.element.innerHTML = "<img src='img/home/warn.png' class='warn-ico'/> " + _0x281bdb;
    console.warn("##WARN## " + _0x281bdb);
    this.timeout && clearTimeout(this.timeout);
    var _0x2893b1 = this.element;
    this.timeout = setTimeout(function() {
        _0x2893b1.style.display = "none";
    }, 0x1388);
    this.element.style.display = "block";
};
WarnScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function ErrorScreen() {
    this.element = document.getElementById("error");
    this.error = document.getElementById("error-message");
}
ErrorScreen.prototype.show = function(mainError, consoleError, consoleTrace) {
    app.net.close();
    app.menu.hideAll();
    app.menu.navigation("error", "error");
    app.menu.background('b');
    this.error.innerHTML = mainError;
    mainError && console.error("##ERROR## " + mainError);
    consoleError && console.warn("##ERROR## " + consoleError);
    consoleTrace && console.warn("##TRACE## " + consoleTrace);
    this.element.style.display = "block";
};
ErrorScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function LoadScreen() {
    this.element = document.getElementById("load");
}
LoadScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.background('a');
    this.element.style.display = "block";
};
LoadScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function DisclaimScreen() {
    this.element = document.getElementById("disclaim");
    this.linkElement = document.getElementById("link");
}
DisclaimScreen.prototype.show = function(_0x2243c7) {
    app.menu.hideAll();
    app.menu.background('c');
    this.linkElement.style.display = "block";
    this.element.style.display = "block";
};
DisclaimScreen.prototype.hide = function() {
    this.linkElement.style.display = "none";
    this.element.style.display = "none";
};
"use strict";

function MainScreen() {
    this.element = document.getElementById("main");
    this.linkElement = document.getElementById("link");
    this.winElement = document.getElementById("win");
    this.launchBtn = document.getElementById("main-launch");
    this.loginBtn = document.getElementById("main-login");
    this.registerBtn = document.getElementById("main-register");
    this.number = document.getElementById("main-number");
    this.padLoop = undefined;
    var mainscreen = this;
    this.launchBtn.onclick = function() {
        mainscreen.launch();
    };
    this.loginBtn.onclick = function() {
        mainscreen.showLogin();
    };
    this.registerBtn.onclick = function() {
        mainscreen.showRegister();
    };
}
MainScreen.prototype.launch = function() {
    app.menu.name.show();
};

MainScreen.prototype.showLogin = function() {
    app.menu.login.show();
};

MainScreen.prototype.showRegister = function() {
    app.menu.register.show();
    app.requestCaptcha();
};

MainScreen.prototype.startPad = function() {
    var _0x3c5a9a = this,
        _0x2568a6 = isNaN(parseInt(Cookies.get("g_a"))) ? 0x0 : parseInt(Cookies.get("g_a")),
        _0x293832 = !0x1,
        _0x4736e8 = function() {
            var _0x7d296b;
            navigator && (_0x7d296b = navigator.getGamepads()[0x0]);
            _0x7d296b && !_0x7d296b.buttons[_0x2568a6].pressed && _0x293832 && _0x3c5a9a.launch();
            _0x7d296b && (_0x293832 = _0x7d296b.buttons[_0x2568a6].pressed);
            _0x3c5a9a.padLoop = setTimeout(_0x4736e8, 0x21);
        };
    _0x4736e8();
};
MainScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("main", "main");
    app.menu.background('a');
    var wins = Cookies.get("epic_gamer_moments");
    var deaths = Cookies.get("sad_gamer_moments"),
        kills = Cookies.get("heated_gamer_moments"),
        coins = Cookies.get("dosh");
    this.winElement.style.display = "block";
    this.winElement.innerHTML = "Wins x" + (wins ? wins : '0') + 
        "<span class='death'>Deaths x" + (deaths ? deaths : '0') +"</span>"+
        "<span class='kill'>Kills x" + (kills ? kills : '0') + "</span>"+
        "<span class='kill'>Coins x" + (coins ? coins : '0') + "</span>";
    this.startPad();
    this.linkElement.style.display = "block";
    this.element.style.display = "block";
    session = Cookies.get("session");
    if (session != undefined) {
        app.resumeSession(session);
    }
};
MainScreen.prototype.hide = function() {
    this.padLoop && clearTimeout(this.padLoop);
    this.linkElement.style.display = "none";
    this.element.style.display = "none";
};
"use strict";

function MainAsMemberScreen() {
    this.element = document.getElementById("mainAsMember");
    this.linkElement = document.getElementById("link");
    this.charMusicToggle = document.getElementById("mainAsMember-char-music-toggle");
    this.launchBtn = document.getElementById("mainAsMember-launch");
    this.profileBtn = document.getElementById("mainAsMember-profile");
    this.pwdBtn = document.getElementById("mainAsMember-pwd");
    this.logoutBtn = document.getElementById("mainAsMember-logout");
    this.privateBtn = document.getElementById("mainAsMember-private-toggle");
    this.gmBtn = document.getElementById("mainAsMember-gm-change");
    this.onlineNum = document.getElementById("mainAsMember-number");
    this.isPrivate = false;
    this.gameMode = 0;
    var that = this;
    this.launchBtn.onclick = function() {
        that.launch();
    };
    this.profileBtn.onclick = function() {
        that.showProfile();
    };
    this.pwdBtn.onclick = function() {
        that.showPwdChange();
    };
    this.logoutBtn.onclick = function() {
        that.logout();
    };
    this.privateBtn.onclick = function() {
        that.isPrivate = !that.isPrivate;
        that.updPrivateBtn();
        Cookies.set("mpriv", that.isPrivate, {
            'expires': 0x1e
        });
    };
    this.charMusicToggle.onclick = function() {
        app.charMusic = !app.charMusic;
        that.updMusicBtn();
        Cookies.set("char_music", app.charMusic ? "1" : "0", {
            'expires': 0x1e
        });
    }
    this.gmBtn.onclick = function() {
        that.gameMode = (that.gameMode+1) % GAMEMODES.length;
        that.updGameModeBtn();
        Cookies.set("gamemode", that.gameMode, {
            'expires': 0x1e
        });
    }
}

MainAsMemberScreen.prototype.show = function(data) {
    app.menu.hideAll();
    app.menu.background('a');
    if (data === undefined) {
        this.element.style.display = "block";
        return;
    }
    if (data.session != undefined) {
        Cookies.set("session", data.session, {
            'expires': 0x1e
        });
    }
    var savedPriv = Cookies.get("mpriv");
    var savedGm = Cookies.get("gamemode");
    this.nickname = data.nickname;
    this.squad = data.squad;
    this.skin = data.skin;
    this.isPrivate = savedPriv ? (savedPriv == "true") : false;
    this.gameMode = savedGm ? parseInt(savedGm) : 0;
    this.updPrivateBtn();
    this.updMusicBtn();
    this.updGameModeBtn();
    this.linkElement.style.display = "block";
    this.element.style.display = "block";
    if (app.goToLobby) {
        this.launch();
    } else {
        var that = this;
        var updateStatus = function() {
            $.ajax({
                'url': "status",
                'type': "GET",
                'timeout': 0xbb8,
                'success': function(_0x497cbd) {
                    if (!_0x497cbd.result) {
                        that.onlineNum.innerHTML = _0x497cbd.active;
                    }
                },
                cache: false
            });
        };
    
        updateStatus();
        app.statusUpdater = setInterval(updateStatus, 1000);
    }
};
MainAsMemberScreen.prototype.hide = function() {
    this.linkElement.style.display = "none";
    this.element.style.display = "none";
};

MainAsMemberScreen.prototype.launch = function() {
    app.join(this.nickname, this.squad, this.isPrivate, this.skin, this.gameMode);
};

MainAsMemberScreen.prototype.showProfile = function() {
    app.menu.profile.show({"nickname": this.nickname, "squad": this.squad, "skin": this.skin});
};
MainAsMemberScreen.prototype.showPwdChange = function() {
    app.menu.pwdChange.show();
};
MainAsMemberScreen.prototype.logout = function() {
    app.logout();
};
MainAsMemberScreen.prototype.updPrivateBtn = function() {
    if (!this.isPrivate) {
        this.privateBtn.classList.add("disabled");
        this.privateBtn.classList.remove("enabled");

        this.launchBtn.style.color = "";
        this.launchBtn.classList.remove("tooltip");
        if (this.launchBtn.lastChild.nodeName == "SPAN") {
            this.launchBtn.removeChild(this.launchBtn.lastChild);
        }
    } else {
        this.privateBtn.classList.add("enabled");
        this.privateBtn.classList.remove("disabled");

        this.launchBtn.style.color = "yellow";
        this.launchBtn.classList.add("tooltip");

        var elem = document.createElement("span");
        elem.classList.add("tooltiptext");
        elem.innerText = "You're joining to a private room!"
        this.launchBtn.appendChild(elem);
    }
};
MainAsMemberScreen.prototype.updMusicBtn = function() {
    if (!app.charMusic) {
        this.charMusicToggle.classList.add("disabled");
        this.charMusicToggle.classList.remove("enabled");
    } else {
        this.charMusicToggle.classList.add("enabled");
        this.charMusicToggle.classList.remove("disabled");
    }
}
MainAsMemberScreen.prototype.updGameModeBtn = function() {
    for (var i=0; i<GAMEMODES.length; i++) {
        this.gmBtn.classList.remove(GAMEMODES[i]);
    }
    this.gmBtn.classList.add(GAMEMODES[this.gameMode]);
    const capitalize = function(s) { return s.charAt(0).toUpperCase() + s.slice(1) }
    this.gmBtn.firstElementChild.innerHTML = "Change the current game mode<br><font size='2'>Current one is: <u>" + capitalize(GAMEMODES[this.gameMode]) + "</u></font>";
}
function genSelectSkin(screen, skinIdx) {
    if (screen.skin !== undefined) {
        document.getElementById(screen.skinButtonPrefix+screen.skin).style["border-color"] = "black";
    }
    screen.skin = skinIdx;
    var elem = document.getElementById(screen.skinButtonPrefix+screen.skin);
    if (elem) {
        elem.style["border-color"] = "white";
    } else {
        screen.skin = 0;
        document.getElementById(screen.skinButtonPrefix+screen.skin).style["border-color"] = "white";
    }
}

function genAddSkinButton(screen) {
    for (var i=0; i<SKINCOUNT; i++) {
        if (DEV_SKINS.includes(i) && (!(screen instanceof ProfileScreen) || !(
           ["taliondiscord",
            "damonj17",
            "ddmil@marioroyale:~$",
            "pixelcraftian",
            "igor",
            "minus",
            "cyuubi",
            "gyorokpeter",
            "zizzydizzymc",
            "nuts & milk",
            "jupitersky",
            "nethowarrior",
            "real novex",
            "nightyoshi370"].includes(app.net.username.toLowerCase())))) {
            continue;
        }
        var elem = document.createElement("div");
        elem.setAttribute("class", "skin-select-button");
        elem.setAttribute("id", screen.skinButtonPrefix+i);
        elem.style["background-image"] = "url('img/game/smb_skin" + i +".png')";
        elem.addEventListener("click", (function(a){return function() {genSelectSkin(screen, a);};})(i));
        document.getElementById(screen.skinButtonPrefix).appendChild(elem);
    }
}

function NameScreen() {
    this.element = document.getElementById("name");
    this.linkElement = document.getElementById("link");
    this.nameInput = document.getElementById("name-input");
    this.teamInput = document.getElementById("team-input");
    this.charMusicToggle = document.getElementById("char-music-toggle");
    this.backBtn = document.getElementById("name-back");
    this.isPrivate = false;
    this.gameMode = 0;
    this.privateBtn = document.getElementById("name-private-toggle");
    this.gmBtn = document.getElementById("name-gm-change");
    this.launchBtn = document.getElementById("name-launch");
    this.padLoop = undefined;
    this.skinButtonPrefix = "skin-select";
    var that = this;
    for (var i=0; i<levelSelectors.length; i++) {
        var k = levelSelectors[i];
        var elem = document.createElement("div")
        elem.setAttribute("class", "levelSelectButton");
        elem.innerText = k.shortId;
        elem.addEventListener("click", (function(a){return function() {that.selectLevel(a);};})(k.longId));
        document.getElementById("levelSelectStandard").appendChild(elem);
        levelSelectors[i].elem = elem;
    }
    var elem = document.getElementById("levelSelectInput");
    elem.addEventListener("change", (function(){return function(event) {that.customLevelFileChangeHandler(this, event);};})());
    this.launchBtn.onclick = function() {
        that.launch();
    };
    this.teamInput.onkeyup = function() {
        if (that.teamInput.value.trim() === "" && that.isPrivate) {
            that.teamInput.placeholder = "[ PRIVATE ]";
        } else 
            that.teamInput.placeholder = "Squad Code";
    }
    this.privateBtn.onclick = function() {
        that.isPrivate = !that.isPrivate;
        that.updPrivateBtn();
        Cookies.set("priv", that.isPrivate, {
            'expires': 0x1e
        });
        if (that.teamInput.value.trim() === "" && that.isPrivate) {
            that.teamInput.placeholder = "[ PRIVATE ]";
        } else 
            that.teamInput.placeholder = "Squad Code";
    };
    this.charMusicToggle.onclick = function() {
        app.charMusic = !app.charMusic;
        that.updMusicBtn();
        Cookies.set("char_music", app.charMusic ? "1" : "0", {
            'expires': 0x1e
        });
    }
    this.gmBtn.onclick = function() {
        that.gameMode = (that.gameMode+1) % GAMEMODES.length;
        that.updGameModeBtn();
        Cookies.set("gamemode", that.gameMode, {
            'expires': 0x1e
        });
    }
    this.backBtn.onclick = function() {
        that.onBack();
    };
};

NameScreen.prototype.updPrivateBtn = function() {
    if (!this.isPrivate) {
        this.privateBtn.classList.add("disabled");
        this.privateBtn.classList.remove("enabled");

        this.launchBtn.style.color = "";
        this.launchBtn.classList.remove("tooltip");
        if (this.launchBtn.lastChild.nodeName == "SPAN") {
            this.launchBtn.removeChild(this.launchBtn.lastChild);
        }
    } else {
        this.privateBtn.classList.add("enabled");
        this.privateBtn.classList.remove("disabled");

        this.launchBtn.style.color = "yellow";
        this.launchBtn.classList.add("tooltip");

        var elem = document.createElement("span");
        elem.classList.add("tooltiptext");
        elem.innerText = "You're joining to a private room!"
        this.launchBtn.appendChild(elem);
    }
}

NameScreen.prototype.updMusicBtn = function() {
    if (!app.charMusic) {
        this.charMusicToggle.classList.add("disabled");
        this.charMusicToggle.classList.remove("enabled");
    } else {
        this.charMusicToggle.classList.add("enabled");
        this.charMusicToggle.classList.remove("disabled");
    }
}

NameScreen.prototype.updGameModeBtn = function() {
    for (var i=0; i<GAMEMODES.length; i++) {
        this.gmBtn.classList.remove(GAMEMODES[i]);
    }
    this.gmBtn.classList.add(GAMEMODES[this.gameMode]);
    const capitalize = function(s) { return s.charAt(0).toUpperCase() + s.slice(1) }
    this.gmBtn.firstElementChild.innerHTML = "Change the current game mode<br><font size='2'>Current one is: <u>" + capitalize(GAMEMODES[this.gameMode]) + "</u></font>";
}

NameScreen.prototype.selectSkin = function(skinIdx) {
    genSelectSkin(this, skinIdx);
}

NameScreen.prototype.selectLevel = function(levelKey) {
    app.net.send({'type':'gsl', 'name':levelKey});
}

NameScreen.prototype.updateLevelSelectButton = function(name) {
    if (this.currLevelSelectButton != undefined) {
        this.currLevelSelectButton.style["border-color"] = "black";
    }
    if (name == "custom") {
        elem = document.getElementById("levelSelectCustom");
    } else {
        for (var i = 0; i<levelSelectors.length; i++) {
            if (levelSelectors[i].longId == name) {
                elem = levelSelectors[i].elem;
                break;
            }
        }
    }
    elem.style["border-color"] = "white";
    this.currLevelSelectButton = elem;
}

NameScreen.prototype.customLevelFileChangeHandler = function(elem, event) {
    var files = event.target.files;
    if (files.length == 0) return;
    var reader = new FileReader();
    reader.onload = function(event) {
        app.net.send({'type':'gsl', 'name':'custom', 'data':event.target.result});
    }
    reader.readAsText(files[0]);
}

NameScreen.prototype.launch = function() {
    Cookies.set("name", this.nameInput.value, {
        'expires': 0x1e
    });
    Cookies.set("team", this.teamInput.value, {
        'expires': 0x1e
    });
    Cookies.set("skin", this.skin, {
        'expires': 0x1e
    });
    app.join(this.nameInput.value, this.teamInput.value, this.isPrivate, this.skin, this.gameMode);
};
NameScreen.prototype.startPad = function() {
    var _0x3bcc0f = this,
        _0x87dd6d = isNaN(parseInt(Cookies.get("g_a"))) ? 0x0 : parseInt(Cookies.get("g_a")),
        _0xfd3c5a = !0x1,
        _0x4a0646 = function() {
            var _0x52b682;
            navigator && (_0x52b682 = navigator.getGamepads()[0x0]);
            _0x52b682 && !_0x52b682.buttons[_0x87dd6d].pressed && _0xfd3c5a && _0x3bcc0f.launch();
            _0x52b682 && (_0xfd3c5a = _0x52b682.buttons[_0x87dd6d].pressed);
            _0x3bcc0f.padLoop = setTimeout(_0x4a0646, 0x21);
        };
    _0x4a0646();
};
NameScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("name", "name");
    app.menu.background('a');
    var savedName = Cookies.get("name"),
        savedTeam = Cookies.get("team"),
        savedPriv = Cookies.get("priv"),
        savedSkin = Cookies.get("skin"),
        savedGm = Cookies.get("gamemode");
    this.nameInput.value = savedName ? savedName : '';
    this.teamInput.value = savedTeam ? savedTeam : '';
    this.isPrivate = savedPriv ? (savedPriv == "true") : false;
    this.gameMode = savedGm ? parseInt(savedGm) : 0;
    if (this.teamInput.value.trim() === "" && this.isPrivate) {
        this.teamInput.placeholder = "[ PRIVATE ]";
    }
    if ($("#skin-select div").length === 0) {
        genAddSkinButton(this);
        $("#skin-select").pagify(33, ".skin-select-button");
    }
    this.selectSkin(savedSkin ? parseInt(savedSkin) : 0);
    this.updPrivateBtn();
    this.updMusicBtn();
    this.updGameModeBtn();
    this.startPad();
    this.linkElement.style.display = "block";
    this.element.style.display = "block";
};
NameScreen.prototype.hide = function() {
    this.padLoop && clearTimeout(this.padLoop);
    this.linkElement.style.display = "none";
    this.element.style.display = "none";
};
NameScreen.prototype.onBack = function() {
    app.menu.main.show();
};
"use strict";

function ProfileScreen() {
    this.element = document.getElementById("profile");
    this.saveBtn = document.getElementById("profile-save");
    this.nicknameInput = document.getElementById("profile-nickname");
    this.squadInput = document.getElementById("profile-team");
    this.skinButtonPrefix = "profile-skin-select";
    var that = this;
    this.saveBtn.onclick = function() {
        that.save();
    };
}
ProfileScreen.prototype.show = function(data) {
    app.menu.hideAll();
    app.menu.navigation("profile", "profile");
    app.menu.background('a');
    this.nicknameInput.value = data["nickname"];
    this.squadInput.value = data["squad"];
    if ($("#profile-skin-select div").length === 0) {
        genAddSkinButton(this);
        $("#profile-skin-select").pagify(33, ".skin-select-button");
    }
    genSelectSkin(this, data["skin"]);
    this.element.style.display = "block";
};
ProfileScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
ProfileScreen.prototype.save = function() {
    app.net.send({
        "type": "lpr",
        "nickname": this.nicknameInput.value,
        "squad": this.squadInput.value,
        "skin": this.skin
    });
    app.menu.mainAsMember.show({"nickname" : this.nicknameInput.value, "squad": this.squadInput.value, "skin": this.skin});
}
ProfileScreen.prototype.onBack = function() {
    this.save();
};
"use strict";

function PwdChangeScreen() {
    this.element = document.getElementById("pwd");
    this.saveBtn = document.getElementById("pwd-save");
    this.passwordInput = document.getElementById("pwd-password-input");
    this.passwordInput2 = document.getElementById("pwd-password2-input");
    this.resultLabel = document.getElementById("pwdResult");
    this.backBtn = document.getElementById("pwd-back");
    var that = this;
    this.saveBtn.onclick = function() {
        that.save();
    };
    this.backBtn.onclick = function() {
        that.onBack();
    };
}
PwdChangeScreen.prototype.show = function(data) {
    app.menu.hideAll();
    app.menu.navigation("pwdChange", "pwdChange");
    app.menu.background('a');
    this.element.style.display = "block";
};
PwdChangeScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
PwdChangeScreen.prototype.reportError = function(message) {
    this.resultLabel.style.color = "red";
    this.resultLabel.innerText = message;
};
PwdChangeScreen.prototype.save = function() {
    this.reportError("");
    var pw = this.passwordInput.value;
    var pw2 = this.passwordInput2.value;
    if (pw.length < 8) {
        this.reportError("Password is too short");
        return;
    }
    if (pw != pw2) {
        this.reportError("Passwords don't match");
        return;
    }
    app.net.send({
        "type": "lpc",
        "password": pw
    });
    app.menu.mainAsMember.show();
}
PwdChangeScreen.prototype.onBack = function() {
    app.menu.mainAsMember.show();
};
"use strict";

function LoginScreen() {
    this.element = document.getElementById("login");
    this.form = document.getElementById("login-form");
    this.userNameInput = document.getElementById("login-username-input");
    this.passwordInput = document.getElementById("login-password-input");
    this.launchBtn = document.getElementById("login-do");
    this.backBtn = document.getElementById("login-back");
    this.resultLabel = document.getElementById("loginResult");
    var that = this;
    this.form.onsubmit = function(e) {
        e.preventDefault(); // Don't let the page be redirected
    }
    this.launchBtn.onclick = function() {
        that.launch();
    };
    this.backBtn.onclick = function() {
        that._onBack();
    };
}
LoginScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("login", "login");
    app.menu.background('a');
    this.element.style.display = "block";
};
LoginScreen.prototype.hide = function() {
    this.element.style.display = "none";
};

LoginScreen.prototype._onBack = function() {
    app.menu.main.show();
};
LoginScreen.prototype.reportError = function(message) {
    this.resultLabel.style.color = "red";
    this.resultLabel.innerText = message;
};
LoginScreen.prototype.launch = function() {
    this.reportError("");
    var userName = this.userNameInput.value;
    var pw = this.passwordInput.value;
    if (userName.length < 3) {
        this.reportError("Username is too short");
        return;
    }
    if (pw.length < 3) {
        this.reportError("Password is too short");
        return;
    }
    app.login(userName, pw);
};

function RegisterScreen() {
    this.element = document.getElementById("register");
    this.form = document.getElementById("register-form");
    this.userNameInput = document.getElementById("register-username-input");
    this.passwordInput = document.getElementById("register-password-input");
    this.passwordInput2 = document.getElementById("register-password2-input");
    this.captchaInput = document.getElementById("register-captcha-input");
    this.launchBtn = document.getElementById("register-do");
    this.backBtn = document.getElementById("register-back");
    this.resultLabel = document.getElementById("registerResult");
    var that = this;
    this.form.onsubmit = function(e) {
        e.preventDefault(); // Don't let the page be redirected
    }
    this.launchBtn.onclick = function() {
        that.launch();
    };
    this.backBtn.onclick = function() {
        that._onBack();
    };
}
RegisterScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("register", "register");
    app.menu.background('a');
    this.element.style.display = "block";
};
RegisterScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
RegisterScreen.prototype._onBack = function() {
    app.menu.main.show();
};
RegisterScreen.prototype.reportError = function(message) {
    this.resultLabel.style.color = "red";
    this.resultLabel.innerText = message;
};
RegisterScreen.prototype.launch = function() {
    this.reportError("");
    var userName = this.userNameInput.value;
    var pw = this.passwordInput.value;
    var pw2 = this.passwordInput2.value;
    var captcha = this.captchaInput.value;
    if (userName.length < 3) {
        this.reportError("Username is too short");
        return;
    }
    if (userName.length > 20) {
        this.reportError("Username is too long");
        return;
    }
    if (pw.length < 8) {
        this.reportError("Password is too short");
        return;
    }
    if (pw != pw2) {
        this.reportError("Passwords don't match");
        return;
    }
    if (captcha.length != 5) {
        this.reportError("Invalid captcha");
        return;
    }
    app.register(userName, pw, captcha);
};


function GameScren() {
    this.element = document.getElementById("game");
}
GameScren.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("game", "game");
    app.menu.background('c');
    this.element.style.display = "block";
};
GameScren.prototype.hide = function() {
    this.element.style.display = "none";
};
GameScren.prototype.onBack = function() {
    app.close();
};
"use strict";

function Network() {
    this.pendingArgs = [];
}
Network.CONNECTTYPE = {};
Network.CONNECTTYPE.GUEST = 0;
Network.CONNECTTYPE.LOGIN = 1;
Network.CONNECTTYPE.REQ_CAPTCHA = 2;
Network.CONNECTTYPE.REGISTER = 3;
Network.CONNECTTYPE.RESUME = 4;
Network.prototype.connected = function() {
    return undefined !== this.webSocket && this.webSocket.readyState !== WebSocket.CLOSED;
};
Network.prototype.openWs = function(args) {
    var net = this;
    if (this.connected()) {
        app.menu.error.show("Connection already open. State error.");
        return;
    }
    this.webSocket = new WebSocket(WEBSOCKET_SERVER);
    this.webSocket.binaryType = "arraybuffer";
    this.webSocket.onopen = function(name) {
        "open" !== name.type && app.menu.error.show("Error. WS open event has unexpected result.");
    };
    this.webSocket.onmessage = function(name) {
        name.data instanceof ArrayBuffer ? net.handleBinary(new Uint8Array(name.data)) : net.handlePacket(JSON.parse(name.data));
    };
    this.webSocket.onclose = function(name) {
        net.webSocket = undefined;
        document.getElementById("privLobby").style.display = "none";
        app.menu.error.show("Connection Interrupted");
    };
};
//connectType, name, team, priv, skin, gameMode
Network.prototype.connect = function(args) {
    var conn = this.connected();
    this.pendingArgs = [];
    if (0 == args.length) {
        return;
    } 
    if (!conn) {
        this.pendingArgs = args;
        this.openWs(args);
        return;
    }
    connectType = args[0];
    if (connectType == Network.CONNECTTYPE.GUEST) {
        var name = args[1];
        var team = args[2];
        var priv = args[3];
        var skin = args[4];
        var gm = args[5];
        this.prefName = name;
        this.prefTeam = team;
        this.isPrivate = priv;
        this.skin = skin;
        this.gameMode = gm;
        this.send({
            'type': "l00",
            'name': this.prefName,
            'team': this.prefTeam,
            'private': this.isPrivate,
            'skin': this.skin,
            'gm': this.gameMode
        });
    } else if (connectType == Network.CONNECTTYPE.LOGIN) {
        var username = args[1];
        this.send({
            'type': "llg",
            'username': username,
            'password': args[2]
        });
    } else if (connectType == Network.CONNECTTYPE.REQ_CAPTCHA) {
        this.send({
            'type': "lrc"
        });
    } else if (connectType == Network.CONNECTTYPE.REGISTER) {
        var username = args[1];
        this.username = username;
        this.send({
            'type': "lrg",
            'username': this.username,
            'password': args[2],
            'captcha': args[3]
        });
    } else if (connectType == Network.CONNECTTYPE.RESUME) {
        var session = args[1];
        this.session = session;
        this.send({
            'type': "lrs",
            'session': this.session,
        });
    } else {
        console.error("args = " + args);
        app.menu.error.show("Assert failed in Net.connect");
    }
};
Network.prototype.handlePacket = function(data) {
    if (undefined === this.state || !this.state.handlePacket(data)) switch (data.type) {
        case "s00":
            this.setState(data.state);
            break;
        case "s01":
            this.handleBlob(data.packets);
            break;
        case "s02":
            break;
        case "x00":
            app.menu.error.show("Server Exception", data.message);
            break;
        case "x01":
            app.menu.error.show("Server Exception", data.message, data.trace);
            break;
        default:
            app.menu.error.show("Recieved invalid packet type: " + data.type, JSON.stringify(data));
    }
};
Network.prototype.handleBinary = function(data) {
    this.state.handleBinary(data);
};
Network.prototype.handleBlob = function(packets) {
    for (var i = 0x0; i < packets.length; i++) this.handlePacket(packets[i]);
};
Network.prototype.setState = function(newState) {
    undefined !== this.state && this.state.destroy();
    switch (newState) {
        case 'l':
            this.state = new InputState(this.pendingArgs);
            break;
        case 'g':
            this.state = new GameState();
            break;
        default:
            app.menu.error.show("Received invalid state ID: " + newState);
            return;
    }
    this.state.ready();
};
Network.prototype.send = function(_0x2756bb) {
    this.webSocket.send(JSON.stringify(_0x2756bb));
};
Network.prototype.sendBinary = function(_0x25450f) {
    this.webSocket.send(_0x25450f.buffer);
};
Network.prototype.close = function() {
    undefined !== this.webSocket && this.webSocket.close();
    app.ingame() && app.game.destroy();
};
"use strict";

function InputState(pendingArgs) {
    this.pendingArgs = pendingArgs;
}
InputState.prototype.handlePacket = function(data) {
    switch (data.type) {
        case "l01":
            return this.loggedIn(data), !0x0;
        case "llg":
            return this.handleLoginResult(data), !0x0;
        case "lrc":
            return this.handleRequestCaptcha(data), !0x0;
        case "lrg":
            return this.handleRegisterResult(data), !0x0;
        case "lrs":
            return this.handleLoginResult(data), !0x0;
        case "llo":
            return this.handleLogoutResult(data), !0x0;
        default:
            return !0x1;
    }
};
InputState.prototype.handleBinary = function(data) {
    app.menu.warn.show("Recieved unexpected binary data!");
};
InputState.prototype.ready = function() {
    app.net.connect(app.net.pendingArgs);
};
InputState.prototype.loggedIn = function(data) {
    app.net.name = data.name;
    console.log("Logged in: " + data.name + " :: " + data.team);
};
InputState.prototype.handleLogoutResult = function(data) {
    Cookies.remove("session");
    Cookies.remove("go_to_lobby");
    location.reload();
};
InputState.prototype.handleLoginResult = function(data) {
    if (data.status) {
        app.net.username = data.username;
        app.menu.mainAsMember.show(data.msg);
    } else {
        Cookies.remove("session");
        app.menu.login.show();
        app.menu.login.reportError(data.msg);
    }
};
InputState.prototype.handleRequestCaptcha = function(data) {
    if (data.data) {
        var img = document.getElementById("register-captcha");
        img.src = "data:image/png;base64, " + data.data;
    } else {
        document.getElementById('register-captcha-input').style.display = 'none';
    }
    app.menu.register.show();
};
InputState.prototype.handleRegisterResult = function(data) {
    if (data.status) {
        app.menu.mainAsMember.show(data.msg);
    } else {
        app.menu.register.show();
        app.menu.register.reportError(data.msg);
    }
};
InputState.prototype.send = function(data) {
    app.net.send(data);
};
InputState.prototype.type = function() {
    return 'l';
};
InputState.prototype.destroy = function() {};
"use strict";

function GameState() {
    this.pingOut = !0x1;
    this.pingLast = 0x0;
    this.pingFrame = 0x5a;
}
GameState.prototype.handlePacket = function(data) {
    switch (data.type) {
        case "g01":
            return this.load(data), !0x0;
        case "g06":
            return this.globalWarn(data), !0x0;
        case "g21":
            return this.recievePing(data), !0x0;
        case "gsl":
            return this.recieveLevelSelectResult(data), !0x0;
        default:
            return app.ingame() ? app.game.handlePacket(data) : !0x1;
    }
};
GameState.prototype.handleBinary = function(data) {
    app.ingame() && app.game.handleBinary(data);
};
GameState.prototype.ready = function() {
    this.send({
        'type': "g00"
    });
};
GameState.prototype.load = function(data) {
    var gameState = this;
    if (data.game == "custom") {
        var levelData = JSON.parse(data.levelData);
        app.load(levelData);
        gameState.send({
            'type': "g03"
        });
        return;
    }
    $.ajax({
        'url': "game/" + data.game + "?v=" + VERSION,    //get level data
        'type': "GET",
        'timeout': 0x1388,
        'success': function(data) {
            app.load(data);
            gameState.send({
                'type': "g03"
            });
        },
        'error': function() {
            app.menu.error.show("Server returned FNF(404) for game file: " + data.game);
        }
    });
};
GameState.prototype.globalWarn = function(_0xba301c) {
    app.menu.warn.show(_0xba301c.message);
};
GameState.prototype.sendPing = function() {
    var _0x1ac5e9 = util.time.now();
    this.pingOut && 0x3e7 > this.pingLast - _0x1ac5e9 || (this.pingOut && (app.net.ping = 0x3e7), this.send({
        'type': "g21",
        'delta': _0x1ac5e9
    }), this.pingOut = !0x0);
};
GameState.prototype.recievePing = function(_0x5bdfa8) {
    var _0x3162e8 = util.time.now();
    app.net.ping = _0x3162e8 - _0x5bdfa8.delta;
    this.pingOut = !0x1;
};
GameState.prototype.recieveLevelSelectResult = function(data) {
    if(data.status == "error") {
        var elem = document.getElementById("levelSelectCustomResult");
        elem.innerText = data.message;
        elem.style.color = "red";
    } else if (data.status == "success") {
        var elem = document.getElementById("levelSelectCustomResult");
        elem.innerText = "upload successful";
        elem.style.color = "green";
    } else if (data.status == "update") {
        app.menu.name.updateLevelSelectButton(data.name);
    }
};
GameState.prototype.send = function(data) {
    app.net.send(data);
};
GameState.prototype.type = function() {
    return 'g';
};
GameState.prototype.destroy = function() {};
"use strict";

function GameObject(game, level, zone, pos) {
    this.game = game;
    this.level = level;
    this.zone = zone;
    this.pos = pos;
    this.sprite = this.state = undefined;
    this.garbage = this.dead = this.reverse = !0x1;
    this.sounds = [];
}
GameObject.ASYNC = !0x0;
GameObject.ID = 0x0;
GameObject.prototype.update = function(_0x2f28f9) {};
GameObject.prototype.step = function() {};
GameObject.prototype.sound = function() {
    for (var _0x3b494f = 0x0; _0x3b494f < this.sounds.length; _0x3b494f++) {
        var _0x1a7bf8 = this.sounds[_0x3b494f];
        _0x1a7bf8.done() ? this.sounds.splice(_0x3b494f--, 0x1) : _0x1a7bf8.position(this.pos);
    }
};
GameObject.prototype.kill = function() {
    this.dead = !0x0;
    this.destroy();
};
GameObject.prototype.destroy = function() {
    this.garbage = this.dead = !0x0;
};
GameObject.prototype.isTangible = function() {
    return !this.dead && !this.disabled && this.dim;
};
GameObject.prototype.draw = function() {};
GameObject.prototype.play = function(_0x5c61d3, _0x1cd15d, _0x457912) {
    var _0x2fc4c1 = this.game.getZone();
    if (this.zone === _0x2fc4c1.id && this.level === _0x2fc4c1.level) return _0x5c61d3 = this.game.audio.getSpatialAudio(_0x5c61d3, _0x1cd15d, _0x457912, "effect"), _0x5c61d3.play(this.pos), this.sounds.push(_0x5c61d3), _0x5c61d3;
};
GameObject.OBJECT_LIST = [];
GameObject.REGISTER_OBJECT = function(_0x4058c1) {
    GameObject.OBJECT_LIST.push(_0x4058c1);
};
GameObject.OBJECT = function(_0x42193c) {
    for (var _0x3e8d48 = 0x0; _0x3e8d48 < GameObject.OBJECT_LIST.length; _0x3e8d48++) {
        var _0x2f6b43 = GameObject.OBJECT_LIST[_0x3e8d48];
        if (_0x2f6b43.ID === _0x42193c) return _0x2f6b43;
    }
    app.menu.warn.show("Invalid Object Class ID: " + _0x42193c);
};
"use strict";

function PlayerObject(game, level, zone, pos, pid, skin) {
    GameObject.call(this, game, level, zone, pos);
    this.pid = pid;
    this.skin = skin;
    this.anim = 0x0;
    this.reverse = !0x1;
    this.deadTimer = this.deadFreezeTimer = this.arrowFade = 0x0;
    this.lastPos = this.pos;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.jumping = -0x1;
    this.grounded = this.isSpring = this.isBounce = !0x1;
    this.name = undefined;
    this.starTimer = this.power = 0x0;
    this.starMusic = undefined;
    this.tfmTimer = this.damageTimer = 0x0;
    this.tfmTarget = -0x1;
    this.pipeWarp = undefined;
    this.pipeTimer = 0x0;
    this.pipeExt = this.pipeDir = -0x1;
    this.poleTimer = this.pipeDelayLength = this.pipeDelay = 0x0;
    this.poleSound = this.poleWait = !0x1;
    this.vineWarp = undefined;
    this.attackCharge = PlayerObject.MAX_CHARGE;
    this.attackTimer = 0x0;
    this.autoTarget = undefined;
    this.btnD = [0x0, 0x0];
    this.btnBde = this.btnBg = this.btnB = this.btnA = !0x1;
    this.setState(PlayerObject.SNAME.STAND);
}
PlayerObject.ASYNC = !0x1;
PlayerObject.ID = 0x1;
PlayerObject.NAME = "PLAYER";
PlayerObject.ANIMATION_RATE = 0x3;
PlayerObject.DIM_OFFSET = vec2.make(-0.05, 0x0);
PlayerObject.DEAD_FREEZE_TIME = 0x7;
PlayerObject.DEAD_TIME = 0x46;
PlayerObject.DEAD_UP_FORCE = 0.65;
PlayerObject.RUN_SPEED_MAX = 0.315;
PlayerObject.MOVE_SPEED_MAX = 0.215;
PlayerObject.MOVE_SPEED_ACCEL = 0.0125;
PlayerObject.MOVE_SPEED_DECEL = 0.0225;
PlayerObject.MOVE_SPEED_ACCEL_AIR = 0.0025;
PlayerObject.STUCK_SLIDE_SPEED = 0.08;
PlayerObject.FALL_SPEED_MAX = 0.45;
PlayerObject.FALL_SPEED_ACCEL = 0.085;
PlayerObject.BOUNCE_LENGTH_MIN = 0x1;
PlayerObject.SPRING_LENGTH_MIN = 0x5;
PlayerObject.SPRING_LENGTH_MAX = 0xe;
PlayerObject.JUMP_LENGTH_MIN = 0x3;
PlayerObject.JUMP_LENGTH_MAX = 0x7;
PlayerObject.JUMP_SPEED_INC_THRESHOLD = [0.1, 0.2, 0.25];
PlayerObject.JUMP_DECEL = 0.005;
PlayerObject.BLOCK_BUMP_THRESHOLD = 0.12;
PlayerObject.POWER_INDEX_SIZE = 0x20;
PlayerObject.GENERIC_INDEX = 0x60;
PlayerObject.DAMAGE_TIME = 0x2d;
PlayerObject.TRANSFORM_TIME = 0x12;
PlayerObject.TRANSFORM_ANIMATION_RATE = 0x2;
PlayerObject.STAR_LENGTH = 380;
PlayerObject.PROJ_OFFSET = vec2.make(0.7, 1.1);
PlayerObject.MAX_CHARGE = 0x3c;
PlayerObject.ATTACK_DELAY = 0x7;
PlayerObject.ATTACK_CHARGE = 0x19;
PlayerObject.ATTACK_ANIM_LENGTH = 0x3;
PlayerObject.PIPE_TIME = 0x1e;
PlayerObject.PIPE_SPEED = 0.06;
PlayerObject.PIPE_EXT_OFFSET = vec2.make(0.5, 0x0);
PlayerObject.WEED_EAT_RADIUS = 0x3;
PlayerObject.POLE_DELAY = 0xf;
PlayerObject.POLE_SLIDE_SPEED = 0.15;
PlayerObject.LEVEL_END_MOVE_OFF = vec2.make(0xa, 0x0);
PlayerObject.CLIMB_SPEED = 0.125;
PlayerObject.PLATFORM_SNAP_DIST = 0.15;
PlayerObject.ARROW_SPRITE = 0xfd;
PlayerObject.ARROW_TEXT = "YOU";
PlayerObject.ARROW_OFFSET = vec2.make(0x0, 0.1);
PlayerObject.TEXT_OFFSET = vec2.make(0x0, 0.55);
PlayerObject.TEXT_SIZE = 0.65;
PlayerObject.TEXT_COLOR = "#FFFFFF";
PlayerObject.ARROW_RAD_IN = 0x3;
PlayerObject.ARROW_RAD_OUT = 0x7;
PlayerObject.ARROW_THRESHOLD_MIN = 0x4;
PlayerObject.ARROW_THRESHOLD_MAX = 0x6;
PlayerObject.TEAM_OFFSET = vec2.make(0x0, 0x0);
PlayerObject.TEAM_SIZE = 0.3;
PlayerObject.TEAM_COLOR = "rgba(255,255,255,0.75)";
PlayerObject.SPRITE = {};
PlayerObject.SPRITE_LIST = [{
    'NAME': "S_STAND",
    'ID': 0x0,
    'INDEX': 0xd
}, {
    'NAME': "S_RUN0",
    'ID': 0x1,
    'INDEX': 0xa
}, {
    'NAME': "S_RUN1",
    'ID': 0x2,
    'INDEX': 0xb
}, {
    'NAME': "S_RUN2",
    'ID': 0x3,
    'INDEX': 0xc
}, {
    'NAME': "S_SLIDE",
    'ID': 0x4,
    'INDEX': 0x9
}, {
    'NAME': "S_FALL",
    'ID': 0x5,
    'INDEX': 0x8
}, {
    'NAME': "S_CLIMB0",
    'ID': 0x6,
    'INDEX': 0x6
}, {
    'NAME': "S_CLIMB1",
    'ID': 0x7,
    'INDEX': 0x7
}, {
    'NAME': "B_STAND",
    'ID': 0x20,
    'INDEX': [
        [0x2d],
        [0x1d]
    ]
}, {
    'NAME': "B_DOWN",
    'ID': 0x21,
    'INDEX': [
        [0x2c],
        [0x1c]
    ]
}, {
    'NAME': "B_RUN0",
    'ID': 0x22,
    'INDEX': [
        [0x29],
        [0x19]
    ]
}, {
    'NAME': "B_RUN1",
    'ID': 0x23,
    'INDEX': [
        [0x2a],
        [0x1a]
    ]
}, {
    'NAME': "B_RUN2",
    'ID': 0x24,
    'INDEX': [
        [0x2b],
        [0x1b]
    ]
}, {
    'NAME': "B_SLIDE",
    'ID': 0x25,
    'INDEX': [
        [0x28],
        [0x18]
    ]
}, {
    'NAME': "B_FALL",
    'ID': 0x26,
    'INDEX': [
        [0x27],
        [0x17]
    ]
}, {
    'NAME': "B_CLIMB0",
    'ID': 0x27,
    'INDEX': [
        [0x25],
        [0x15]
    ]
}, {
    'NAME': "B_CLIMB1",
    'ID': 0x28,
    'INDEX': [
        [0x26],
        [0x16]
    ]
}, {
    'NAME': "B_TRANSFORM",
    'ID': 0x29,
    'INDEX': [
        [0x2e],
        [0x1e]
    ]
}, {
    'NAME': "F_STAND",
    'ID': 0x40,
    'INDEX': [
        [0x4c, 0x4b],
        [0x3c, 0x3b]
    ]
}, {
    'NAME': "F_DOWN",
    'ID': 0x41,
    'INDEX': [
        [0x4a],
        [0x3a]
    ]
}, {
    'NAME': "F_RUN0",
    'ID': 0x42,
    'INDEX': [
        [0x45, 0x44],
        [0x35, 0x34]
    ]
}, {
    'NAME': "F_RUN1",
    'ID': 0x43,
    'INDEX': [
        [0x47, 0x46],
        [0x37, 0x36]
    ]
}, {
    'NAME': "F_RUN2",
    'ID': 0x44,
    'INDEX': [
        [0x49, 0x48],
        [0x39, 0x38]
    ]
}, {
    'NAME': "F_SLIDE",
    'ID': 0x45,
    'INDEX': [
        [0x43, 0x42],
        [0x33, 0x32]
    ]
}, {
    'NAME': "F_FALL",
    'ID': 0x46,
    'INDEX': [
        [0x41, 0x40],
        [0x31, 0x30]
    ]
}, {
    'NAME': "F_CLIMB0",
    'ID': 0x47,
    'INDEX': [
        [0x23],
        [0x13]
    ]
}, {
    'NAME': "F_CLIMB1",
    'ID': 0x48,
    'INDEX': [
        [0x24],
        [0x14]
    ]
}, {
    'NAME': "F_ATTACK",
    'ID': 0x49,
    'INDEX': [
        [0x4f, 0x4e],
        [0x3f, 0x3e]
    ]
}, {
    'NAME': "F_TRANSFORM",
    'ID': 0x50,
    'INDEX': [
        [0x4d],
        [0x3d]
    ]
}, {
    'NAME': "G_DEAD",
    'ID': 0x60,
    'INDEX': 0x0
}, {
    'NAME': "G_HIDE",
    'ID': 0x70,
    'INDEX': 0xe
}];
for (var _0x1bec55 = 0x0; _0x1bec55 < PlayerObject.SPRITE_LIST.length; _0x1bec55++) PlayerObject.SPRITE[PlayerObject.SPRITE_LIST[_0x1bec55].NAME] = PlayerObject.SPRITE_LIST[_0x1bec55], PlayerObject.SPRITE[PlayerObject.SPRITE_LIST[_0x1bec55].ID] = PlayerObject.SPRITE_LIST[_0x1bec55];
PlayerObject.SNAME = {};
PlayerObject.SNAME.STAND = "STAND";
PlayerObject.SNAME.DOWN = "DOWN";
PlayerObject.SNAME.RUN = "RUN";
PlayerObject.SNAME.SLIDE = "SLIDE";
PlayerObject.SNAME.FALL = "FALL";
PlayerObject.SNAME.POLE = "POLE";
PlayerObject.SNAME.CLIMB = "CLIMB";
PlayerObject.SNAME.ATTACK = "ATTACK";
PlayerObject.SNAME.TRANSFORM = "TRANSFORM";
PlayerObject.SNAME.DEAD = "DEAD";
PlayerObject.SNAME.HIDE = "HIDE";
PlayerObject.SNAME.GHOST = "GHOST";
PlayerObject.SNAME.DEADGHOST = "DEADGHOST";
var _0x4a74c1 = vec2.make(0.9, 0.95),
    _0x124f5a = vec2.make(0.9, 1.9);
PlayerObject.STATE = [{
    'NAME': PlayerObject.SNAME.STAND,
    'ID': 0x0,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_STAND]
}, {
    'NAME': PlayerObject.SNAME.DOWN,
    'ID': 0x1,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_STAND]
}, {
    'NAME': PlayerObject.SNAME.RUN,
    'ID': 0x2,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_RUN2, PlayerObject.SPRITE.S_RUN1, PlayerObject.SPRITE.S_RUN0]
}, {
    'NAME': PlayerObject.SNAME.SLIDE,
    'ID': 0x3,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_SLIDE]
}, {
    'NAME': PlayerObject.SNAME.FALL,
    'ID': 0x4,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_FALL]
}, {
    'NAME': PlayerObject.SNAME.TRANSFORM,
    'ID': 0x5,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_STAND]
}, {
    'NAME': PlayerObject.SNAME.POLE,
    'ID': 0x6,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_CLIMB1]
}, {
    'NAME': PlayerObject.SNAME.CLIMB,
    'ID': 0x7,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_CLIMB0, PlayerObject.SPRITE.S_CLIMB1]
}, {
    'NAME': PlayerObject.SNAME.STAND,
    'ID': 0x20,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_STAND]
}, {
    'NAME': PlayerObject.SNAME.DOWN,
    'ID': 0x21,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.B_DOWN]
}, {
    'NAME': PlayerObject.SNAME.RUN,
    'ID': 0x22,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_RUN2, PlayerObject.SPRITE.B_RUN1, PlayerObject.SPRITE.B_RUN0]
}, {
    'NAME': PlayerObject.SNAME.SLIDE,
    'ID': 0x23,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_SLIDE]
}, {
    'NAME': PlayerObject.SNAME.FALL,
    'ID': 0x24,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_FALL]
}, {
    'NAME': PlayerObject.SNAME.TRANSFORM,
    'ID': 0x25,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.B_TRANSFORM]
}, {
    'NAME': PlayerObject.SNAME.POLE,
    'ID': 0x26,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_CLIMB0]
}, {
    'NAME': PlayerObject.SNAME.CLIMB,
    'ID': 0x27,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_CLIMB0, PlayerObject.SPRITE.B_CLIMB1]
}, {
    'NAME': PlayerObject.SNAME.STAND,
    'ID': 0x40,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_STAND]
}, {
    'NAME': PlayerObject.SNAME.DOWN,
    'ID': 0x41,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.F_DOWN]
}, {
    'NAME': PlayerObject.SNAME.RUN,
    'ID': 0x42,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_RUN2, PlayerObject.SPRITE.F_RUN1, PlayerObject.SPRITE.F_RUN0]
}, {
    'NAME': PlayerObject.SNAME.SLIDE,
    'ID': 0x43,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_SLIDE]
}, {
    'NAME': PlayerObject.SNAME.FALL,
    'ID': 0x44,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_FALL]
}, {
    'NAME': PlayerObject.SNAME.ATTACK,
    'ID': 0x45,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_ATTACK]
}, {
    'NAME': PlayerObject.SNAME.TRANSFORM,
    'ID': 0x46,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.F_TRANSFORM]
}, {
    'NAME': PlayerObject.SNAME.POLE,
    'ID': 0x47,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_CLIMB0]
}, {
    'NAME': PlayerObject.SNAME.CLIMB,
    'ID': 0x48,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_CLIMB0, PlayerObject.SPRITE.F_CLIMB1]
}, {
    'NAME': PlayerObject.SNAME.DEAD,
    'DIM': _0x4a74c1,
    'ID': 0x60,
    'SPRITE': [PlayerObject.SPRITE.G_DEAD]
}, {
    'NAME': PlayerObject.SNAME.HIDE,
    'DIM': _0x4a74c1,
    'ID': 0x70,
    'SPRITE': [PlayerObject.SPRITE.G_HIDE]
}, {
    'NAME': PlayerObject.SNAME.GHOST,
    'DIM': _0x4a74c1,
    'ID': 0xff,
    'SPRITE': []
}, {
    'NAME': PlayerObject.SNAME.DEADGHOST,
    'DIM': _0x4a74c1,
    'ID': 0xfe,
    'SPRITE': [PlayerObject.SPRITE.G_DEAD]
}];
PlayerObject.prototype.update = function(_0x60d16c) {
    this.dead || this.garbage || (this.setState(PlayerObject.SNAME.GHOST), this.level = _0x60d16c.level, this.zone = _0x60d16c.zone, this.pos = _0x60d16c.pos, this.sprite = PlayerObject.SPRITE[_0x60d16c.sprite], this.reverse = _0x60d16c.reverse);
};
PlayerObject.prototype.trigger = function(_0x121f75) {
    switch (_0x121f75) {
        case 0x1:
            this.attack();
            break;
        case 0x2:
            this.star();
    }
};
PlayerObject.prototype.step = function() {
    0x0 < this.starTimer && (this.starTimer--, 20 < this.starTimer || (this.starMusic && (this.starMusic.stop(), this.starMusic = undefined)));
    if (this.isState(PlayerObject.SNAME.GHOST)) this.sound();
    else if (!this.isState(PlayerObject.SNAME.HIDE))
        if (this.isState(PlayerObject.SNAME.POLE))
            if (0x0 < this.poleTimer && !this.poleWait) this.poleTimer--;
            else {
                this.poleSound || (this.poleSound = !0x0, this.play("sfx/flagpole.wav", 0x1, 0x0));
                if (!this.poleWait)
                    if (0x0 >= this.poleTimer && this.autoTarget) this.setState(PlayerObject.SNAME.STAND);
                    else {
                        for (var _0x4d4e5b = vec2.add(this.pos, vec2.make(0x0, -0.25)), _0x280236 = vec2.make(this.pos.x, this.pos.y - 0.25), _0x191ffc = vec2.make(this.dim.x, this.dim.y + 0.25), _0x280236 = this.game.world.getZone(this.level, this.zone).getTiles(_0x280236, _0x191ffc), _0x191ffc = vec2.make(0x1, 0x1), _0x1f539b = !0x1, _0x5a99db = 0x0; _0x5a99db < _0x280236.length; _0x5a99db++) {
                            var _0x4eb640 = _0x280236[_0x5a99db];
                            if (squar.intersection(_0x4eb640.pos, _0x191ffc, _0x4d4e5b, this.dim) && _0x4eb640.definition.COLLIDE) {
                                _0x1f539b = !0x0;
                                break;
                            }
                        }
                        _0x1f539b ? (this.poleTimer = 0xf, this.autoTarget = vec2.add(_0x4d4e5b, PlayerObject.LEVEL_END_MOVE_OFF), this.poleWait = !0x0) : this.pos = _0x4d4e5b;
                    } _0x4d4e5b = this.game.getFlag(this.level, this.zone);
                _0x4d4e5b.pos.y - 0.25 >= this.pos.y ? _0x4d4e5b.pos.y -= 0.25 : (_0x4d4e5b.pos.y = this.pos.y, this.poleWait = !0x1);
            }
    else if (this.isState(PlayerObject.SNAME.RUN) ? this.anim += Math.max(0.5, Math.abs(0x5 * this.moveSpeed)) : this.anim++, this.sprite = this.state.SPRITE[parseInt(parseInt(this.anim) / PlayerObject.ANIMATION_RATE) % this.state.SPRITE.length], this.isState(PlayerObject.SNAME.CLIMB)) this.pos.y += PlayerObject.CLIMB_SPEED, this.pos.y >= this.game.world.getZone(this.level, this.zone).dimensions().y && (this.warp(this.vineWarp), this.setState(PlayerObject.SNAME.FALL));
    else if (this.isState(PlayerObject.SNAME.DEAD) || this.isState(PlayerObject.SNAME.DEADGHOST)) 0x0 < this.deadFreezeTimer ? this.deadFreezeTimer-- : 0x0 < this.deadTimer ? (this.deadTimer--, this.pos.y += this.fallSpeed, this.fallSpeed = Math.max(this.fallSpeed - 0.085, -0.45)) : this.destroy();
    else if (this.isState(PlayerObject.SNAME.TRANSFORM))
        if (0x0 < --this.tfmTimer) switch (_0x4d4e5b = parseInt(this.anim / PlayerObject.TRANSFORM_ANIMATION_RATE) % 0x3, _0x280236 = this.power > this.tfmTarget ? this.power : this.tfmTarget, _0x4d4e5b) {
            case 0x0:
                this.sprite = this.getStateByPowerIndex(PlayerObject.SNAME.STAND, this.power).SPRITE[0x0];
                break;
            case 0x1:
                this.sprite = this.getStateByPowerIndex(PlayerObject.SNAME.TRANSFORM, _0x280236).SPRITE[0x0];
                break;
            case 0x2:
                this.sprite = this.getStateByPowerIndex(PlayerObject.SNAME.STAND, this.tfmTarget).SPRITE[0x0];
        } else this.power = this.tfmTarget, this.tfmTarget = -0x1, this.setState(PlayerObject.SNAME.STAND), this.collisionTest(this.pos, this.dim) && this.setState(PlayerObject.SNAME.DOWN), this.damageTimer = (app.net.gameMode === 1 ? 120 : PlayerObject.DAMAGE_TIME);
        else if (0x0 < this.pipeDelay) this.pipeDelay--;
    else if (0x0 < this.pipeTimer && 0x0 >= this.pipeDelay) {
        0x1e <= this.pipeTimer && this.play("sfx/pipe.wav", 0x1, 0.04);
        switch (this.pipeDir) {
            case 0x1:
                this.pos.y += 0.06;
                break;
            case 0x2:
                this.pos.y -= 0.06;
                break;
            case 0x3:
                this.pos.x -= 0.06;
                break;
            case 0x4:
                this.pos.x += 0.06;
        }
        0x1 === --this.pipeTimer && this.pipeWarp && (this.pipeDelay = this.pipeDelayLength);
        if (0x0 >= this.pipeTimer && this.pipeWarp) {
            this.warp(this.pipeWarp);
            this.weedeat();
            this.pipeWarp = undefined;
            switch (this.pipeExt) {
                case 0x1:
                    this.pos.y -= 1.74;
                    this.setState(PlayerObject.SNAME.STAND);
                    this.pos = vec2.add(this.pos, PlayerObject.PIPE_EXT_OFFSET);
                    break;
                case 0x2:
                    this.pos.y += 1.74;
                    this.setState(PlayerObject.SNAME.STAND);
                    this.pos = vec2.add(this.pos, PlayerObject.PIPE_EXT_OFFSET);
                    break;
                case 0x3:
                    this.pos.x -= 1.74;
                    this.setState(PlayerObject.SNAME.RUN);
                    break;
                case 0x4:
                    this.pos.x += 1.74;
                    this.setState(PlayerObject.SNAME.RUN);
                    break;
                default:
                    return;
            }
            this.pipeTimer = 0x1e;
            this.pipeDir = this.pipeExt;
            this.pipeDelay = this.pipeDelayLength;
        }
    } else this.lastPos = this.pos, 0x0 < this.damageTimer && this.damageTimer--, this.attackCharge < PlayerObject.MAX_CHARGE && this.attackCharge++, 0x0 < this.attackTimer && this.attackTimer--, this.autoTarget && this.autoMove(), this.control(), this.physics(), this.interaction(), this.arrow(), this.sound(), 0x0 > this.pos.y && this.kill();
};
PlayerObject.prototype.input = function(_0x17fbef, _0x49fbc5, _0xb14c91) {
    this.btnD = _0x17fbef;
    this.btnA = _0x49fbc5;
    this.btnB = _0xb14c91;
};
PlayerObject.prototype.autoMove = function() {
    this.btnD = [0x0, 0x0];
    this.btnB = this.btnA = !0x1;
    0.1 <= Math.abs(this.pos.x - this.autoTarget.x) ? this.btnD = [0x0 >= this.pos.x - this.autoTarget.x ? 0x1 : -0x1, 0x0] : 0.01 > Math.abs(this.moveSpeed) && (this.btnA = -0.5 > this.pos.y - this.autoTarget.y);
};
PlayerObject.prototype.control = function() {
    this.grounded && (this.btnBg = this.btnB);
    if (this.isState(PlayerObject.SNAME.DOWN) && this.collisionTest(this.pos, this.getStateByPowerIndex(PlayerObject.SNAME.STAND, this.power).DIM)) - 0x1 !== this.btnD[0x1] && (this.moveSpeed = 0.5 * (this.moveSpeed + PlayerObject.STUCK_SLIDE_SPEED)), this.moveSpeed = Math.sign(this.moveSpeed) * Math.max(Math.abs(this.moveSpeed) - PlayerObject.MOVE_SPEED_DECEL, 0x0);
    else {
        0x0 !== this.btnD[0x0] ? (0.01 < Math.abs(this.moveSpeed) && !(0x0 <= this.btnD[0x0] ^ 0x0 > this.moveSpeed) ? (this.moveSpeed += PlayerObject.MOVE_SPEED_DECEL * this.btnD[0x0], this.setState(PlayerObject.SNAME.SLIDE)) : (this.moveSpeed = this.btnD[0x0] * Math.min(Math.abs(this.moveSpeed) + 0.0125, this.btnBg ? 0.315 : 0.215), this.setState(PlayerObject.SNAME.RUN)), this.grounded && (this.reverse = 0x0 <= this.btnD[0x0])) : (0.01 < Math.abs(this.moveSpeed) ? (this.moveSpeed = Math.sign(this.moveSpeed) * Math.max(Math.abs(this.moveSpeed) - PlayerObject.MOVE_SPEED_DECEL, 0x0), this.setState(PlayerObject.SNAME.RUN)) : (this.moveSpeed = 0x0, this.setState(PlayerObject.SNAME.STAND)), -0x1 === this.btnD[0x1] && this.setState(PlayerObject.SNAME.DOWN));
        for (var _0x41484b = this.isSpring ? 0xe : 0x7, _0x39fd87 = this.isSpring ? PlayerObject.SPRING_LENGTH_MIN : this.isBounce ? PlayerObject.BOUNCE_LENGTH_MIN : PlayerObject.JUMP_LENGTH_MIN, _0x4f2d3c = 0x0; _0x4f2d3c < PlayerObject.JUMP_SPEED_INC_THRESHOLD.length && Math.abs(this.moveSpeed) >= PlayerObject.JUMP_SPEED_INC_THRESHOLD[_0x4f2d3c]; _0x4f2d3c++) _0x41484b++;
        this.btnA ? (this.grounded && (this.jumping = 0x0, this.play(0x0 < this.power ? "sfx/jump1.wav" : "sfx/jump0.wav", 0.7, 0.04)), this.jumping > _0x41484b && (this.jumping = -0x1)) : this.jumping > _0x39fd87 && (this.jumping = -0x1);
        this.grounded || this.setState(PlayerObject.SNAME.FALL);
        this.btnB && !this.btnBde && 0x2 === this.power && !this.isState(PlayerObject.SNAME.DOWN) && !this.isState(PlayerObject.SNAME.SLIDE) && 0x1 > this.attackTimer && this.attackCharge >= PlayerObject.ATTACK_CHARGE && (this.attack(), this.game.out.push(NET013.encode(0x1)));
        this.btnBde = this.btnB;
        0x0 < this.attackTimer && 0x2 === this.power && (this.isState(PlayerObject.SNAME.STAND) || this.isState(PlayerObject.SNAME.RUN)) && this.setState(PlayerObject.SNAME.ATTACK);
    }
};
PlayerObject.prototype.physics = function() {
    -0x1 !== this.jumping ? (this.fallSpeed = 0.45 - 0.005 * this.jumping, this.jumping++, this.grounded = !0x1) : (this.isSpring = this.isBounce = !0x1, this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - 0.085, -0.45));
    for (var _0x57b791 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), _0x513d1f = vec2.make(this.pos.x + Math.min(0x0, this.moveSpeed), this.pos.y + Math.min(0x0, this.fallSpeed)), _0x208a75 = vec2.make(this.dim.x + Math.max(0x0, this.moveSpeed), this.dim.y + Math.max(0x0, this.fallSpeed)), _0x513d1f = this.game.world.getZone(this.level, this.zone).getTiles(_0x513d1f, _0x208a75), _0x20e6e6 = this.game.getPlatforms(), _0x208a75 = vec2.make(0x1, 0x1), _0x58342b = !0x1, tilePlatform = [], tilePlatformColliding = [], _0x27521c = [], _0x27c16e = [], _0x346d1d = [], _0x50b7b9 = [], _0x535e81 = [], _0x3f505e, _0x5b32b0 = 0x0; _0x5b32b0 < _0x513d1f.length; _0x5b32b0++) {
        var obj = _0x513d1f[_0x5b32b0];
        if (obj.definition.PLATFORM) tilePlatform.push(obj);
        else if (obj.definition.COLLIDE)
            if (obj.definition.HIDDEN) _0x27521c.push(obj);
            else if (squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim) || squar.intersection(obj.pos, _0x208a75, this.pos, this.dim)) 0.01 < Math.abs(this.moveSpeed) && this.grounded && this.pos.y <= obj.pos.y && _0x346d1d.push(obj), _0x27521c.push(obj);
    }
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x20e6e6.length; _0x5b32b0++) obj = _0x20e6e6[_0x5b32b0], squar.intersection(obj.pos, obj.dim, _0x57b791, this.dim) && _0x535e81.push(obj);
    for (_0x5b32b0 = 0x0; _0x5b32b0 < tilePlatform.length; _0x5b32b0++) obj = tilePlatform[_0x5b32b0], squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim) && tilePlatformColliding.push(obj);
    _0x20e6e6 = vec2.make(_0x57b791.x, this.pos.y);
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x27521c.length; _0x5b32b0++) { 
        obj = _0x27521c[_0x5b32b0];
        if (!obj.definition.HIDDEN && squar.intersection(obj.pos, _0x208a75, _0x20e6e6, this.dim)) {
            obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.TOUCH);
            _0x20e6e6.x = _0x20e6e6.x + 0.5 * this.dim.x < obj.pos.x + 0.5 * _0x208a75.x ? obj.pos.x - this.dim.x : obj.pos.x + _0x208a75.x;
            this.moveSpeed *= 0.33;
        }
    }
    _0x57b791.x = _0x20e6e6.x;
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x27521c.length; _0x5b32b0++) {
         obj = _0x27521c[_0x5b32b0];
         if (squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim)) {
            if (this.fallSpeed > PlayerObject.BLOCK_BUMP_THRESHOLD) { _0x50b7b9.push(obj); }
            if (0x0 > this.fallSpeed && this.pos.y >= obj.pos.y) { _0x27c16e.push(obj); }
         }
    }
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x27521c.length; _0x5b32b0++) {
        obj = _0x27521c[_0x5b32b0];
        if (squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim)) {
            obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.TOUCH);
            if (this.pos.y >= _0x57b791.y) {
                if (!obj.definition.HIDDEN) { 
                    _0x57b791.y = obj.pos.y + _0x208a75.y;
                    this.fallSpeed = 0x0;
                    _0x58342b = !0x0;
                }
            } 
            else {
                _0x57b791.y = obj.pos.y - this.dim.y;
                this.fallSpeed = 0;
            }
        }
    }
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x535e81.length; _0x5b32b0++)
        if (obj = _0x535e81[_0x5b32b0], this.pos.y >= _0x57b791.y && obj.pos.y + obj.dim.y - this.pos.y < PlayerObject.PLATFORM_SNAP_DIST) {
            _0x57b791.y = obj.pos.y + obj.dim.y;
            _0x58342b = !0x0;
            _0x3f505e = obj;
            break;
        } 
    for (_0x5b32b0 = 0x0; _0x5b32b0 < tilePlatformColliding.length; _0x5b32b0++) {
        obj = tilePlatformColliding[_0x5b32b0];
        if (squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim)) {
            if (this.pos.y - (obj.definition.PLATFORM && obj.definition.PLATFORM === "WEAK" ? this.dim : _0x208a75).y >= obj.pos.y) {
                _0x57b791.y = obj.pos.y + _0x208a75.y;
                this.fallSpeed = 0x0;
                _0x58342b = !0x0;
            }
        }
    }
    this.grounded = _0x58342b;
    this.pos = _0x57b791;
    _0x3f505e && _0x3f505e.riding(this);
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x513d1f.length; _0x5b32b0++) obj = _0x513d1f[_0x5b32b0], squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim) && obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.TOUCH);
    if (this.isState(PlayerObject.SNAME.DOWN) && 0.05 > this.moveSpeed)
        for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x27c16e.length; _0x5b32b0++) obj = _0x27c16e[_0x5b32b0], obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.DOWN);
    if (this.isState(PlayerObject.SNAME.RUN))
        for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x346d1d.length; _0x5b32b0++) obj = _0x346d1d[_0x5b32b0], obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.PUSH);
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x50b7b9.length; _0x5b32b0++) obj = _0x50b7b9[_0x5b32b0], obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, 0x0 < this.power ? td32.TRIGGER.TYPE.BIG_BUMP : td32.TRIGGER.TYPE.SMALL_BUMP), this.jumping = -0x1, this.fallSpeed = -PlayerObject.BLOCK_BUMP_THRESHOLD;
};
PlayerObject.prototype.collisionTest = function(_0x569425, _0x1323bb) {
    for (var _0x4dc291 = vec2.make(0x1, 0x1), _0x471838 = this.game.world.getZone(this.level, this.zone).getTiles(_0x569425, _0x1323bb), _0x426d64 = 0x0; _0x426d64 < _0x471838.length; _0x426d64++) {
        var _0x2faa4b = _0x471838[_0x426d64];
        if (_0x2faa4b.definition.COLLIDE && squar.intersection(_0x2faa4b.pos, _0x4dc291, _0x569425, _0x1323bb)) return !0x0;
    }
    return !0x1;
};
PlayerObject.prototype.interaction = function() {
    for (var _0x588c5e = 0x0; _0x588c5e < this.game.objects.length; _0x588c5e++) {
        var _0x4e9f01 = this.game.objects[_0x588c5e];
        _0x4e9f01 !== this && !this.dead && _0x4e9f01.level === this.level && _0x4e9f01.zone === this.zone && _0x4e9f01.isTangible() && squar.intersection(_0x4e9f01.pos, _0x4e9f01.dim, this.pos, this.dim) && (0x0 < this.starTimer && _0x4e9f01.bonk && (_0x4e9f01.bonk(), this.game.out.push(NET020.encode(_0x4e9f01.level, _0x4e9f01.zone, _0x4e9f01.oid, 0x1))), _0x4e9f01 instanceof PlayerObject && 0x0 < _0x4e9f01.starTimer && !this.autoTarget && (this.damage(_0x4e9f01), this.dead && this.game.out.push(NET017.encode(_0x4e9f01.pid))), this.lastPos.y > _0x4e9f01.pos.y + 0.66 * _0x4e9f01.dim.y - Math.max(0x0, _0x4e9f01.fallSpeed) ? _0x4e9f01.playerStomp && _0x4e9f01.playerStomp(this) : this.lastPos.y < _0x4e9f01.pos.y ? _0x4e9f01.playerBump && _0x4e9f01.playerBump(this) : _0x4e9f01.playerCollide && _0x4e9f01.playerCollide(this));
    }
};
PlayerObject.prototype.arrow = function() {
    for (var _0x37a11c = 0x0, _0x389b03 = 0x0; _0x389b03 < this.game.objects.length; _0x389b03++) {
        var _0x2c4088 = this.game.objects[_0x389b03];
        _0x2c4088 !== this && _0x2c4088 instanceof PlayerObject && _0x2c4088.level === this.level && _0x2c4088.zone === this.zone && (_0x37a11c += 0x1 - Math.min(PlayerObject.ARROW_RAD_OUT, Math.max(0x0, vec2.distance(this.pos, _0x2c4088.pos) - PlayerObject.ARROW_RAD_IN)) / PlayerObject.ARROW_RAD_OUT);
    }
    this.arrowFade = Math.min(PlayerObject.ARROW_THRESHOLD_MAX, Math.max(0x0, _0x37a11c - PlayerObject.ARROW_THRESHOLD_MIN)) / PlayerObject.ARROW_THRESHOLD_MAX;
};
PlayerObject.prototype.sound = GameObject.prototype.sound;
PlayerObject.prototype.attack = function() {
    this.attackTimer = PlayerObject.ATTACK_DELAY;
    this.attackCharge -= PlayerObject.ATTACK_CHARGE;
    var _0x328458 = this.reverse ? vec2.add(this.pos, PlayerObject.PROJ_OFFSET) : vec2.add(this.pos, vec2.multiply(PlayerObject.PROJ_OFFSET, vec2.make(-0x1, 0x1)));
    this.game.createObject(_0x6c6f53.ID, this.level, this.zone, _0x328458, [this.reverse, this.pid]);
    this.play("sfx/fireball.wav", 0x1, 0.04);
};
PlayerObject.prototype.bounce = function() {
    this.jumping = 0x0;
    this.isBounce = !0x0;
};
PlayerObject.prototype.damage = function(_0x782da0) {
    0x0 < this.damageTimer || 0x0 < this.starTimer || this.isState(PlayerObject.SNAME.TRANSFORM) || this.isState(PlayerObject.SNAME.CLIMB) || this.isState(PlayerObject.SNAME.POLE) || this.pipeWarp || 0x0 < this.pipeTimer || 0x0 < this.pipeDelay || this.autoTarget || (0x0 < this.power ? (this.tfm(0x0), this.damageTimer = PlayerObject.DAMAGE_TIME) : this.kill());
};
PlayerObject.prototype.invuln = function() {
    this.damageTimer = app.net.gameMode === 1 ? 120 : PlayerObject.DAMAGE_TIME;
};
PlayerObject.prototype.powerup = function(_0x316532) {
    _0x316532 instanceof MushroomObject && 0x1 > this.power ? (this.tfm(0x1), this.rate = 0x73) : _0x316532 instanceof FlowerObject && 0x2 > this.power ? (this.tfm(0x2), this.rate = 0x71) : _0x316532 instanceof StarObject ? (this.star(), this.game.out.push(NET013.encode(0x2)), this.rate = 0x43) : _0x316532 instanceof LifeObject ? this.game.lifeage() : _0x316532 instanceof CoinObject ? this.game.coinage() : _0x316532 instanceof GoldFlowerObject ? this.game.coinage(true) : _0x316532 instanceof AxeObject ? (this.game.stopGameTimer(),this.game.out.push(NET018.encode())) : _0x316532 instanceof _0x5010c8 && this.damage(_0x316532);
};
PlayerObject.prototype.axe = function(_0x5050d5) {
    (_0x5050d5 = this.game.getText(this.level, this.zone, _0x5050d5.toString())) || (_0x5050d5 = this.game.getText(this.level, this.zone, "too bad"));
    var axe = this.game.getAxe(this.level, this.zone);
    _0x5050d5 && (this.moveSpeed = 0, this.pos = vec2.copy(axe.pos), this.autoTarget = vec2.add(_0x5050d5.pos, vec2.make(0x0, -1.6)));
};
PlayerObject.prototype.star = function() {
    this.starMusic && (this.starMusic.stop(), this.starMusic = undefined);
    this.starTimer = PlayerObject.STAR_LENGTH;
    (this.starMusic = this.play("music/star.mp3", 0x1, 0.04)) && this.starMusic.loop(!0x0);
};
PlayerObject.prototype.tfm = function(_0x538c99) {
    this.power < _0x538c99 ? this.play("sfx/powerup.wav", 0x1, 0.04) : this.play("sfx/pipe.wav", 0x1, 0.04);
    this.tfmTarget = _0x538c99;
    this.tfmTimer = PlayerObject.TRANSFORM_TIME;
    this.setState(PlayerObject.SNAME.TRANSFORM);
};
PlayerObject.prototype.warp = function(_0x3f75ed) {
    if (_0x3f75ed = this.game.world.getLevel(this.level).getWarp(_0x3f75ed)) this.level = _0x3f75ed.level, this.zone = _0x3f75ed.zone, this.pos = _0x3f75ed.pos, this.autoTarget = undefined, this.grounded = !0x1;
};
PlayerObject.prototype.pipe = function(_0x157842, _0x266382, _0x3f3ba4) {
    0x1 !== _0x157842 && 0x2 !== _0x157842 || this.setState(PlayerObject.SNAME.STAND);
    var _0x327f1a = this.game.world.getLevel(this.level).getWarp(_0x266382);
    this.pipeWarp = _0x266382;
    this.pipeTimer = 0x1e;
    this.pipeDir = _0x157842;
    this.pipeExt = _0x327f1a.data;
    this.pipeDelayLength = _0x3f3ba4;
};
PlayerObject.prototype.weedeat = function() {
    for (var _0x5cc521 = 0x0; _0x5cc521 < this.game.objects.length; _0x5cc521++) {
        var _0x526625 = this.game.objects[_0x5cc521];
        _0x526625 instanceof _0xa70071 && !_0x526625.dead && vec2.distance(this.pos, _0x526625.pos) < PlayerObject.WEED_EAT_RADIUS && _0x526625.destroy();
    }
};
PlayerObject.prototype.pole = function(_0x4a8021) {
    if (this.autoTarget) return;
    this.game.stopGameTimer();
    this.starMusic && (this.starMusic.stop(), this.starMusic = undefined, this.starTimer = 0x0);
    this.setState(PlayerObject.SNAME.POLE);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.pos.x = _0x4a8021.x;
    this.poleTimer = 0xf;
    this.poleSound = !0x1;
};
PlayerObject.prototype.vine = function(_0x4cfee8, _0x16f983) {
    this.setState(PlayerObject.SNAME.CLIMB);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.pos.x = _0x4cfee8.x;
    this.vineWarp = _0x16f983;
};
PlayerObject.prototype.hide = function() {
    this.setState(PlayerObject.SNAME.HIDE);
};
PlayerObject.prototype.show = function() {
    this.setState(PlayerObject.SNAME.STAND);
};
PlayerObject.prototype.kill = function() {
    this.starMusic && (this.starMusic.stop(), this.starMusic = undefined, this.starTimer = 0x0);
    this.isState(PlayerObject.SNAME.GHOST) ? this.setState(PlayerObject.SNAME.DEADGHOST) : this.setState(PlayerObject.SNAME.DEAD);
    this.dead = !0x0;
    this.deadTimer = PlayerObject.DEAD_TIME;
    this.deadFreezeTimer = PlayerObject.DEAD_FREEZE_TIME;
    this.fallSpeed = PlayerObject.DEAD_UP_FORCE;
    if (this.game.getPlayer() === this) {
        this.game.stopGameTimer();
        this.game.out.push(NET011.encode());
        var _0x27d445 = Cookies.get("sad_gamer_moments");
        !app.net.isPrivate && Cookies.set("sad_gamer_moments", _0x27d445 ? parseInt(_0x27d445) + 0x1 : 0x1, {
            'expires': 0x16d
        });
    }
};
PlayerObject.prototype.destroy = function() {
    this.starMusic && (this.starMusic.stop(), this.starMusic = undefined, this.starTimer = 0x0);
    GameObject.prototype.destroy.call(this);
};
PlayerObject.prototype.isTangible = function() {
    return GameObject.prototype.isTangible.call(this) && !this.isState(PlayerObject.SNAME.HIDE) && 0x0 >= this.pipeDelay;
};
PlayerObject.prototype.setState = function(_0x50b226) {
    _0x50b226 = this.getStateByPowerIndex(_0x50b226, this.power);
    _0x50b226 !== this.state && (this.state = _0x50b226, 0x0 < _0x50b226.SPRITE.length && (this.sprite = _0x50b226.SPRITE[0x0]), this.dim = _0x50b226.DIM, this.anim = 0x0);
};
PlayerObject.prototype.getStateByPowerIndex = function(_0x40e9b8, _0x2a26f5) {
    for (var _0x445ce9 = 0x0; _0x445ce9 < PlayerObject.STATE.length; _0x445ce9++) {
        var _0x44768c = PlayerObject.STATE[_0x445ce9];
        if (_0x44768c.NAME === _0x40e9b8 && (_0x44768c.ID >= PlayerObject.GENERIC_INDEX || _0x44768c.ID >= PlayerObject.POWER_INDEX_SIZE * _0x2a26f5 && _0x44768c.ID < PlayerObject.POWER_INDEX_SIZE * (_0x2a26f5 + 0x1))) return _0x44768c;
    }
};
PlayerObject.prototype.isState = function(_0x5b2890) {
    return _0x5b2890 === this.state.NAME;
};
PlayerObject.prototype.draw = function(spriteList) {
    if (!(this.isState(PlayerObject.SNAME.HIDE) || 0x0 < this.pipeDelay || 0x0 < this.damageTimer && 0x1 < this.damageTimer % 0x3)) {
        var _0x5c9425;
        _0x5c9425 = 0x0 < this.starTimer ? 0x2 : this.isState(PlayerObject.SNAME.GHOST) || this.isState(PlayerObject.SNAME.DEADGHOST) ? 0x1 : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x5814e0 = this.sprite.INDEX, _0x3f6b38 = 0x0; _0x3f6b38 < _0x5814e0.length; _0x3f6b38++)
                for (var _0x13a17a = 0x0; _0x13a17a < _0x5814e0[_0x3f6b38].length; _0x13a17a++) 0x2 === _0x5c9425 && spriteList.push({
                    'pos': vec2.add(vec2.add(this.pos, PlayerObject.DIM_OFFSET), vec2.make(this.reverse ? _0x13a17a : -_0x13a17a, _0x3f6b38)),
                    'reverse': this.reverse,
                    'index': _0x5814e0[_0x3f6b38][_0x13a17a],
                    'skin': this.skin,
                    'mode': 0x0
                }), spriteList.push({
                    'pos': vec2.add(vec2.add(this.pos, PlayerObject.DIM_OFFSET), vec2.make(this.reverse ? _0x13a17a : -_0x13a17a, _0x3f6b38)),
                    'reverse': this.reverse,
                    'index': _0x5814e0[_0x3f6b38][_0x13a17a],
                    'skin': this.skin,
                    'mode': _0x5c9425
                });
        else 0x2 === _0x5c9425 && spriteList.push({
            'pos': vec2.add(this.pos, PlayerObject.DIM_OFFSET),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'skin': this.skin,
            'mode': 0x0
        }), spriteList.push({
            'pos': vec2.add(this.pos, PlayerObject.DIM_OFFSET),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'skin': this.skin,
            'mode': _0x5c9425
        });
        0x0 < this.arrowFade && (_0x5c9425 = 0xa0 + parseInt(0x20 * this.arrowFade), spriteList.push({
            'pos': vec2.add(vec2.add(this.pos, vec2.make(0x0, this.dim.y)), PlayerObject.ARROW_OFFSET),
            'reverse': !0x1,
            'index': PlayerObject.ARROW_SPRITE,
            'mode': _0x5c9425
        }));
    }
};
PlayerObject.prototype.write = function(_0x239cf4) {
    0x0 < this.arrowFade ? _0x239cf4.push({
        'pos': vec2.add(vec2.add(this.pos, vec2.make(0x0, this.dim.y)), PlayerObject.TEXT_OFFSET),
        'size': PlayerObject.TEXT_SIZE,
        'color': "rgba(255,255,255," + this.arrowFade + ')',
        'text': PlayerObject.ARROW_TEXT
    }) : this.name && _0x239cf4.push({
        'pos': vec2.add(vec2.add(this.pos, vec2.make(0x0, this.sprite.INDEX instanceof Array ? 0x2 : 0x1)), PlayerObject.TEAM_OFFSET),
        'size': PlayerObject.TEAM_SIZE,
        'color': PlayerObject.TEAM_COLOR,
        'text': this.name
    });
};
PlayerObject.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(PlayerObject);
"use strict";

function _0x2040e7(_0x1e60b3, _0x4473d2, _0x446473, _0x318ba1, _0x37471f, _0xa2b306) {
    GameObject.call(this, _0x1e60b3, _0x4473d2, _0x446473, _0x318ba1);
    this.oid = _0x37471f;
    this.variant = isNaN(parseInt(_0xa2b306)) ? 0x0 : parseInt(_0xa2b306);
    this.setState(_0x2040e7.STATE.RUN);
    this.bonkTimer = this.deadTimer = this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.disabled = this.grounded = !0x1;
    this.disabledTimer = 0x0;
    this.proxHit = !0x1;
    this.dir = !0x0;
    this.disable();
}
_0x2040e7.ASYNC = !0x1;
_0x2040e7.ID = 0x11;
_0x2040e7.NAME = "GOOMBA";
_0x2040e7.ANIMATION_RATE = 0x5;
_0x2040e7.VARIANT_OFFSET = 0x70;
_0x2040e7.ENABLE_FADE_TIME = 0xf;
_0x2040e7.ENABLE_DIST = 0x1a;
_0x2040e7.DEAD_TIME = 0xf;
_0x2040e7.BONK_TIME = 0x5a;
_0x2040e7.BONK_IMP = vec2.make(0.25, 0.4);
_0x2040e7.BONK_DECEL = 0.925;
_0x2040e7.BONK_FALL_SPEED = 0.5;
_0x2040e7.MOVE_SPEED_MAX = 0.075;
_0x2040e7.FALL_SPEED_MAX = 0.35;
_0x2040e7.FALL_SPEED_ACCEL = 0.085;
_0x2040e7.SPRITE = {};
_0x2040e7.SPRITE_LIST = [{
    'NAME': "RUN0",
    'ID': 0x0,
    'INDEX': 0xf
}, {
    'NAME': "RUN1",
    'ID': 0x1,
    'INDEX': 0x1f
}, {
    'NAME': "FALL",
    'ID': 0x2,
    'INDEX': 0xe
}, {
    'NAME': "DEAD",
    'ID': 0x3,
    'INDEX': 0x2f
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x2040e7.SPRITE_LIST.length; _0x1bec55++) _0x2040e7.SPRITE[_0x2040e7.SPRITE_LIST[_0x1bec55].NAME] = _0x2040e7.SPRITE_LIST[_0x1bec55], _0x2040e7.SPRITE[_0x2040e7.SPRITE_LIST[_0x1bec55].ID] = _0x2040e7.SPRITE_LIST[_0x1bec55];
_0x2040e7.STATE = {};
_0x2040e7.STATE_LIST = [{
    'NAME': "RUN",
    'ID': 0x0,
    'SPRITE': [_0x2040e7.SPRITE.RUN0, _0x2040e7.SPRITE.RUN1]
}, {
    'NAME': "FALL",
    'ID': 0x1,
    'SPRITE': [_0x2040e7.SPRITE.FALL]
}, {
    'NAME': "DEAD",
    'ID': 0x50,
    'SPRITE': [_0x2040e7.SPRITE.DEAD]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x2040e7.STATE_LIST.length; _0x1bec55++) _0x2040e7.STATE[_0x2040e7.STATE_LIST[_0x1bec55].NAME] = _0x2040e7.STATE_LIST[_0x1bec55], _0x2040e7.STATE[_0x2040e7.STATE_LIST[_0x1bec55].ID] = _0x2040e7.STATE_LIST[_0x1bec55];
_0x2040e7.prototype.update = function(_0x30228e) {
    switch (_0x30228e) {
        case 0x0:
            this.kill();
            break;
        case 0x1:
            this.bonk();
            break;
        case 0xa0:
            this.enable();
    }
};
_0x2040e7.prototype.step = function() {
    this.disabled ? this.proximity() : (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0x2040e7.STATE.BONK ? this.bonkTimer++ > _0x2040e7.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x2040e7.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x2040e7.FALL_SPEED_ACCEL, -_0x2040e7.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x2040e7.ANIMATION_RATE) % this.state.SPRITE.length], this.state === _0x2040e7.STATE.DEAD ? this.deadTimer++ < _0x2040e7.DEAD_TIME || this.destroy() : (this.control(), this.physics(), this.sound(), 0x0 > this.pos.y && this.destroy())));
};
_0x2040e7.prototype.control = function() {
    this.moveSpeed = this.dir ? -_0x2040e7.MOVE_SPEED_MAX : _0x2040e7.MOVE_SPEED_MAX;
    this.grounded ? this.setState(_0x2040e7.STATE.RUN) : this.setState(_0x2040e7.STATE.FALL);
};
_0x2040e7.prototype.physics = function() {
    this.grounded && (this.fallSpeed = 0x0);
    this.fallSpeed = Math.max(this.fallSpeed - _0x2040e7.FALL_SPEED_ACCEL, -_0x2040e7.FALL_SPEED_MAX);
    var _0x482f3b = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0x443a52 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x44dd07 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0x39b88d = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x44dd07 = this.game.world.getZone(this.level, this.zone).getTiles(_0x44dd07, _0x39b88d),
        _0x39b88d = vec2.make(0x1, 0x1),
        _0x5c888e = !0x1;
    this.grounded = !0x1;
    for (var _0x3c302a = 0x0; _0x3c302a < _0x44dd07.length; _0x3c302a++) {
        var _0x1a430b = _0x44dd07[_0x3c302a];
        _0x1a430b.definition.COLLIDE && squar.intersection(_0x1a430b.pos, _0x39b88d, _0x482f3b, this.dim) && (this.pos.x <= _0x482f3b.x && _0x482f3b.x + this.dim.x > _0x1a430b.pos.x ? (_0x482f3b.x = _0x1a430b.pos.x - this.dim.x, _0x443a52.x = _0x482f3b.x, this.moveSpeed = 0x0, _0x5c888e = !0x0) : this.pos.x >= _0x482f3b.x && _0x482f3b.x < _0x1a430b.pos.x + _0x39b88d.x && (_0x482f3b.x = _0x1a430b.pos.x + _0x39b88d.x, _0x443a52.x = _0x482f3b.x, this.moveSpeed = 0x0, _0x5c888e = !0x0));
    }
    for (_0x3c302a = 0x0; _0x3c302a < _0x44dd07.length; _0x3c302a++) _0x1a430b = _0x44dd07[_0x3c302a], _0x1a430b.definition.COLLIDE && squar.intersection(_0x1a430b.pos, _0x39b88d, _0x443a52, this.dim) && (this.pos.y >= _0x443a52.y && _0x443a52.y < _0x1a430b.pos.y + _0x39b88d.y ? (_0x443a52.y = _0x1a430b.pos.y + _0x39b88d.y, this.fallSpeed = 0x0, this.grounded = !0x0) : this.pos.y <= _0x443a52.y && _0x443a52.y + this.dim.y > _0x1a430b.pos.y && (_0x443a52.y = _0x1a430b.pos.y - this.dim.y, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x482f3b.x, _0x443a52.y);
    _0x5c888e && (this.dir = !this.dir);
};
_0x2040e7.prototype.sound = GameObject.prototype.sound;
_0x2040e7.prototype.proximity = function() {
    var _0xc67304 = this.game.getPlayer();
    _0xc67304 && !_0xc67304.dead && _0xc67304.level === this.level && _0xc67304.zone === this.zone && !this.proxHit && vec2.distance(_0xc67304.pos, this.pos) < _0x2040e7.ENABLE_DIST && (this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0xa0)), this.proxHit = !0x0);
};
_0x2040e7.prototype.enable = function() {
    this.disabled && (this.disabled = !0x1, this.disabledTimer = _0x2040e7.ENABLE_FADE_TIME);
};
_0x2040e7.prototype.disable = function() {
    this.disabled = !0x0;
};
_0x2040e7.prototype.damage = function(_0x5b7e53) {
    this.dead || (this.bonk(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x2040e7.prototype.bonk = function() {
    this.dead || (this.setState(_0x2040e7.STATE.BONK), this.moveSpeed = _0x2040e7.BONK_IMP.x, this.fallSpeed = _0x2040e7.BONK_IMP.y, this.dead = !0x0, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x2040e7.prototype.playerCollide = function(_0x5ee074) {
    this.dead || this.garbage || _0x5ee074.damage(this);
};
_0x2040e7.prototype.playerStomp = function(_0x584473) {
    this.dead || this.garbage || (this.kill(), _0x584473.bounce(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x0)));
};
_0x2040e7.prototype.playerBump = function(_0x5e0adc) {
    this.dead || this.garbage || _0x5e0adc.damage(this);
};
_0x2040e7.prototype.kill = function() {
    this.dead = !0x0;
    this.setState(_0x2040e7.STATE.DEAD);
    this.play("sfx/stomp.wav", 0x1, 0.04);
};
_0x2040e7.prototype.destroy = GameObject.prototype.destroy;
_0x2040e7.prototype.isTangible = GameObject.prototype.isTangible;
_0x2040e7.prototype.setState = function(_0x4fe620) {
    _0x4fe620 !== this.state && (this.state = _0x4fe620, 0x0 < _0x4fe620.SPRITE.length && (this.sprite = _0x4fe620.SPRITE[0x0]), this.anim = 0x0);
};
_0x2040e7.prototype.draw = function(_0xa69c24) {
    if (!this.disabled) {
        var _0x57b370;
        _0x57b370 = this.state === _0x2040e7.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0x2040e7.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x2d049f = this.sprite.INDEX, _0x2e81c8 = 0x0; _0x2e81c8 < _0x2d049f.length; _0x2e81c8++)
                for (var _0x28feb8 = 0x0; _0x28feb8 < _0x2d049f[_0x2e81c8].length; _0x28feb8++) {
                    var _0x14ac9a = _0x2d049f[_0x57b370 ? _0x2d049f.length - 0x1 - _0x2e81c8 : _0x2e81c8][_0x28feb8];
                    switch (this.variant) {
                        case 0x1:
                            _0x14ac9a += _0x2040e7.VARIANT_OFFSET;
                    }
                    _0xa69c24.push({
                        'pos': vec2.add(this.pos, vec2.make(_0x28feb8, _0x2e81c8)),
                        'reverse': !this.dir,
                        'index': _0x14ac9a,
                        'mode': _0x57b370
                    });
                } else {
                    _0x14ac9a = this.sprite.INDEX;
                    switch (this.variant) {
                        case 0x1:
                            _0x14ac9a += _0x2040e7.VARIANT_OFFSET;
                    }
                    _0xa69c24.push({
                        'pos': this.pos,
                        'reverse': !this.dir,
                        'index': _0x14ac9a,
                        'mode': _0x57b370
                    });
                }
    }
};
_0x2040e7.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x2040e7);
"use strict";

function _0xafe583(_0xa97c33, _0x554349, _0x3fb5a3, _0x1fe726, _0xe543eb, _0x547d60, _0xdab7ae) {
    GameObject.call(this, _0xa97c33, _0x554349, _0x3fb5a3, _0x1fe726);
    this.oid = _0xe543eb;
    this.variant = isNaN(parseInt(_0xdab7ae)) ? 0x0 : parseInt(_0xdab7ae);
    this.setState(parseInt(_0x547d60) ? _0xafe583.STATE.FLY : _0xafe583.STATE.RUN);
    this.bonkTimer = this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.grounded = !0x1;
    this.jump = -0x1;
    this.disabled = !0x1;
    this.disabledTimer = 0x0;
    this.proxHit = !0x1;
    this.immuneTimer = 0x0;
    this.dir = !0x0;
    this.disable();
}
_0xafe583.ASYNC = !0x1;
_0xafe583.ID = 0x12;
_0xafe583.NAME = "KOOPA";
_0xafe583.ANIMATION_RATE = 0x3;
_0xafe583.VARIANT_OFFSET = 0x20;
_0xafe583.ENABLE_FADE_TIME = 0xf;
_0xafe583.ENABLE_DIST = 0x1a;
_0xafe583.BONK_TIME = 0x5a;
_0xafe583.BONK_IMP = vec2.make(0.25, 0.4);
_0xafe583.BONK_DECEL = 0.925;
_0xafe583.BONK_FALL_SPEED = 0.5;
_0xafe583.PLAYER_IMMUNE_TIME = 0x6;
_0xafe583.MOVE_SPEED_MAX = 0.075;
_0xafe583.SHELL_MOVE_SPEED_MAX = 0.35;
_0xafe583.FALL_SPEED_MAX = 0.35;
_0xafe583.FALL_SPEED_ACCEL = 0.085;
_0xafe583.JUMP_LENGTH_MAX = 0x14;
_0xafe583.JUMP_DECEL = 0.025;
_0xafe583.TRANSFORM_TIME = 0xaf;
_0xafe583.TRANSFORM_THRESHOLD = 0x4b;
_0xafe583.SPRITE = {};
_0xafe583.SPRITE_LIST = [{
    'NAME': "FLY0",
    'ID': 0x0,
    'INDEX': [
        [0x68],
        [0x58]
    ]
}, {
    'NAME': "FLY1",
    'ID': 0x1,
    'INDEX': [
        [0x69],
        [0x59]
    ]
}, {
    'NAME': "RUN0",
    'ID': 0x2,
    'INDEX': [
        [0x66],
        [0x56]
    ]
}, {
    'NAME': "RUN1",
    'ID': 0x3,
    'INDEX': [
        [0x67],
        [0x57]
    ]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x4,
    'INDEX': 0x51
}, {
    'NAME': "SHELL",
    'ID': 0x5,
    'INDEX': 0x50
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0xafe583.SPRITE_LIST.length; _0x1bec55++) _0xafe583.SPRITE[_0xafe583.SPRITE_LIST[_0x1bec55].NAME] = _0xafe583.SPRITE_LIST[_0x1bec55], _0xafe583.SPRITE[_0xafe583.SPRITE_LIST[_0x1bec55].ID] = _0xafe583.SPRITE_LIST[_0x1bec55];
_0xafe583.STATE = {};
_0xafe583.STATE_LIST = [{
    'NAME': "FLY",
    'ID': 0x0,
    'SPRITE': [_0xafe583.SPRITE.FLY0, _0xafe583.SPRITE.FLY1]
}, {
    'NAME': "RUN",
    'ID': 0x1,
    'SPRITE': [_0xafe583.SPRITE.RUN0, _0xafe583.SPRITE.RUN1]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x2,
    'SPRITE': [_0xafe583.SPRITE.SHELL, _0xafe583.SPRITE.TRANSFORM]
}, {
    'NAME': "SHELL",
    'ID': 0x3,
    'SPRITE': [_0xafe583.SPRITE.SHELL]
}, {
    'NAME': "SPIN",
    'ID': 0x4,
    'SPRITE': [_0xafe583.SPRITE.SHELL]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0xafe583.STATE_LIST.length; _0x1bec55++) _0xafe583.STATE[_0xafe583.STATE_LIST[_0x1bec55].NAME] = _0xafe583.STATE_LIST[_0x1bec55], _0xafe583.STATE[_0xafe583.STATE_LIST[_0x1bec55].ID] = _0xafe583.STATE_LIST[_0x1bec55];
_0xafe583.prototype.update = function(_0x432173) {
    switch (_0x432173) {
        case 0x1:
            this.bonk();
            break;
        case 0x10:
            this.stomped(!0x0);
            break;
        case 0x11:
            this.stomped(!0x1);
            break;
        case 0xa0:
            this.enable();
    }
};
_0xafe583.prototype.step = function() {
    if (this.disabled) this.proximity();
    else if (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0xafe583.STATE.BONK) this.bonkTimer++ > _0xafe583.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0xafe583.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.BONK_FALL_SPEED));
    else {
        this.anim++;
        this.sprite = this.state.SPRITE[parseInt(this.anim / _0xafe583.ANIMATION_RATE) % this.state.SPRITE.length];
        if (this.state === _0xafe583.STATE.SHELL || this.state === _0xafe583.STATE.TRANSFORM) --this.transformTimer < _0xafe583.TRANSFORM_THRESHOLD && this.setState(_0xafe583.STATE.TRANSFORM), 0x0 >= this.transformTimer && this.setState(_0xafe583.STATE.RUN);
        0x0 < this.immuneTimer && this.immuneTimer--;
        this.control();
        this.physics();
        this.interaction();
        this.sound();
        0x0 > this.pos.y && this.destroy();
    }
};
_0xafe583.prototype.control = function() {
    if (this.state === _0xafe583.STATE.FLY) this.moveSpeed = this.dir ? -_0xafe583.MOVE_SPEED_MAX : _0xafe583.MOVE_SPEED_MAX, this.grounded && (this.jump = 0x0);
    else if (this.state === _0xafe583.STATE.RUN) this.moveSpeed = this.dir ? -_0xafe583.MOVE_SPEED_MAX : _0xafe583.MOVE_SPEED_MAX;
    else if (this.state === _0xafe583.STATE.SPIN) this.moveSpeed = this.dir ? -_0xafe583.SHELL_MOVE_SPEED_MAX : _0xafe583.SHELL_MOVE_SPEED_MAX;
    else if (this.state === _0xafe583.STATE.SHELL || this.state === _0xafe583.STATE.TRANSFORM) this.moveSpeed = 0x0;
    this.jump > _0xafe583.JUMP_LENGTH_MAX && (this.jump = -0x1);
};
_0xafe583.prototype.physics = function() {
    -0x1 !== this.jump ? (this.fallSpeed = _0xafe583.FALL_SPEED_MAX - this.jump * _0xafe583.JUMP_DECEL, this.jump++, this.grounded = !0x1) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.FALL_SPEED_MAX));
    this.grounded && (this.fallSpeed = 0x0);
    this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.FALL_SPEED_MAX);
    var _0x228c79 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0xa7c94d = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x186c6d = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0x1f400c = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x186c6d = this.game.world.getZone(this.level, this.zone).getTiles(_0x186c6d, _0x1f400c),
        _0x1f400c = vec2.make(0x1, 0x1),
        _0x350f0e = !0x1;
    this.grounded = !0x1;
    for (var _0x277a15 = 0x0; _0x277a15 < _0x186c6d.length; _0x277a15++) {
        var _0xb496d = _0x186c6d[_0x277a15];
        _0xb496d.definition.COLLIDE && squar.intersection(_0xb496d.pos, _0x1f400c, _0x228c79, this.dim) && (this.pos.x + this.dim.x <= _0xb496d.pos.x && _0x228c79.x + this.dim.x > _0xb496d.pos.x ? (_0x228c79.x = _0xb496d.pos.x - this.dim.x, _0xa7c94d.x = _0x228c79.x, this.moveSpeed = 0x0, _0x350f0e = !0x0) : this.pos.x >= _0xb496d.pos.x + _0x1f400c.x && _0x228c79.x < _0xb496d.pos.x + _0x1f400c.x && (_0x228c79.x = _0xb496d.pos.x + _0x1f400c.x, _0xa7c94d.x = _0x228c79.x, this.moveSpeed = 0x0, _0x350f0e = !0x0));
    }
    for (_0x277a15 = 0x0; _0x277a15 < _0x186c6d.length; _0x277a15++) _0xb496d = _0x186c6d[_0x277a15], _0xb496d.definition.COLLIDE && squar.intersection(_0xb496d.pos, _0x1f400c, _0xa7c94d, this.dim) && (this.pos.y >= _0xb496d.pos.y + _0x1f400c.y && _0xa7c94d.y < _0xb496d.pos.y + _0x1f400c.y ? (_0xa7c94d.y = _0xb496d.pos.y + _0x1f400c.y, this.grounded = !0x0) : this.pos.y + this.dim.y <= _0xb496d.pos.y && _0xa7c94d.y + this.dim.y > _0xb496d.pos.y && (_0xa7c94d.y = _0xb496d.pos.y - this.dim.y, this.jump = -0x1, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x228c79.x, _0xa7c94d.y);
    _0x350f0e && (this.dir = !this.dir);
};
_0xafe583.prototype.interaction = function() {
    if (this.state === _0xafe583.STATE.SPIN)
        for (var _0x369f51 = 0x0; _0x369f51 < this.game.objects.length; _0x369f51++) {
            var _0x597333 = this.game.objects[_0x369f51];
            _0x597333 === this || _0x597333 instanceof PlayerObject || !_0x597333.isTangible() || !_0x597333.damage || _0x597333.level === this.level && _0x597333.zone === this.zone && squar.intersection(_0x597333.pos, _0x597333.dim, this.pos, this.dim) && _0x597333.damage(this);
        }
};
_0xafe583.prototype.proximity = function() {
    var _0x12bcf2 = this.game.getPlayer();
    _0x12bcf2 && !_0x12bcf2.dead && _0x12bcf2.level === this.level && _0x12bcf2.zone === this.zone && !this.proxHit && vec2.distance(_0x12bcf2.pos, this.pos) < _0xafe583.ENABLE_DIST && (this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0xa0)), this.proxHit = !0x0);
};
_0xafe583.prototype.sound = GameObject.prototype.sound;
_0xafe583.prototype.enable = function() {
    this.disabled && (this.disabled = !0x1, this.disabledTimer = _0xafe583.ENABLE_FADE_TIME);
};
_0xafe583.prototype.disable = function() {
    this.disabled = !0x0;
};
_0xafe583.prototype.damage = function(_0x565802) {
    this.dead || (this.bonk(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0xafe583.prototype.bonk = function() {
    this.dead || (this.setState(_0xafe583.STATE.BONK), this.moveSpeed = _0xafe583.BONK_IMP.x, this.fallSpeed = _0xafe583.BONK_IMP.y, this.dead = !0x0, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0xafe583.prototype.stomped = function(_0x45b447) {
    if (this.state === _0xafe583.STATE.FLY) this.setState(_0xafe583.STATE.RUN), this.jump = -0x1;
    else if (this.state === _0xafe583.STATE.RUN) this.setState(_0xafe583.STATE.SHELL), this.transformTimer = _0xafe583.TRANSFORM_TIME;
    else if (this.state === _0xafe583.STATE.SPIN) this.setState(_0xafe583.STATE.SHELL), this.transformTimer = _0xafe583.TRANSFORM_TIME;
    else if (this.state === _0xafe583.STATE.SHELL || this.state === _0xafe583.STATE.TRANSFORM) this.setState(_0xafe583.STATE.SPIN), this.dir = _0x45b447;
    this.play("sfx/stomp.wav", 0x1, 0.04);
};
_0xafe583.prototype.playerCollide = function(_0x49360d) {
    this.dead || this.garbage || (this.state === _0xafe583.STATE.SHELL || this.state === _0xafe583.STATE.TRANSFORM ? (_0x49360d = 0x0 < _0x49360d.pos.x - this.pos.x, this.stomped(_0x49360d), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, _0x49360d ? 0x10 : 0x11)), this.immuneTimer = _0xafe583.PLAYER_IMMUNE_TIME) : 0x0 >= this.immuneTimer && _0x49360d.damage(this));
};
_0xafe583.prototype.playerStomp = function(_0x4a7d08) {
    if (!this.dead && !this.garbage) {
        var _0x2f4f3f = 0x0 < _0x4a7d08.pos.x - this.pos.x;
        _0x4a7d08.bounce();
        this.stomped(_0x2f4f3f);
        this.immuneTimer = _0xafe583.PLAYER_IMMUNE_TIME;
        this.game.out.push(NET020.encode(this.level, this.zone, this.oid, _0x2f4f3f ? 0x10 : 0x11));
    }
};
_0xafe583.prototype.playerBump = function(_0x542091) {
    this.dead || this.garbage || _0x542091.damage(this);
};
_0xafe583.prototype.kill = function() {};
_0xafe583.prototype.destroy = GameObject.prototype.destroy;
_0xafe583.prototype.isTangible = GameObject.prototype.isTangible;
_0xafe583.prototype.setState = function(_0x1ddca8) {
    _0x1ddca8 !== this.state && (this.state = _0x1ddca8, 0x0 < _0x1ddca8.SPRITE.length && (this.sprite = _0x1ddca8.SPRITE[0x0]), this.anim = 0x0);
};
_0xafe583.prototype.draw = function(_0x43f21f) {
    if (!this.disabled) {
        var _0x345a76;
        _0x345a76 = this.state === _0xafe583.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0xafe583.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x5bdb01 = this.sprite.INDEX, _0x98a94 = 0x0; _0x98a94 < _0x5bdb01.length; _0x98a94++)
                for (var _0x3f41db = 0x0; _0x3f41db < _0x5bdb01[_0x98a94].length; _0x3f41db++) {
                    var _0x3b8db1 = _0x5bdb01[0x3 !== _0x345a76 ? _0x98a94 : _0x5bdb01.length - 0x1 - _0x98a94][_0x3f41db];
                    switch (this.variant) {
                        case 0x1:
                            _0x3b8db1 += _0xafe583.VARIANT_OFFSET;
                    }
                    _0x43f21f.push({
                        'pos': vec2.add(this.pos, vec2.make(_0x3f41db, _0x98a94)),
                        'reverse': !this.dir,
                        'index': _0x3b8db1,
                        'mode': _0x345a76
                    });
                } else {
                    _0x3b8db1 = this.sprite.INDEX;
                    switch (this.variant) {
                        case 0x1:
                            _0x3b8db1 += _0xafe583.VARIANT_OFFSET;
                    }
                    _0x43f21f.push({
                        'pos': this.pos,
                        'reverse': !this.dir,
                        'index': _0x3b8db1,
                        'mode': _0x345a76
                    });
                }
    }
};
_0xafe583.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0xafe583);
"use strict";

function _0x5e412e(_0x20fee6, _0x2e48c2, _0x2b82bb, _0x254183, _0xc898a6, _0x35c708, _0x10c5aa) {
    GameObject.call(this, _0x20fee6, _0x2e48c2, _0x2b82bb, _0x254183);
    this.oid = _0xc898a6;
    this.variant = isNaN(parseInt(_0x10c5aa)) ? 0x0 : parseInt(_0x10c5aa);
    this.setState(parseInt(_0x35c708) ? _0x5e412e.STATE.FLY : _0x5e412e.STATE.RUN);
    this.bonkTimer = this.anim = 0x0;
    this.loc = [this.pos.y + 0.5 * _0x5e412e.FLY_DISTANCE, this.pos.y - 0.5 * _0x5e412e.FLY_DISTANCE];
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.disabled = this.grounded = !0x1;
    this.disabledTimer = 0x0;
    this.proxHit = !0x1;
    this.immuneTimer = 0x0;
    this.rev = !0x1;
    this.dir = !0x0;
    this.disable();
}
_0x5e412e.ASYNC = !0x1;
_0x5e412e.ID = 0x13;
_0x5e412e.NAME = "KOOPA TROOPA";
_0x5e412e.FLY_DISTANCE = 0x3;
_0x5e412e.FLY_ACCEL = 0.0025;
_0x5e412e.FLY_SPEED_MAX = 0.075;
_0x5e412e.CHECK_DIST = 0.1;
_0x5e412e.SPRITE = {};
_0x5e412e.SPRITE_LIST = [{
    'NAME': "FLY0",
    'ID': 0x0,
    'INDEX': [
        [0x64],
        [0x54]
    ]
}, {
    'NAME': "FLY1",
    'ID': 0x1,
    'INDEX': [
        [0x65],
        [0x55]
    ]
}, {
    'NAME': "RUN0",
    'ID': 0x2,
    'INDEX': [
        [0x62],
        [0x52]
    ]
}, {
    'NAME': "RUN1",
    'ID': 0x3,
    'INDEX': [
        [0x63],
        [0x53]
    ]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x4,
    'INDEX': 0x61
}, {
    'NAME': "SHELL",
    'ID': 0x5,
    'INDEX': 0x60
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5e412e.SPRITE_LIST.length; _0x1bec55++) _0x5e412e.SPRITE[_0x5e412e.SPRITE_LIST[_0x1bec55].NAME] = _0x5e412e.SPRITE_LIST[_0x1bec55], _0x5e412e.SPRITE[_0x5e412e.SPRITE_LIST[_0x1bec55].ID] = _0x5e412e.SPRITE_LIST[_0x1bec55];
_0x5e412e.STATE = {};
_0x5e412e.STATE_LIST = [{
    'NAME': "FLY",
    'ID': 0x0,
    'SPRITE': [_0x5e412e.SPRITE.FLY0, _0x5e412e.SPRITE.FLY1]
}, {
    'NAME': "RUN",
    'ID': 0x1,
    'SPRITE': [_0x5e412e.SPRITE.RUN0, _0x5e412e.SPRITE.RUN1]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x2,
    'SPRITE': [_0x5e412e.SPRITE.SHELL, _0x5e412e.SPRITE.TRANSFORM]
}, {
    'NAME': "SHELL",
    'ID': 0x3,
    'SPRITE': [_0x5e412e.SPRITE.SHELL]
}, {
    'NAME': "SPIN",
    'ID': 0x4,
    'SPRITE': [_0x5e412e.SPRITE.SHELL]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5e412e.STATE_LIST.length; _0x1bec55++) _0x5e412e.STATE[_0x5e412e.STATE_LIST[_0x1bec55].NAME] = _0x5e412e.STATE_LIST[_0x1bec55], _0x5e412e.STATE[_0x5e412e.STATE_LIST[_0x1bec55].ID] = _0x5e412e.STATE_LIST[_0x1bec55];
_0x5e412e.prototype.update = _0xafe583.prototype.update;
_0x5e412e.prototype.step = function() {
    if (this.disabled) this.proximity();
    else if (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0x5e412e.STATE.BONK) this.bonkTimer++ > _0xafe583.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0xafe583.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.BONK_FALL_SPEED));
    else {
        this.anim++;
        this.sprite = this.state.SPRITE[parseInt(this.anim / _0xafe583.ANIMATION_RATE) % this.state.SPRITE.length];
        if (this.state === _0x5e412e.STATE.SHELL || this.state === _0x5e412e.STATE.TRANSFORM) --this.transformTimer < _0xafe583.TRANSFORM_THRESHOLD && this.setState(_0x5e412e.STATE.TRANSFORM), 0x0 >= this.transformTimer && this.setState(_0x5e412e.STATE.RUN);
        0x0 < this.immuneTimer && this.immuneTimer--;
        this.control();
        this.physics();
        this.interaction();
        this.sound();
        0x0 > this.pos.y && this.destroy();
    }
};
_0x5e412e.prototype.control = function() {
    this.state === _0x5e412e.STATE.FLY && (this.moveSpeed = this.dir ? -_0xafe583.MOVE_SPEED_MAX : _0xafe583.MOVE_SPEED_MAX);
    this.state === _0x5e412e.STATE.RUN && (this.grounded && !this.checkGround() && (this.dir = !this.dir), this.moveSpeed = this.dir ? -_0xafe583.MOVE_SPEED_MAX : _0xafe583.MOVE_SPEED_MAX);
    this.state === _0x5e412e.STATE.SPIN && (this.moveSpeed = this.dir ? -_0xafe583.SHELL_MOVE_SPEED_MAX : _0xafe583.SHELL_MOVE_SPEED_MAX);
    if (this.state === _0x5e412e.STATE.SHELL || this.state === _0x5e412e.STATE.TRANSFORM) this.moveSpeed = 0x0;
};
_0x5e412e.prototype.physics = function() {
    if (this.state === _0x5e412e.STATE.FLY) this.rev ? (this.fallSpeed = Math.min(_0x5e412e.FLY_SPEED_MAX, this.fallSpeed + _0x5e412e.FLY_ACCEL), this.pos.y += this.fallSpeed, this.pos.y >= this.loc[0x0] && (this.rev = !0x1)) : (this.fallSpeed = Math.max(-_0x5e412e.FLY_SPEED_MAX, this.fallSpeed - _0x5e412e.FLY_ACCEL), this.pos.y += this.fallSpeed, this.pos.y <= this.loc[0x1] && (this.rev = !0x0));
    else {
        this.grounded && (this.fallSpeed = 0x0);
        this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.FALL_SPEED_MAX);
        var _0x487bc8 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
            _0x41141f = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
            _0x26638d = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
            _0x2160ce = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
            _0x26638d = this.game.world.getZone(this.level, this.zone).getTiles(_0x26638d, _0x2160ce),
            _0x2160ce = vec2.make(0x1, 0x1),
            _0x58fc4d = !0x1;
        this.grounded = !0x1;
        for (var _0x36c036 = 0x0; _0x36c036 < _0x26638d.length; _0x36c036++) {
            var _0x46e9db = _0x26638d[_0x36c036];
            _0x46e9db.definition.COLLIDE && squar.intersection(_0x46e9db.pos, _0x2160ce, _0x487bc8, this.dim) && (this.pos.x + this.dim.x <= _0x46e9db.pos.x && _0x487bc8.x + this.dim.x > _0x46e9db.pos.x ? (_0x487bc8.x = _0x46e9db.pos.x - this.dim.x, _0x41141f.x = _0x487bc8.x, this.moveSpeed = 0x0, _0x58fc4d = !0x0) : this.pos.x >= _0x46e9db.pos.x + _0x2160ce.x && _0x487bc8.x < _0x46e9db.pos.x + _0x2160ce.x && (_0x487bc8.x = _0x46e9db.pos.x + _0x2160ce.x, _0x41141f.x = _0x487bc8.x, this.moveSpeed = 0x0, _0x58fc4d = !0x0));
        }
        for (_0x36c036 = 0x0; _0x36c036 < _0x26638d.length; _0x36c036++) _0x46e9db = _0x26638d[_0x36c036], _0x46e9db.definition.COLLIDE && squar.intersection(_0x46e9db.pos, _0x2160ce, _0x41141f, this.dim) && (this.pos.y >= _0x46e9db.pos.y + _0x2160ce.y && _0x41141f.y < _0x46e9db.pos.y + _0x2160ce.y ? (_0x41141f.y = _0x46e9db.pos.y + _0x2160ce.y, this.fallSpeed = 0x0, this.grounded = !0x0) : this.pos.y + this.dim.y <= _0x46e9db.pos.y && _0x41141f.y + this.dim.y > _0x46e9db.pos.y && (_0x41141f.y = _0x46e9db.pos.y - this.dim.y, this.fallSpeed = 0x0));
        this.pos = vec2.make(_0x487bc8.x, _0x41141f.y);
        _0x58fc4d && (this.dir = !this.dir);
    }
};
_0x5e412e.prototype.interaction = function() {
    if (this.state === _0x5e412e.STATE.SPIN)
        for (var _0x55c0e3 = 0x0; _0x55c0e3 < this.game.objects.length; _0x55c0e3++) {
            var _0xa2c7b4 = this.game.objects[_0x55c0e3];
            _0xa2c7b4 === this || _0xa2c7b4 instanceof PlayerObject || !_0xa2c7b4.isTangible() || !_0xa2c7b4.damage || _0xa2c7b4.level === this.level && _0xa2c7b4.zone === this.zone && squar.intersection(_0xa2c7b4.pos, _0xa2c7b4.dim, this.pos, this.dim) && _0xa2c7b4.damage();
        }
};
_0x5e412e.prototype.sound = GameObject.prototype.sound;
_0x5e412e.prototype.checkGround = function() {
    var _0x1e7bcc = this.dir ? vec2.add(this.pos, vec2.make(-_0x5e412e.CHECK_DIST, 0x0)) : vec2.add(this.pos, vec2.make(_0x5e412e.CHECK_DIST + this.dim.x, 0x0));
    _0x1e7bcc.y -= 1.5;
    return this.game.world.getZone(this.level, this.zone).getTile(_0x1e7bcc).definition.COLLIDE;
};
_0x5e412e.prototype.proximity = _0xafe583.prototype.proximity;
_0x5e412e.prototype.enable = _0xafe583.prototype.enable;
_0x5e412e.prototype.disable = _0xafe583.prototype.disable;
_0x5e412e.prototype.damage = _0xafe583.prototype.damage;
_0x5e412e.prototype.bonk = function() {
    this.dead || (this.setState(_0x5e412e.STATE.BONK), this.moveSpeed = _0xafe583.BONK_IMP.x, this.fallSpeed = _0xafe583.BONK_IMP.y, this.dead = !0x0, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x5e412e.prototype.stomped = function(_0x2f1cbf) {
    if (this.state === _0x5e412e.STATE.FLY) this.setState(_0x5e412e.STATE.RUN);
    else if (this.state === _0x5e412e.STATE.RUN) this.setState(_0x5e412e.STATE.SHELL), this.transformTimer = _0xafe583.TRANSFORM_TIME;
    else if (this.state === _0x5e412e.STATE.SPIN) this.setState(_0x5e412e.STATE.SHELL), this.transformTimer = _0xafe583.TRANSFORM_TIME;
    else if (this.state === _0x5e412e.STATE.SHELL || this.state === _0x5e412e.STATE.TRANSFORM) this.setState(_0x5e412e.STATE.SPIN), this.dir = _0x2f1cbf;
    this.play("sfx/stomp.wav", 0x1, 0.04);
};
_0x5e412e.prototype.playerCollide = function(_0x2665f3) {
    this.dead || this.garbage || (this.state === _0x5e412e.STATE.SHELL || this.state === _0x5e412e.STATE.TRANSFORM ? (_0x2665f3 = 0x0 < _0x2665f3.pos.x - this.pos.x, this.stomped(_0x2665f3), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, _0x2665f3 ? 0x10 : 0x11)), this.immuneTimer = _0xafe583.PLAYER_IMMUNE_TIME) : 0x0 >= this.immuneTimer && _0x2665f3.damage(this));
};
_0x5e412e.prototype.playerStomp = _0xafe583.prototype.playerStomp;
_0x5e412e.prototype.playerBump = _0xafe583.prototype.playerBump;
_0x5e412e.prototype.kill = _0xafe583.prototype.kill;
_0x5e412e.prototype.destroy = _0xafe583.prototype.destroy;
_0x5e412e.prototype.isTangible = _0xafe583.prototype.isTangible;
_0x5e412e.prototype.setState = _0xafe583.prototype.setState;
_0x5e412e.prototype.draw = function(_0x6357b4) {
    if (!this.disabled) {
        var _0x249e88;
        _0x249e88 = this.state === _0x5e412e.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0xafe583.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0xe3aa3a = this.sprite.INDEX, _0x331f7c = 0x0; _0x331f7c < _0xe3aa3a.length; _0x331f7c++)
                for (var _0x55c5a9 = 0x0; _0x55c5a9 < _0xe3aa3a[_0x331f7c].length; _0x55c5a9++) {
                    var _0x1d1e23 = _0xe3aa3a[0x3 !== _0x249e88 ? _0x331f7c : _0xe3aa3a.length - 0x1 - _0x331f7c][_0x55c5a9];
                    switch (this.variant) {
                        case 0x1:
                            _0x1d1e23 += _0xafe583.VARIANT_OFFSET;
                    }
                    _0x6357b4.push({
                        'pos': vec2.add(this.pos, vec2.make(_0x55c5a9, _0x331f7c)),
                        'reverse': !this.dir,
                        'index': _0x1d1e23,
                        'mode': _0x249e88
                    });
                } else {
                    _0x1d1e23 = this.sprite.INDEX;
                    switch (this.variant) {
                        case 0x1:
                            _0x1d1e23 += _0xafe583.VARIANT_OFFSET;
                    }
                    _0x6357b4.push({
                        'pos': this.pos,
                        'reverse': !this.dir,
                        'index': _0x1d1e23,
                        'mode': _0x249e88
                    });
                }
    }
};
_0x5e412e.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x5e412e);
"use strict";

function _0xa70071(_0x2b798e, _0x51f029, _0x309b8b, _0x6b74f, _0x5cdcce, _0x3c9788) {
    GameObject.call(this, _0x2b798e, _0x51f029, _0x309b8b, vec2.add(_0x6b74f, vec2.make(0.6, 0x0)));
    this.oid = _0x5cdcce;
    this.variant = isNaN(parseInt(_0x3c9788)) ? 0x0 : parseInt(_0x3c9788);
    this.setState(_0xa70071.STATE.IDLE);
    this.bonkTimer = this.anim = 0x0;
    this.loc = [vec2.copy(this.pos), vec2.add(this.pos, vec2.make(0x0, -1.5))];
    this.dim = vec2.make(0.8, 0x1);
    this.dir = this.fallSpeed = this.moveSpeed = 0x0;
}
_0xa70071.ASYNC = !0x1;
_0xa70071.ID = 0x16;
_0xa70071.NAME = "UNSPELLABLE PLANT";
_0xa70071.ANIMATION_RATE = 0x3;
_0xa70071.VARIANT_OFFSET = 0x20;
_0xa70071.SOFFSET = vec2.make(-0.1, 0x0);
_0xa70071.BONK_TIME = 0x5a;
_0xa70071.BONK_IMP = vec2.make(0.25, 0.4);
_0xa70071.BONK_DECEL = 0.925;
_0xa70071.BONK_FALL_SPEED = 0.5;
_0xa70071.FALL_SPEED_ACCEL = 0.085;
_0xa70071.WAIT_TIME = 0x19;
_0xa70071.TRAVEL_SPEED = 0.05;
_0xa70071.SPRITE = {};
_0xa70071.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': [
        [0x6a],
        [0x5a]
    ]
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': [
        [0x6b],
        [0x5b]
    ]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0xa70071.SPRITE_LIST.length; _0x1bec55++) _0xa70071.SPRITE[_0xa70071.SPRITE_LIST[_0x1bec55].NAME] = _0xa70071.SPRITE_LIST[_0x1bec55], _0xa70071.SPRITE[_0xa70071.SPRITE_LIST[_0x1bec55].ID] = _0xa70071.SPRITE_LIST[_0x1bec55];
_0xa70071.STATE = {};
_0xa70071.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0xa70071.SPRITE.IDLE0, _0xa70071.SPRITE.IDLE1]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0xa70071.STATE_LIST.length; _0x1bec55++) _0xa70071.STATE[_0xa70071.STATE_LIST[_0x1bec55].NAME] = _0xa70071.STATE_LIST[_0x1bec55], _0xa70071.STATE[_0xa70071.STATE_LIST[_0x1bec55].ID] = _0xa70071.STATE_LIST[_0x1bec55];
_0xa70071.prototype.update = function(_0x5c481f) {
    switch (_0x5c481f) {
        case 0x1:
            this.bonk();
    }
};
_0xa70071.prototype.step = function() {
    this.state === _0xa70071.STATE.BONK ? this.bonkTimer++ > _0xa70071.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0xa70071.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0xa70071.FALL_SPEED_ACCEL, -_0xa70071.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0xa70071.ANIMATION_RATE) % this.state.SPRITE.length], 0x0 < --this.waitTimer || (this.control(), this.physics(), this.sound()));
};
_0xa70071.prototype.control = function() {};
_0xa70071.prototype.physics = function() {
    var _0x3e7dc7 = this.loc[this.dir ? 0x0 : 0x1];
    vec2.distance(this.pos, _0x3e7dc7) <= _0xa70071.TRAVEL_SPEED ? (this.pos = _0x3e7dc7, this.dir = !this.dir, this.waitTimer = _0xa70071.WAIT_TIME) : this.pos = vec2.add(this.pos, vec2.scale(vec2.normalize(vec2.subtract(_0x3e7dc7, this.pos)), _0xa70071.TRAVEL_SPEED));
};
_0xa70071.prototype.sound = GameObject.prototype.sound;
_0xa70071.prototype.damage = function(_0x508a32) {
    this.dead || (this.bonk(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0xa70071.prototype.bonk = function() {
    this.dead || (this.setState(_0xa70071.STATE.BONK), this.moveSpeed = _0xa70071.BONK_IMP.x, this.fallSpeed = _0xa70071.BONK_IMP.y, this.dead = !0x0, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0xa70071.prototype.playerCollide = function(_0x3bb251) {
    this.dead || this.garbage || _0x3bb251.damage(this);
};
_0xa70071.prototype.playerStomp = function(_0x8423cf) {
    this.dead || this.garbage || _0x8423cf.damage(this);
};
_0xa70071.prototype.playerBump = function(_0x321a69) {
    this.dead || this.garbage || _0x321a69.damage(this);
};
_0xa70071.prototype.kill = function() {};
_0xa70071.prototype.destroy = GameObject.prototype.destroy;
_0xa70071.prototype.isTangible = GameObject.prototype.isTangible;
_0xa70071.prototype.setState = function(_0x3f1709) {
    _0x3f1709 !== this.state && (this.state = _0x3f1709, 0x0 < _0x3f1709.SPRITE.length && (this.sprite = _0x3f1709.SPRITE[0x0]), this.anim = 0x0);
};
_0xa70071.prototype.draw = function(_0x18fbd3) {
    var _0x1227df;
    _0x1227df = this.state === _0xa70071.STATE.BONK ? 0x3 : 0x0;
    if (this.sprite.INDEX instanceof Array)
        for (var _0x272181 = this.sprite.INDEX, _0x4bdd3b = 0x0; _0x4bdd3b < _0x272181.length; _0x4bdd3b++)
            for (var _0x3c8e54 = 0x0; _0x3c8e54 < _0x272181[_0x4bdd3b].length; _0x3c8e54++) {
                var _0x29f699 = _0x272181[_0x1227df ? _0x272181.length - 0x1 - _0x4bdd3b : _0x4bdd3b][_0x3c8e54];
                switch (this.variant) {
                    case 0x1:
                        _0x29f699 += _0xa70071.VARIANT_OFFSET;
                }
                _0x18fbd3.push({
                    'pos': vec2.add(vec2.add(this.pos, vec2.make(_0x3c8e54, _0x4bdd3b)), _0xa70071.SOFFSET),
                    'reverse': !this.dir,
                    'index': _0x29f699,
                    'mode': _0x1227df
                });
            } else {
                _0x29f699 = this.sprite.INDEX;
                switch (this.variant) {
                    case 0x1:
                        _0x29f699 += _0xa70071.VARIANT_OFFSET;
                }
                _0x18fbd3.push({
                    'pos': vec2.add(this.pos, _0xa70071.SOFFSET),
                    'reverse': !this.dir,
                    'index': _0x29f699,
                    'mode': _0x1227df
                });
            }
};
_0xa70071.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0xa70071);
"use strict";

function _0x25ddce(_0x171be9, _0x49adc1, _0x3c512b, _0xf8ff83, _0x140a9f, _0x26dec7, _0x3b38a6) {
    GameObject.call(this, _0x171be9, _0x49adc1, _0x3c512b, _0xf8ff83);
    this.oid = _0x140a9f;
    this.setState(_0x25ddce.STATE.IDLE);
    this.delay = isNaN(parseInt(_0x26dec7)) ? _0x25ddce.DELAY_DEFAULT : parseInt(_0x26dec7);
    this.impulse = isNaN(parseFloat(_0x3b38a6)) ? 0x1 : parseFloat(_0x3b38a6);
    this.anim = 0x0;
    this.disabled = !0x1;
    this.delayTimer = this.delay;
    this.bonkTimer = 0x0;
    this.pos.x += _0x25ddce.SOFFSET.x;
    this.loc = vec2.copy(this.pos);
    this.moveSpeed = this.fallSpeed = 0x0;
    this.dim = vec2.make(0.7, 0.7);
    this.dir = !0x0;
}
_0x25ddce.ASYNC = !0x1;
_0x25ddce.ID = 0x15;
_0x25ddce.NAME = "FLYING FISH";
_0x25ddce.ANIMATION_RATE = 0x3;
_0x25ddce.BONK_TIME = 0x5a;
_0x25ddce.BONK_IMP = vec2.make(0.25, 0.4);
_0x25ddce.BONK_DECEL = 0.925;
_0x25ddce.BONK_FALL_SPEED = 0.5;
_0x25ddce.BONK_FALL_ACCEL = 0.085;
_0x25ddce.DELAY_DEFAULT = 0x96;
_0x25ddce.IMPULSE = vec2.make(0.225, 0.335);
_0x25ddce.DRAG = 0.996;
_0x25ddce.FALL_SPEED_ACCEL = 0.0055;
_0x25ddce.SOFFSET = vec2.make(0.15, 0.15);
_0x25ddce.SPRITE = {};
_0x25ddce.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xce
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xcf
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x25ddce.SPRITE_LIST.length; _0x1bec55++) _0x25ddce.SPRITE[_0x25ddce.SPRITE_LIST[_0x1bec55].NAME] = _0x25ddce.SPRITE_LIST[_0x1bec55], _0x25ddce.SPRITE[_0x25ddce.SPRITE_LIST[_0x1bec55].ID] = _0x25ddce.SPRITE_LIST[_0x1bec55];
_0x25ddce.STATE = {};
_0x25ddce.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x25ddce.SPRITE.IDLE0, _0x25ddce.SPRITE.IDLE1]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x25ddce.STATE_LIST.length; _0x1bec55++) _0x25ddce.STATE[_0x25ddce.STATE_LIST[_0x1bec55].NAME] = _0x25ddce.STATE_LIST[_0x1bec55], _0x25ddce.STATE[_0x25ddce.STATE_LIST[_0x1bec55].ID] = _0x25ddce.STATE_LIST[_0x1bec55];
_0x25ddce.prototype.update = function(_0x31e5a7) {
    switch (_0x31e5a7) {
        case 0x1:
            this.bonk();
    }
};
_0x25ddce.prototype.step = function() {
    this.state === _0x25ddce.STATE.BONK ? this.bonkTimer++ > _0x25ddce.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x25ddce.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x25ddce.BONK_FALL_ACCEL, -_0x25ddce.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x25ddce.ANIMATION_RATE) % this.state.SPRITE.length], 0x0 < this.delayTimer ? this.delayTimer-- : this.jump(), this.physics(), this.sound());
};
_0x25ddce.prototype.physics = function() {
    this.pos.y > this.loc.y || 0x0 < this.fallSpeed ? (this.fallSpeed = (this.fallSpeed - _0x25ddce.FALL_SPEED_ACCEL) * _0x25ddce.DRAG, this.pos.x += this.moveSpeed * _0x25ddce.DRAG, this.pos.y += this.fallSpeed) : this.disable();
};
_0x25ddce.prototype.sound = GameObject.prototype.sound;
_0x25ddce.prototype.jump = function() {
    this.enable();
    this.pos = vec2.copy(this.loc);
    this.fallSpeed = _0x25ddce.IMPULSE.y * this.impulse;
    this.moveSpeed = _0x25ddce.IMPULSE.x * this.impulse;
    this.delayTimer = this.delay;
};
_0x25ddce.prototype.disable = function() {
    this.disabled = !0x0;
};
_0x25ddce.prototype.enable = function() {
    this.disabled = !0x1;
};
_0x25ddce.prototype.damage = function(_0x491a38) {
    this.dead || (this.bonk(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x25ddce.prototype.bonk = function() {
    this.dead || (this.setState(_0x25ddce.STATE.BONK), this.moveSpeed = _0x25ddce.BONK_IMP.x, this.fallSpeed = _0x25ddce.BONK_IMP.y, this.dead = !0x0, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x25ddce.prototype.playerCollide = function(_0x28a0cf) {
    this.dead || this.garbage || _0x28a0cf.damage(this);
};
_0x25ddce.prototype.playerStomp = function(_0x2eb09b) {
    this.dead || this.garbage || (this.bonk(), _0x2eb09b.bounce(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x25ddce.prototype.playerBump = function(_0x5e66c8) {
    this.playerCollide(_0x5e66c8);
};
_0x25ddce.prototype.kill = function() {};
_0x25ddce.prototype.isTangible = GameObject.prototype.isTangible;
_0x25ddce.prototype.destroy = GameObject.prototype.destroy;
_0x25ddce.prototype.setState = function(_0x2afd8b) {
    _0x2afd8b !== this.state && (this.state = _0x2afd8b, 0x0 < _0x2afd8b.SPRITE.length && (this.sprite = _0x2afd8b.SPRITE[0x0]), this.anim = 0x0);
};
_0x25ddce.prototype.draw = function(_0x45125b) {
    if (!this.disabled) {
        var _0x455f65;
        _0x455f65 = this.state === _0x25ddce.STATE.BONK ? 0x3 : 0x0;
        _0x45125b.push({
            'pos': vec2.subtract(this.pos, _0x25ddce.SOFFSET),
            'reverse': this.dir,
            'index': this.sprite.INDEX,
            'mode': _0x455f65
        });
    }
};
_0x25ddce.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x25ddce);
"use strict";

function _0x1f4abb(_0x25bac6, _0xab1441, _0x1bd210, _0xd7b1a8, _0x55466e, _0xde92bf) {
    GameObject.call(this, _0x25bac6, _0xab1441, _0x1bd210, _0xd7b1a8);
    this.oid = _0x55466e;
    this.setState(_0x1f4abb.STATE.IDLE);
    this.bonkTimer = this.anim = 0x0;
    this.dim = vec2.make(0x1, 1.5);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.disabled = this.grounded = !0x1;
    this.disabledTimer = 0x0;
    this.proxHit = !0x1;
    this.hammer = undefined;
    this.loc = 0x1 === parseInt(_0xde92bf) ? [this.pos.x + _0x1f4abb.MOVE_AREA, this.pos.x] : [this.pos.x, this.pos.x - _0x1f4abb.MOVE_AREA];
    this.groundTimer = this.double = this.attackAnimTimer = this.attackTimer = 0x0;
    this.jumpTimer = -0x1;
    this.reverse = !0x1;
    this.dir = !0x0;
    this.disable();
}
_0x1f4abb.ASYNC = !0x1;
_0x1f4abb.ID = 0x31;
_0x1f4abb.NAME = "HAMMER BRO";
_0x1f4abb.ANIMATION_RATE = 0x5;
_0x1f4abb.ENABLE_FADE_TIME = 0xf;
_0x1f4abb.ENABLE_DIST = 0x21;
_0x1f4abb.BONK_TIME = 0x5a;
_0x1f4abb.BONK_IMP = vec2.make(0.25, 0.4);
_0x1f4abb.BONK_DECEL = 0.925;
_0x1f4abb.BONK_FALL_SPEED = 0.5;
_0x1f4abb.MOVE_SPEED_MAX = 0.095;
_0x1f4abb.JUMP_DELAY = 0x37;
_0x1f4abb.MOVE_AREA = 0x4;
_0x1f4abb.JUMP_LENGTH = 0x8;
_0x1f4abb.JUMP_DECEL = 0.009;
_0x1f4abb.ATTACK_DELAY = 0x4b;
_0x1f4abb.DOUBLE_RATE = 0x5;
_0x1f4abb.ATTACK_ANIM_LENGTH = 0xd;
_0x1f4abb.PROJ_OFFSET = vec2.make(0.5, 1.25);
_0x1f4abb.FALL_SPEED_MAX = 0.3;
_0x1f4abb.FALL_SPEED_ACCEL = 0.085;
_0x1f4abb.SPRITE = {};
_0x1f4abb.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': [
        [0x6e],
        [0x5e]
    ]
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': [
        [0x6d],
        [0x5d]
    ]
}, {
    'NAME': "ATTACK",
    'ID': 0x2,
    'INDEX': [
        [0x6c],
        [0x5c]
    ]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x1f4abb.SPRITE_LIST.length; _0x1bec55++) _0x1f4abb.SPRITE[_0x1f4abb.SPRITE_LIST[_0x1bec55].NAME] = _0x1f4abb.SPRITE_LIST[_0x1bec55], _0x1f4abb.SPRITE[_0x1f4abb.SPRITE_LIST[_0x1bec55].ID] = _0x1f4abb.SPRITE_LIST[_0x1bec55];
_0x1f4abb.STATE = {};
_0x1f4abb.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x1f4abb.SPRITE.IDLE0, _0x1f4abb.SPRITE.IDLE1]
}, {
    'NAME': "FALL",
    'ID': 0x1,
    'SPRITE': [_0x1f4abb.SPRITE.IDLE1]
}, {
    'NAME': "ATTACK",
    'ID': 0x2,
    'SPRITE': [_0x1f4abb.SPRITE.ATTACK]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x1f4abb.STATE_LIST.length; _0x1bec55++) _0x1f4abb.STATE[_0x1f4abb.STATE_LIST[_0x1bec55].NAME] = _0x1f4abb.STATE_LIST[_0x1bec55], _0x1f4abb.STATE[_0x1f4abb.STATE_LIST[_0x1bec55].ID] = _0x1f4abb.STATE_LIST[_0x1bec55];
_0x1f4abb.prototype.update = function(_0x3402c2) {
    switch (_0x3402c2) {
        case 0x1:
            this.bonk();
            break;
        case 0xa0:
            this.enable();
    }
};
_0x1f4abb.prototype.step = function() {
    this.disabled ? this.proximity() : (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0x1f4abb.STATE.BONK ? this.bonkTimer++ > _0x1f4abb.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x1f4abb.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x1f4abb.FALL_SPEED_ACCEL, -_0x1f4abb.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x1f4abb.ANIMATION_RATE) % this.state.SPRITE.length], this.face(), this.control(), this.physics(), this.sound(), 0x0 < this.attackAnimTimer ? (this.setState(_0x1f4abb.STATE.ATTACK), this.attach(), this.attackAnimTimer--) : this.attackTimer++ > _0x1f4abb.ATTACK_DELAY ? this.attack() : this.hammer = undefined, 0x0 > this.pos.y && this.destroy()));
};
_0x1f4abb.prototype.control = function() {
    this.grounded ? (_0x1f4abb.JUMP_DELAY < this.groundTimer++ && (this.groundTimer = this.jumpTimer = 0x0), this.pos.x > this.loc[0x0] ? this.reverse = !0x0 : this.pos.x < this.loc[0x1] && (this.reverse = !0x1)) : this.jumpTimer > _0x1f4abb.JUMP_LENGTH && (this.jumpTimer = -0x1);
    this.grounded ? this.setState(_0x1f4abb.STATE.IDLE) : this.setState(_0x1f4abb.STATE.FALL);
    this.moveSpeed = 0.75 * this.moveSpeed + 0.25 * (this.reverse ? -_0x1f4abb.MOVE_SPEED_MAX : _0x1f4abb.MOVE_SPEED_MAX);
};
_0x1f4abb.prototype.physics = function() {
    -0x1 !== this.jumpTimer ? (this.fallSpeed = _0x1f4abb.FALL_SPEED_MAX - this.jumpTimer * _0x1f4abb.JUMP_DECEL, this.jumpTimer++, this.grounded = !0x1) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - _0x1f4abb.FALL_SPEED_ACCEL, -_0x1f4abb.FALL_SPEED_MAX));
    var _0x12b803 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0x176893 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x27250d = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0xfe9df8 = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x27250d = this.game.world.getZone(this.level, this.zone).getTiles(_0x27250d, _0xfe9df8),
        _0xfe9df8 = vec2.make(0x1, 0x1);
    this.grounded = !0x1;
    for (var _0xac132f = 0x0; _0xac132f < _0x27250d.length; _0xac132f++) {
        var _0x44201c = _0x27250d[_0xac132f];
        _0x44201c.definition.COLLIDE && squar.intersection(_0x44201c.pos, _0xfe9df8, _0x12b803, this.dim) && (this.pos.x + this.dim.x <= _0x44201c.pos.x && _0x12b803.x + this.dim.x > _0x44201c.pos.x ? (_0x12b803.x = _0x44201c.pos.x - this.dim.x, _0x176893.x = _0x12b803.x, this.moveSpeed = 0x0) : this.pos.x >= _0x44201c.pos.x + _0xfe9df8.x && _0x12b803.x < _0x44201c.pos.x + _0xfe9df8.x && (_0x12b803.x = _0x44201c.pos.x + _0xfe9df8.x, _0x176893.x = _0x12b803.x, this.moveSpeed = 0x0));
    }
    for (_0xac132f = 0x0; _0xac132f < _0x27250d.length; _0xac132f++) _0x44201c = _0x27250d[_0xac132f], _0x44201c.definition.COLLIDE && squar.intersection(_0x44201c.pos, _0xfe9df8, _0x176893, this.dim) && (this.pos.y >= _0x44201c.pos.y + _0xfe9df8.y && _0x176893.y < _0x44201c.pos.y + _0xfe9df8.y ? (_0x176893.y = _0x44201c.pos.y + _0xfe9df8.y, this.fallSpeed = 0x0, this.grounded = !0x0) : this.pos.y + this.dim.y <= _0x44201c.pos.y && _0x176893.y + this.dim.y > _0x44201c.pos.y && (_0x176893.y = _0x44201c.pos.y - this.dim.y, this.jumpTimer = -0x1, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x12b803.x, _0x176893.y);
};
_0x1f4abb.prototype.proximity = function() {
    var _0x2e2202 = this.game.getPlayer();
    _0x2e2202 && !_0x2e2202.dead && _0x2e2202.level === this.level && _0x2e2202.zone === this.zone && !this.proxHit && vec2.distance(_0x2e2202.pos, this.pos) < _0x1f4abb.ENABLE_DIST && (this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0xa0)), this.proxHit = !0x0);
};
_0x1f4abb.prototype.face = function() {
    for (var _0xe75dbb, _0x338971 = 0x0; _0x338971 < this.game.objects.length; _0x338971++) {
        var _0x345c5d = this.game.objects[_0x338971];
        _0x345c5d instanceof PlayerObject && _0x345c5d.level === this.level && _0x345c5d.zone === this.zone && _0x345c5d.isTangible() && (!_0xe75dbb || Math.abs(_0xe75dbb) > vec2.distance(_0x345c5d.pos, this.pos)) && (_0xe75dbb = _0x345c5d.pos.x - this.pos.x);
    }
    this.dir = _0xe75dbb ? 0x0 > _0xe75dbb : !0x0;
};
_0x1f4abb.prototype.sound = GameObject.prototype.sound;
_0x1f4abb.prototype.enable = function() {
    this.disabled && (this.disabled = !0x1, this.disabledTimer = _0x1f4abb.ENABLE_FADE_TIME);
};
_0x1f4abb.prototype.disable = function() {
    this.disabled = !0x0;
};
_0x1f4abb.prototype.attack = function() {
    this.attackAnimTimer = _0x1f4abb.ATTACK_ANIM_LENGTH;
    this.attackTimer = 0x0;
    this.hammer = this.game.createObject(_0x1bc0ed.ID, this.level, this.zone, vec2.add(this.pos, _0x1f4abb.PROJ_OFFSET), [this]);
    ++this.double > _0x1f4abb.DOUBLE_RATE && (this.double = 0x0, this.attackTimer = _0x1f4abb.ATTACK_DELAY);
};
_0x1f4abb.prototype.attach = function() {
    this.hammer && (this.hammer.pos = vec2.add(this.pos, _0x1f4abb.PROJ_OFFSET), this.hammer.dir = !this.dir);
};
_0x1f4abb.prototype.playerCollide = function(_0x4b48ff) {
    this.dead || this.garbage || _0x4b48ff.damage(this);
};
_0x1f4abb.prototype.playerStomp = function(_0x382396) {
    this.dead || this.garbage || (this.bonk(), _0x382396.bounce(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x1f4abb.prototype.playerBump = _0x1f4abb.prototype.playerCollide;
_0x1f4abb.prototype.damage = function(_0x23a76d) {
    this.dead || (this.bonk(), NET020.encode(this.level, this.zone, this.oid, 0x1));
};
_0x1f4abb.prototype.bonk = function() {
    this.dead || (this.setState(_0x1f4abb.STATE.BONK), this.moveSpeed = _0x1f4abb.BONK_IMP.x, this.fallSpeed = _0x1f4abb.BONK_IMP.y, this.dead = !0x0, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x1f4abb.prototype.kill = function() {};
_0x1f4abb.prototype.isTangible = GameObject.prototype.isTangible;
_0x1f4abb.prototype.destroy = GameObject.prototype.destroy;
_0x1f4abb.prototype.setState = function(_0x44adae) {
    _0x44adae !== this.state && (this.state = _0x44adae, 0x0 < _0x44adae.SPRITE.length && (this.sprite = _0x44adae.SPRITE[0x0]), this.anim = 0x0);
};
_0x1f4abb.prototype.draw = function(_0x4d458c) {
    if (!this.disabled) {
        var _0x534d18;
        _0x534d18 = this.state === _0x1f4abb.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0x1f4abb.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x571330 = this.sprite.INDEX, _0x3d1c2f = 0x0; _0x3d1c2f < _0x571330.length; _0x3d1c2f++)
                for (var _0x35bd43 = 0x0; _0x35bd43 < _0x571330[_0x3d1c2f].length; _0x35bd43++) _0x4d458c.push({
                    'pos': vec2.add(this.pos, vec2.make(_0x35bd43, _0x3d1c2f)),
                    'reverse': !this.dir,
                    'index': _0x571330[0x3 !== _0x534d18 ? _0x3d1c2f : _0x571330.length - 0x1 - _0x3d1c2f][_0x35bd43],
                    'mode': _0x534d18
                });
        else _0x4d458c.push({
            'pos': this.pos,
            'reverse': !this.dir,
            'index': this.sprite.INDEX,
            'mode': _0x534d18
        });
    }
};
_0x1f4abb.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x1f4abb);
"use strict";

function BowserObject(_0x296e51, _0xaf6db9, _0x35a12d, _0x5dd1db, _0x1c5ca6) {
    GameObject.call(this, _0x296e51, _0xaf6db9, _0x35a12d, _0x5dd1db);
    this.oid = _0x1c5ca6;
    this.state = BowserObject.STATE.RUN;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x0;
    this.health = BowserObject.HEALTH;
    this.bonkTimer = 0x0;
    this.dim = vec2.make(0x2, 0x2);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.grounded = !0x1;
    this.loc = [this.pos.x, this.pos.x - BowserObject.MOVE_AREA];
    this.groundTimer = this.attackAnimTimer = this.attackTimer = 0x0;
    this.jumpTimer = -0x1;
    this.reverse = !0x1;
    this.dir = !0x0;
}
BowserObject.ASYNC = !0x0;
BowserObject.ID = 0x19;
BowserObject.NAME = "BOWSER";
BowserObject.ANIMATION_RATE = 0x5;
BowserObject.HEALTH = 0x5;
BowserObject.BONK_TIME = 0x5a;
BowserObject.BONK_IMP = vec2.make(0.25, 0.4);
BowserObject.BONK_DECEL = 0.925;
BowserObject.BONK_FALL_SPEED = 0.5;
BowserObject.MOVE_SPEED_MAX = 0.095;
BowserObject.JUMP_DELAY = 0x2d;
BowserObject.MOVE_AREA = 0x5;
BowserObject.JUMP_LENGTH = 0x6;
BowserObject.JUMP_DECEL = 0.009;
BowserObject.ATTACK_DELAY = 0x4b;
BowserObject.ATTACK_ANIM_LENGTH = 0xf;
BowserObject.PROJ_OFFSET = vec2.make(-0.25, 0.25);
BowserObject.FALL_SPEED_MAX = 0.3;
BowserObject.FALL_SPEED_ACCEL = 0.085;
BowserObject.SPRITE = {};
BowserObject.SPRITE_LIST = [{
    'NAME': "RUN0",
    'ID': 0x0,
    'INDEX': [
        [0xc4, 0xc5],
        [0xb4, 0xb5]
    ]
}, {
    'NAME': "RUN1",
    'ID': 0x1,
    'INDEX': [
        [0xc6, 0xc7],
        [0xb6, 0xb7]
    ]
}, {
    'NAME': "ATTACK0",
    'ID': 0x2,
    'INDEX': [
        [0xc0, 0xc1],
        [0xb0, 0xb1]
    ]
}, {
    'NAME': "ATTACK1",
    'ID': 0x3,
    'INDEX': [
        [0xc2, 0xc3],
        [0xb2, 0xb3]
    ]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < BowserObject.SPRITE_LIST.length; _0x1bec55++) BowserObject.SPRITE[BowserObject.SPRITE_LIST[_0x1bec55].NAME] = BowserObject.SPRITE_LIST[_0x1bec55], BowserObject.SPRITE[BowserObject.SPRITE_LIST[_0x1bec55].ID] = BowserObject.SPRITE_LIST[_0x1bec55];
BowserObject.STATE = {};
BowserObject.STATE_LIST = [{
    'NAME': "RUN",
    'ID': 0x0,
    'SPRITE': [BowserObject.SPRITE.RUN0, BowserObject.SPRITE.RUN1]
}, {
    'NAME': "ATTACK",
    'ID': 0x1,
    'SPRITE': [BowserObject.SPRITE.ATTACK0, BowserObject.SPRITE.ATTACK1]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < BowserObject.STATE_LIST.length; _0x1bec55++) BowserObject.STATE[BowserObject.STATE_LIST[_0x1bec55].NAME] = BowserObject.STATE_LIST[_0x1bec55], BowserObject.STATE[BowserObject.STATE_LIST[_0x1bec55].ID] = BowserObject.STATE_LIST[_0x1bec55];
BowserObject.prototype.update = function(_0x45393d) {};
BowserObject.prototype.step = function() {
    this.state === BowserObject.STATE.BONK ? this.bonkTimer++ > BowserObject.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= BowserObject.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - BowserObject.FALL_SPEED_ACCEL, -BowserObject.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / BowserObject.ANIMATION_RATE) % this.state.SPRITE.length], this.control(), this.physics(), this.sound(), this.attackTimer++ > BowserObject.ATTACK_DELAY && this.attack(), 0x0 < this.attackAnimTimer ? (this.setState(BowserObject.STATE.ATTACK), this.attackAnimTimer--) : this.setState(BowserObject.STATE.RUN), 0x0 > this.pos.y && this.destroy());
};
BowserObject.prototype.control = function() {
    this.grounded ? (BowserObject.JUMP_DELAY < this.groundTimer++ && (this.groundTimer = this.jumpTimer = 0x0), this.pos.x > this.loc[0x0] ? this.reverse = !0x0 : this.pos.x < this.loc[0x1] && (this.reverse = !0x1)) : this.jumpTimer > BowserObject.JUMP_LENGTH && (this.jumpTimer = -0x1);
    this.moveSpeed = 0.75 * this.moveSpeed + 0.25 * (this.reverse ? -BowserObject.MOVE_SPEED_MAX : BowserObject.MOVE_SPEED_MAX);
};
BowserObject.prototype.physics = function() {
    -0x1 !== this.jumpTimer ? (this.fallSpeed = BowserObject.FALL_SPEED_MAX - this.jumpTimer * BowserObject.JUMP_DECEL, this.jumpTimer++, this.grounded = !0x1) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - BowserObject.FALL_SPEED_ACCEL, -BowserObject.FALL_SPEED_MAX));
    var _0x85d755 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0x471885 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x3ec375 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0x486f5e = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x3ec375 = this.game.world.getZone(this.level, this.zone).getTiles(_0x3ec375, _0x486f5e),
        _0x486f5e = vec2.make(0x1, 0x1);
    this.grounded = !0x1;
    for (var _0x2d6663 = 0x0; _0x2d6663 < _0x3ec375.length; _0x2d6663++) {
        var _0x50845a = _0x3ec375[_0x2d6663];
        _0x50845a.definition.COLLIDE && squar.intersection(_0x50845a.pos, _0x486f5e, _0x85d755, this.dim) && (this.pos.x + this.dim.x <= _0x50845a.pos.x && _0x85d755.x + this.dim.x > _0x50845a.pos.x ? (_0x85d755.x = _0x50845a.pos.x - this.dim.x, _0x471885.x = _0x85d755.x, this.moveSpeed = 0x0) : this.pos.x >= _0x50845a.pos.x + _0x486f5e.x && _0x85d755.x < _0x50845a.pos.x + _0x486f5e.x && (_0x85d755.x = _0x50845a.pos.x + _0x486f5e.x, _0x471885.x = _0x85d755.x, this.moveSpeed = 0x0));
    }
    for (_0x2d6663 = 0x0; _0x2d6663 < _0x3ec375.length; _0x2d6663++) _0x50845a = _0x3ec375[_0x2d6663], _0x50845a.definition.COLLIDE && squar.intersection(_0x50845a.pos, _0x486f5e, _0x471885, this.dim) && (this.pos.y >= _0x50845a.pos.y + _0x486f5e.y && _0x471885.y < _0x50845a.pos.y + _0x486f5e.y ? (_0x471885.y = _0x50845a.pos.y + _0x486f5e.y, this.fallSpeed = 0x0, this.grounded = !0x0) : this.pos.y + this.dim.y <= _0x50845a.pos.y && _0x471885.y + this.dim.y > _0x50845a.pos.y && (_0x471885.y = _0x50845a.pos.y - this.dim.y, this.jumpTimer = -0x1, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x85d755.x, _0x471885.y);
};
BowserObject.prototype.sound = GameObject.prototype.sound;
BowserObject.prototype.attack = function() {
    this.attackAnimTimer = BowserObject.ATTACK_ANIM_LENGTH;
    this.attackTimer = 0x0;
    this.game.createObject(_0x1899b7.ID, this.level, this.zone, vec2.add(this.pos, BowserObject.PROJ_OFFSET), []);
    this.play("sfx/breath.wav", 1.5, 0.04);
};
BowserObject.prototype.playerCollide = function(_0x30ea43) {
    this.dead || this.garbage || _0x30ea43.damage(this);
};
BowserObject.prototype.playerStomp = BowserObject.prototype.playerCollide;
BowserObject.prototype.playerBump = BowserObject.prototype.playerCollide;
BowserObject.prototype.damage = function(_0x25178b) {
    this.dead || 0x0 >= --this.health && this.bonk();
};
BowserObject.prototype.bonk = function() {
    this.dead || (this.setState(BowserObject.STATE.BONK), this.moveSpeed = BowserObject.BONK_IMP.x, this.fallSpeed = BowserObject.BONK_IMP.y, this.dead = !0x0, this.play("sfx/kick.wav", 0x1, 0.04));
};
BowserObject.prototype.kill = function() {};
BowserObject.prototype.isTangible = GameObject.prototype.isTangible;
BowserObject.prototype.destroy = GameObject.prototype.destroy;
BowserObject.prototype.setState = function(_0x19037e) {
    _0x19037e !== this.state && (this.state = _0x19037e, 0x0 < _0x19037e.SPRITE.length && (this.sprite = _0x19037e.SPRITE[0x0]), this.anim = 0x0);
};
BowserObject.prototype.draw = function(_0xdf4ab3) {
    var _0x21f360;
    _0x21f360 = this.state === BowserObject.STATE.BONK ? 0x3 : 0x0;
    if (this.sprite.INDEX instanceof Array)
        for (var _0x132286 = this.sprite.INDEX, _0x1479b4 = 0x0; _0x1479b4 < _0x132286.length; _0x1479b4++)
            for (var _0x58ee5e = 0x0; _0x58ee5e < _0x132286[_0x1479b4].length; _0x58ee5e++) _0xdf4ab3.push({
                'pos': vec2.add(this.pos, vec2.make(_0x58ee5e, _0x1479b4)),
                'reverse': !this.dir,
                'index': _0x132286[_0x21f360 ? _0x132286.length - 0x1 - _0x1479b4 : _0x1479b4][_0x58ee5e],
                'mode': _0x21f360
            });
    else _0xdf4ab3.push({
        'pos': this.pos,
        'reverse': !this.dir,
        'index': this.sprite.INDEX,
        'mode': _0x21f360
    });
};
BowserObject.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(BowserObject);
"use strict";

function _0x5bbb5e(_0x38f9a7, _0x27f352, _0x55bfab, _0x551362, _0x61ea43, _0x1b085a, _0x1d905f, _0x54af71, _0x46cdb7, _0x151f14, _0x271b52, _0x57f60d) {
    GameObject.call(this, _0x38f9a7, _0x27f352, _0x55bfab, _0x551362);
    this.oid = _0x61ea43;
    this.setState(_0x5bbb5e.STATE.IDLE);
    this.loc = 0x0 === parseInt(_0x57f60d) ? [_0x551362, vec2.add(_0x551362, vec2.make(parseInt(_0x1d905f), parseInt(_0x54af71)))] : [vec2.add(_0x551362, vec2.make(parseInt(_0x1d905f), parseInt(_0x54af71))), _0x551362];
    this.anim = 0x0;
    this.dim = vec2.make(parseInt(_0x1b085a), 0.5);
    this.speed = parseFloat(_0x46cdb7);
    this.riders = [];
    this.dir = !0x1;
    this.loop = 0x0 === parseInt(_0x151f14) ? !0x1 : !0x0;
    this.delay = parseInt(_0x271b52);
}
_0x5bbb5e.ASYNC = !0x0;
_0x5bbb5e.ID = 0x91;
_0x5bbb5e.NAME = "PLATFORM";
_0x5bbb5e.ANIMATION_RATE = 0x3;
_0x5bbb5e.SPRITE = {};
_0x5bbb5e.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xa0
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5bbb5e.SPRITE_LIST.length; _0x1bec55++) _0x5bbb5e.SPRITE[_0x5bbb5e.SPRITE_LIST[_0x1bec55].NAME] = _0x5bbb5e.SPRITE_LIST[_0x1bec55], _0x5bbb5e.SPRITE[_0x5bbb5e.SPRITE_LIST[_0x1bec55].ID] = _0x5bbb5e.SPRITE_LIST[_0x1bec55];
_0x5bbb5e.STATE = {};
_0x5bbb5e.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x5bbb5e.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5bbb5e.STATE_LIST.length; _0x1bec55++) _0x5bbb5e.STATE[_0x5bbb5e.STATE_LIST[_0x1bec55].NAME] = _0x5bbb5e.STATE_LIST[_0x1bec55], _0x5bbb5e.STATE[_0x5bbb5e.STATE_LIST[_0x1bec55].ID] = _0x5bbb5e.STATE_LIST[_0x1bec55];
_0x5bbb5e.prototype.update = function(_0x1936ee) {};
_0x5bbb5e.prototype.step = function() {
    0x0 < this.delay-- || (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x5bbb5e.ANIMATION_RATE) % this.state.SPRITE.length], this.physics());
};
_0x5bbb5e.prototype.physics = function() {
    var _0x4f56e4 = vec2.normalize(vec2.subtract(this.loc[this.dir ? 0x0 : 0x1], this.pos)),
        _0xa92877 = vec2.distance(this.pos, this.loc[this.dir ? 0x0 : 0x1]);
    if (_0xa92877 < this.speed)
        if (this.loop) this.dir = !this.dir;
        else {
            this.pos = this.loc[0x0];
            this.riders = [];
            return;
        } _0x4f56e4 = vec2.scale(_0x4f56e4, Math.min(this.speed, _0xa92877));
    this.pos = vec2.add(this.pos, _0x4f56e4);
    for (_0xa92877 = 0x0; _0xa92877 < this.riders.length; _0xa92877++) {
        var _0x24c795 = this.riders[0x0];
        _0x24c795.pos = vec2.add(_0x24c795.pos, _0x4f56e4);
    }
    this.riders = [];
};
_0x5bbb5e.prototype.riding = function(_0x3f225a) {
    this.riders.push(_0x3f225a);
};
_0x5bbb5e.prototype.kill = function() {};
_0x5bbb5e.prototype.destroy = GameObject.prototype.destroy;
_0x5bbb5e.prototype.isTangible = GameObject.prototype.isTangible;
_0x5bbb5e.prototype.setState = function(_0x1d8cb4) {
    _0x1d8cb4 !== this.state && (this.state = _0x1d8cb4, this.sprite = _0x1d8cb4.SPRITE[0x0], this.anim = 0x0);
};
_0x5bbb5e.prototype.draw = function(_0x3a5658) {
    if (!(0x0 < this.delay))
        for (var _0x3f7f2b = 0x0; _0x3f7f2b < this.dim.x; _0x3f7f2b++) _0x3a5658.push({
            'pos': vec2.add(this.pos, vec2.make(_0x3f7f2b, 0x0)),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'mode': 0x0
        });
};
GameObject.REGISTER_OBJECT(_0x5bbb5e);
"use strict";

function _0x4b6e2c(_0x1d4931, _0xe3dc6, _0x10f6a5, _0x3813e7, _0x1e87d2, _0x1f931e, _0x31e281, _0x3347d6, _0x53c646) {
    GameObject.call(this, _0x1d4931, _0xe3dc6, _0x10f6a5, _0x3813e7);
    this.oid = _0x1e87d2;
    this.setState(_0x4b6e2c.STATE.IDLE);
    this.loc = [_0x3813e7, vec2.add(_0x3813e7, vec2.make(parseInt(_0x31e281), parseInt(_0x3347d6)))];
    this.anim = 0x0;
    this.dim = vec2.make(parseInt(_0x1f931e), 0.5);
    this.speed = parseFloat(_0x53c646);
    this.riders = [];
    this.dir = this.go = !0x1;
}
_0x4b6e2c.ASYNC = !0x1;
_0x4b6e2c.ID = 0x92;
_0x4b6e2c.NAME = "BUS PLATFORM";
_0x4b6e2c.ANIMATION_RATE = 0x3;
_0x4b6e2c.SPRITE = {};
_0x4b6e2c.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xa0
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x4b6e2c.SPRITE_LIST.length; _0x1bec55++) _0x4b6e2c.SPRITE[_0x4b6e2c.SPRITE_LIST[_0x1bec55].NAME] = _0x4b6e2c.SPRITE_LIST[_0x1bec55], _0x4b6e2c.SPRITE[_0x4b6e2c.SPRITE_LIST[_0x1bec55].ID] = _0x4b6e2c.SPRITE_LIST[_0x1bec55];
_0x4b6e2c.STATE = {};
_0x4b6e2c.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4b6e2c.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x4b6e2c.STATE_LIST.length; _0x1bec55++) _0x4b6e2c.STATE[_0x4b6e2c.STATE_LIST[_0x1bec55].NAME] = _0x4b6e2c.STATE_LIST[_0x1bec55], _0x4b6e2c.STATE[_0x4b6e2c.STATE_LIST[_0x1bec55].ID] = _0x4b6e2c.STATE_LIST[_0x1bec55];
_0x4b6e2c.prototype.update = function(_0x3bfe45) {
    switch (_0x3bfe45) {
        case 0xa1:
            this.start();
    }
};
_0x4b6e2c.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x4b6e2c.ANIMATION_RATE) % this.state.SPRITE.length];
    this.physics();
};
_0x4b6e2c.prototype.physics = function() {
    if (this.go) {
        var _0x48a68f = vec2.normalize(vec2.subtract(this.loc[this.dir ? 0x0 : 0x1], this.pos)),
            _0x2b99c6 = vec2.distance(this.pos, this.loc[this.dir ? 0x0 : 0x1]),
            _0x48a68f = vec2.scale(_0x48a68f, Math.min(this.speed, _0x2b99c6));
        this.pos = vec2.add(this.pos, _0x48a68f);
        for (_0x2b99c6 = 0x0; _0x2b99c6 < this.riders.length; _0x2b99c6++) {
            var _0x565fcd = this.riders[0x0];
            _0x565fcd.pos = vec2.add(_0x565fcd.pos, _0x48a68f);
        }
    }
    this.riders = [];
};
_0x4b6e2c.prototype.start = function() {
    this.go = !0x0;
};
_0x4b6e2c.prototype.riding = function(_0x4a3b82) {
    _0x4a3b82.pid !== this.game.pid || this.go || this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0xa1));
    this.riders.push(_0x4a3b82);
};
_0x4b6e2c.prototype.kill = function() {};
_0x4b6e2c.prototype.isTangible = GameObject.prototype.isTangible;
_0x4b6e2c.prototype.destroy = GameObject.prototype.destroy;
_0x4b6e2c.prototype.setState = function(_0x2cdc10) {
    _0x2cdc10 !== this.state && (this.state = _0x2cdc10, this.sprite = _0x2cdc10.SPRITE[0x0], this.anim = 0x0);
};
_0x4b6e2c.prototype.draw = function(_0x53d78c) {
    if (!(0x0 < this.delay))
        for (var _0x3ce6ce = 0x0; _0x3ce6ce < this.dim.x; _0x3ce6ce++) _0x53d78c.push({
            'pos': vec2.add(this.pos, vec2.make(_0x3ce6ce, 0x0)),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'mode': 0x0
        });
};
GameObject.REGISTER_OBJECT(_0x4b6e2c);
"use strict";

function SpringObject(_0x9d9b10, _0x5d6af4, _0x14b8a1, _0x25d330, _0x2899a3) {
    GameObject.call(this, _0x9d9b10, _0x5d6af4, _0x14b8a1, _0x25d330);
    this.oid = _0x2899a3;
    this.setState(SpringObject.STATE.EXTEND);
    this.anim = 0x0;
    this.pos = vec2.add(this.pos, SpringObject.SOFFSET);
    this.dim = vec2.make(0.8, 0x2);
}
SpringObject.ASYNC = !0x0;
SpringObject.ID = 0x95;
SpringObject.NAME = "SPRING";
SpringObject.ANIMATION_RATE = 0x3;
SpringObject.SOFFSET = vec2.make(0.1, 0x0);
SpringObject.THRESHOLD = [0x1, 0.5];
SpringObject.POWER = 0.45;
SpringObject.SPRITE = {};
SpringObject.SPRITE_LIST = [{
    'NAME': "STAGE0",
    'ID': 0x0,
    'INDEX': [
        [0xa1],
        [0x91]
    ]
}, {
    'NAME': "STAGE1",
    'ID': 0x1,
    'INDEX': 0xa2
}, {
    'NAME': "STAGE2",
    'ID': 0x2,
    'INDEX': 0xa3
}];
for (_0x1bec55 = 0x0; _0x1bec55 < SpringObject.SPRITE_LIST.length; _0x1bec55++) SpringObject.SPRITE[SpringObject.SPRITE_LIST[_0x1bec55].NAME] = SpringObject.SPRITE_LIST[_0x1bec55], SpringObject.SPRITE[SpringObject.SPRITE_LIST[_0x1bec55].ID] = SpringObject.SPRITE_LIST[_0x1bec55];
SpringObject.STATE = {};
SpringObject.STATE_LIST = [{
    'NAME': "EXTEND",
    'ID': 0x0,
    'SPRITE': [SpringObject.SPRITE.STAGE0]
}, {
    'NAME': "HALF",
    'ID': 0x1,
    'SPRITE': [SpringObject.SPRITE.STAGE1]
}, {
    'NAME': "COMPRESS",
    'ID': 0x2,
    'SPRITE': [SpringObject.SPRITE.STAGE2]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < SpringObject.STATE_LIST.length; _0x1bec55++) SpringObject.STATE[SpringObject.STATE_LIST[_0x1bec55].NAME] = SpringObject.STATE_LIST[_0x1bec55], SpringObject.STATE[SpringObject.STATE_LIST[_0x1bec55].ID] = SpringObject.STATE_LIST[_0x1bec55];
SpringObject.prototype.update = function(_0x348375) {};
SpringObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / SpringObject.ANIMATION_RATE) % this.state.SPRITE.length];
    this.interaction();
};
SpringObject.prototype.interaction = function() {
    var _0x4c2d7a = this.game.getPlayer();
    if (_0x4c2d7a && _0x4c2d7a.level === this.level && _0x4c2d7a.zone === this.zone && _0x4c2d7a.isTangible() && squar.intersection(this.pos, this.dim, _0x4c2d7a.pos, _0x4c2d7a.dim)) {
        var _0x370dd9 = Math.pow(0x1 - 0.5 * Math.min(Math.max(0x0, _0x4c2d7a.pos.y - this.pos.y), 0x2), 0x2);
        _0x4c2d7a.fallSpeed >= 0.75 * PlayerObject.FALL_SPEED_MAX && _0x4c2d7a.btnA && (_0x4c2d7a.jumping = 0x0, _0x4c2d7a.isSpring = !0x0);
        _0x4c2d7a.fallSpeed += Math.min(0x2 * PlayerObject.FALL_SPEED_MAX, _0x370dd9 * SpringObject.POWER);
        _0x4c2d7a.grounded = !0x1;
    }
    _0x4c2d7a = 0x2;
    for (_0x370dd9 = 0x0; _0x370dd9 < this.game.objects.length; _0x370dd9++) {
        var _0x3645c3 = this.game.objects[_0x370dd9];
        _0x3645c3 instanceof PlayerObject && _0x3645c3.level === this.level && _0x3645c3.zone === this.zone && _0x3645c3.isTangible() && squar.intersection(this.pos, this.dim, _0x3645c3.pos, _0x3645c3.dim) && (_0x3645c3 = Math.min(Math.max(0x0, _0x3645c3.pos.y - this.pos.y), 0x2), _0x3645c3 < _0x4c2d7a && (_0x4c2d7a = _0x3645c3));
    }
    _0x4c2d7a < SpringObject.THRESHOLD[0x1] ? this.setState(SpringObject.STATE.COMPRESS) : _0x4c2d7a < SpringObject.THRESHOLD[0x0] ? this.setState(SpringObject.STATE.HALF) : this.setState(SpringObject.STATE.EXTEND);
};
SpringObject.prototype.kill = function() {};
SpringObject.prototype.destroy = GameObject.prototype.destroy;
SpringObject.prototype.isTangible = GameObject.prototype.isTangible;
SpringObject.prototype.setState = function(_0x18377f) {
    _0x18377f !== this.state && (this.state = _0x18377f, this.sprite = _0x18377f.SPRITE[0x0], this.anim = 0x0);
};
SpringObject.prototype.draw = function(_0x132bc0) {
    if (this.sprite.INDEX instanceof Array)
        for (var _0x3191ef = this.sprite.INDEX, _0x4714a0 = 0x0; _0x4714a0 < _0x3191ef.length; _0x4714a0++)
            for (var _0x507d31 = 0x0; _0x507d31 < _0x3191ef[_0x4714a0].length; _0x507d31++) _0x132bc0.push({
                'pos': vec2.subtract(vec2.add(this.pos, vec2.make(_0x507d31, _0x4714a0)), SpringObject.SOFFSET),
                'reverse': !0x1,
                'index': _0x3191ef[_0x4714a0][_0x507d31]
            });
    else _0x132bc0.push({
        'pos': vec2.subtract(this.pos, SpringObject.SOFFSET),
        'reverse': !0x1,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(SpringObject);
"use strict";

function FlagpoleObject(_0x5642ff, _0x3d3a00, _0x34f17d, _0x57e7a3, _0x93cf94) {
    GameObject.call(this, _0x5642ff, _0x3d3a00, _0x34f17d, _0x57e7a3);
    this.oid = _0x93cf94;
    this.setState(FlagpoleObject.STATE.IDLE);
    this.anim = 0x0;
}
FlagpoleObject.ASYNC = !0x0;
FlagpoleObject.ID = 0xb1;
FlagpoleObject.NAME = "FLAG";
FlagpoleObject.ANIMATION_RATE = 0x3;
FlagpoleObject.OFFSET = vec2.make(-0.5, 0x0);
FlagpoleObject.SPRITE = {};
FlagpoleObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0x90
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FlagpoleObject.SPRITE_LIST.length; _0x1bec55++) FlagpoleObject.SPRITE[FlagpoleObject.SPRITE_LIST[_0x1bec55].NAME] = FlagpoleObject.SPRITE_LIST[_0x1bec55], FlagpoleObject.SPRITE[FlagpoleObject.SPRITE_LIST[_0x1bec55].ID] = FlagpoleObject.SPRITE_LIST[_0x1bec55];
FlagpoleObject.STATE = {};
FlagpoleObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [FlagpoleObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FlagpoleObject.STATE_LIST.length; _0x1bec55++) FlagpoleObject.STATE[FlagpoleObject.STATE_LIST[_0x1bec55].NAME] = FlagpoleObject.STATE_LIST[_0x1bec55], FlagpoleObject.STATE[FlagpoleObject.STATE_LIST[_0x1bec55].ID] = FlagpoleObject.STATE_LIST[_0x1bec55];
FlagpoleObject.prototype.update = function(_0x261833) {};
FlagpoleObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / FlagpoleObject.ANIMATION_RATE) % this.state.SPRITE.length];
};
FlagpoleObject.prototype.kill = function() {};
FlagpoleObject.prototype.isTangible = GameObject.prototype.isTangible;
FlagpoleObject.prototype.destroy = GameObject.prototype.destroy;
FlagpoleObject.prototype.setState = function(_0x2d7e00) {
    _0x2d7e00 !== this.state && (this.state = _0x2d7e00, this.sprite = _0x2d7e00.SPRITE[0x0], this.anim = 0x0);
};
FlagpoleObject.prototype.draw = function(_0x33d2c9) {
    _0x33d2c9.push({
        'pos': vec2.add(this.pos, FlagpoleObject.OFFSET),
        'reverse': !0x1,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(FlagpoleObject);
"use strict";

function _0x35ddf4(_0x5067e9, _0x471c11, _0x4c3d45, _0x5b45aa, _0x5f9e08, _0x62b44d, _0x119674) {
    GameObject.call(this, _0x5067e9, _0x471c11, _0x4c3d45, _0x5b45aa);
    this.oid = _0x5f9e08;
    this.state = _0x35ddf4.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x1 === parseInt(_0x62b44d) ? 0x2 * _0x35ddf4.SPIN_RATE : 0x0;
    this.dim = vec2.make(0.5, 0.5);
    this.size = isNaN(parseInt(_0x119674)) ? _0x35ddf4.PARTS : parseInt(_0x119674);
}
_0x35ddf4.ASYNC = !0x0;
_0x35ddf4.ID = 0x21;
_0x35ddf4.NAME = "FIRE TRAP";
_0x35ddf4.ANIMATION_RATE = 0x2;
_0x35ddf4.OFFSET = vec2.make(0.25, 0.25);
_0x35ddf4.PARTS = 0x6;
_0x35ddf4.SPACING = 0.5;
_0x35ddf4.SPIN_RATE = 0x17;
_0x35ddf4.SPRITE = {};
_0x35ddf4.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xd0
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xd1
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xd2
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xd3
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x35ddf4.SPRITE_LIST.length; _0x1bec55++) _0x35ddf4.SPRITE[_0x35ddf4.SPRITE_LIST[_0x1bec55].NAME] = _0x35ddf4.SPRITE_LIST[_0x1bec55], _0x35ddf4.SPRITE[_0x35ddf4.SPRITE_LIST[_0x1bec55].ID] = _0x35ddf4.SPRITE_LIST[_0x1bec55];
_0x35ddf4.STATE = {};
_0x35ddf4.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x35ddf4.SPRITE.IDLE0, _0x35ddf4.SPRITE.IDLE1, _0x35ddf4.SPRITE.IDLE2, _0x35ddf4.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x35ddf4.STATE_LIST.length; _0x1bec55++) _0x35ddf4.STATE[_0x35ddf4.STATE_LIST[_0x1bec55].NAME] = _0x35ddf4.STATE_LIST[_0x1bec55], _0x35ddf4.STATE[_0x35ddf4.STATE_LIST[_0x1bec55].ID] = _0x35ddf4.STATE_LIST[_0x1bec55];
_0x35ddf4.prototype.update = function() {};
_0x35ddf4.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x35ddf4.ANIMATION_RATE) % this.state.SPRITE.length];
    this.control();
    this.interaction();
};
_0x35ddf4.prototype.control = function() {
    this.rot += _0x35ddf4.SPIN_RATE;
};
_0x35ddf4.prototype.interaction = function() {
    var _0x7617b0 = vec2.normalize(vec2.make(Math.sin(-this.anim / _0x35ddf4.SPIN_RATE), Math.cos(-this.anim / _0x35ddf4.SPIN_RATE))),
        _0x258ff9 = this.game.getPlayer();
    if (_0x258ff9 && _0x258ff9.isTangible() && _0x258ff9.level === this.level && _0x258ff9.zone === this.zone)
        for (var _0x373060 = 0x0; _0x373060 < this.size; _0x373060++) {
            var _0x2ff265 = vec2.add(vec2.add(this.pos, _0x35ddf4.OFFSET), vec2.scale(_0x7617b0, _0x35ddf4.SPACING * _0x373060));
            squar.intersection(_0x258ff9.pos, _0x258ff9.dim, _0x2ff265, this.dim) && _0x258ff9.damage(this);
        }
};
_0x35ddf4.prototype.playerCollide = function(_0x385f5f) {};
_0x35ddf4.prototype.playerStomp = function(_0x4454be) {};
_0x35ddf4.prototype.playerBump = function(_0x4c1cbf) {};
_0x35ddf4.prototype.kill = function() {};
_0x35ddf4.prototype.isTangible = GameObject.prototype.isTangible;
_0x35ddf4.prototype.destroy = GameObject.prototype.destroy;
_0x35ddf4.prototype.setState = function(_0xaf8a26) {
    _0xaf8a26 !== this.state && (this.state = _0xaf8a26, this.sprite = _0xaf8a26.SPRITE[0x0], this.anim = 0x0);
};
_0x35ddf4.prototype.draw = function(_0x4e240c) {
    for (var _0x40d21a = vec2.normalize(vec2.make(Math.sin(-this.anim / _0x35ddf4.SPIN_RATE), Math.cos(-this.anim / _0x35ddf4.SPIN_RATE))), _0x4e0952 = 0x0; _0x4e0952 < this.size; _0x4e0952++) _0x4e240c.push({
        'pos': vec2.add(this.pos, vec2.scale(_0x40d21a, _0x35ddf4.SPACING * _0x4e0952)),
        'reverse': !0x1,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x35ddf4);
"use strict";

function _0x4a8773(_0x23df7f, _0x31f095, _0x2a1fe9, _0x53aba8, _0x3d90ca, _0x213ff9, _0x2d1dbb) {
    GameObject.call(this, _0x23df7f, _0x31f095, _0x2a1fe9, _0x53aba8);
    this.oid = _0x3d90ca;
    this.setState(_0x4a8773.STATE.IDLE);
    this.delay = isNaN(parseInt(_0x213ff9)) ? _0x4a8773.DELAY_DEFAULT : parseInt(_0x213ff9);
    this.impulse = isNaN(parseFloat(_0x2d1dbb)) ? 0x1 : parseFloat(_0x2d1dbb);
    this.anim = 0x0;
    this.delayTimer = this.delay;
    this.pos.x += _0x4a8773.SOFFSET.x;
    this.loc = vec2.copy(this.pos);
    this.fallSpeed = 0x0;
    this.dim = vec2.make(0.7, 0.7);
}
_0x4a8773.ASYNC = !0x0;
_0x4a8773.ID = 0x22;
_0x4a8773.NAME = "FIRE BLAST";
_0x4a8773.ANIMATION_RATE = 0x3;
_0x4a8773.DELAY_DEFAULT = 0x5a;
_0x4a8773.IMPULSE = 1.35;
_0x4a8773.DRAG = 0.95;
_0x4a8773.FALL_SPEED_ACCEL = 0.055;
_0x4a8773.SOFFSET = vec2.make(0.15, 0.15);
_0x4a8773.SPRITE = {};
_0x4a8773.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xdb
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x4a8773.SPRITE_LIST.length; _0x1bec55++) _0x4a8773.SPRITE[_0x4a8773.SPRITE_LIST[_0x1bec55].NAME] = _0x4a8773.SPRITE_LIST[_0x1bec55], _0x4a8773.SPRITE[_0x4a8773.SPRITE_LIST[_0x1bec55].ID] = _0x4a8773.SPRITE_LIST[_0x1bec55];
_0x4a8773.STATE = {};
_0x4a8773.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4a8773.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x4a8773.STATE_LIST.length; _0x1bec55++) _0x4a8773.STATE[_0x4a8773.STATE_LIST[_0x1bec55].NAME] = _0x4a8773.STATE_LIST[_0x1bec55], _0x4a8773.STATE[_0x4a8773.STATE_LIST[_0x1bec55].ID] = _0x4a8773.STATE_LIST[_0x1bec55];
_0x4a8773.prototype.update = function(_0x1cfeaa) {};
_0x4a8773.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x4a8773.ANIMATION_RATE) % this.state.SPRITE.length];
    0x0 < this.delayTimer ? this.delayTimer-- : this.blast();
    this.physics();
};
_0x4a8773.prototype.physics = function() {
    if (this.pos.y > this.loc.y || 0x0 < this.fallSpeed) this.fallSpeed = (this.fallSpeed - _0x4a8773.FALL_SPEED_ACCEL) * _0x4a8773.DRAG, this.pos.y += this.fallSpeed;
};
_0x4a8773.prototype.blast = function() {
    this.pos = vec2.copy(this.loc);
    this.fallSpeed = _0x4a8773.IMPULSE * this.impulse;
    this.delayTimer = this.delay;
};
_0x4a8773.prototype.playerCollide = function(_0x14d8e8) {
    this.dead || this.garbage || _0x14d8e8.damage(this);
};
_0x4a8773.prototype.playerStomp = function(_0x4caac0) {
    this.playerCollide(_0x4caac0);
};
_0x4a8773.prototype.playerBump = function(_0xad36f2) {
    this.playerCollide(_0xad36f2);
};
_0x4a8773.prototype.kill = function() {};
_0x4a8773.prototype.isTangible = GameObject.prototype.isTangible;
_0x4a8773.prototype.destroy = GameObject.prototype.destroy;
_0x4a8773.prototype.setState = function(_0x3a217a) {
    _0x3a217a !== this.state && (this.state = _0x3a217a, this.sprite = _0x3a217a.SPRITE[0x0], this.anim = 0x0);
};
_0x4a8773.prototype.draw = function(_0x39c7cf) {
    var _0x5ecf74 = 0x0 <= this.fallSpeed ? 0x0 : 0x3;
    _0x39c7cf.push({
        'pos': vec2.subtract(this.pos, _0x4a8773.SOFFSET),
        'reverse': !0x1,
        'index': this.sprite.INDEX,
        'mode': _0x5ecf74
    });
};
GameObject.REGISTER_OBJECT(_0x4a8773);
"use strict";

function _0x458a57(_0x278773, _0xa84297, _0x156cd9, _0x3a6374, _0x2a748a, _0x429175, direction) {
    GameObject.call(this, _0x278773, _0xa84297, _0x156cd9, _0x3a6374);
    this.oid = _0x2a748a;
    this.setState(_0x458a57.STATE.IDLE);
    this.fireTimer = 0x0;
    this.delay = isNaN(parseInt(_0x429175)) ? _0x458a57.FIRE_DELAY_DEFAULT : parseInt(_0x429175);
    this.shootDirection = isNaN(parseInt(direction)) ? 0 : parseInt(direction);
}
_0x458a57.ASYNC = !0x0;
_0x458a57.ID = 0x23;
_0x458a57.NAME = "LAUNCHER";
_0x458a57.ANIMATION_RATE = 0x3;
_0x458a57.FIRE_DELAY_DEFAULT = 0x96;
_0x458a57.SPRITE = {};
_0x458a57.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xff
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x458a57.SPRITE_LIST.length; _0x1bec55++) _0x458a57.SPRITE[_0x458a57.SPRITE_LIST[_0x1bec55].NAME] = _0x458a57.SPRITE_LIST[_0x1bec55], _0x458a57.SPRITE[_0x458a57.SPRITE_LIST[_0x1bec55].ID] = _0x458a57.SPRITE_LIST[_0x1bec55];
_0x458a57.STATE = {};
_0x458a57.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x458a57.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x458a57.STATE_LIST.length; _0x1bec55++) _0x458a57.STATE[_0x458a57.STATE_LIST[_0x1bec55].NAME] = _0x458a57.STATE_LIST[_0x1bec55], _0x458a57.STATE[_0x458a57.STATE_LIST[_0x1bec55].ID] = _0x458a57.STATE_LIST[_0x1bec55];
_0x458a57.prototype.update = function(_0x5a56fe) {};
_0x458a57.prototype.step = function() {
    ++this.fireTimer > this.delay && this.fire();
    this.sound();
};
_0x458a57.prototype.sound = GameObject.prototype.sound;
_0x458a57.prototype.fire = function() {
    this.fireTimer = 0x0;
    this.game.createObject(_0x30df09.ID, this.level, this.zone, vec2.copy(this.pos), [undefined, this.shootDirection]);
    this.play("sfx/firework.wav", 0x1, 0.04);
};
_0x458a57.prototype.kill = function() {};
_0x458a57.prototype.isTangible = GameObject.prototype.isTangible;
_0x458a57.prototype.destroy = GameObject.prototype.destroy;
_0x458a57.prototype.setState = function(_0xf1ae11) {
    _0xf1ae11 !== this.state && (this.state = _0xf1ae11, this.sprite = _0xf1ae11.SPRITE[0x0], this.anim = 0x0);
};
_0x458a57.prototype.draw = function(_0x281060) {};
_0x458a57.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x458a57);
"use strict";

function _0x30df09(_0x3877d1, _0x3182b8, _0xa0e13f, _0xe81bce, _0x1d56a5, direction) {
    GameObject.call(this, _0x3877d1, _0x3182b8, _0xa0e13f, _0xe81bce);
    this.oid = _0x1d56a5;
    this.setState(_0x30df09.STATE.IDLE);
    this.bonkTimer = this.anim = 0x0;
    this.dim = vec2.make(0.8, 0.8);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.direction = isNaN(parseInt(direction)) ? 0 : parseInt(direction);
}
_0x30df09.ASYNC = !0x0;
_0x30df09.ID = 0x24;
_0x30df09.NAME = "BULLET";
_0x30df09.ANIMATION_RATE = 0x3;
_0x30df09.SPEED = 0.215;
_0x30df09.BONK_TIME = 0x5a;
_0x30df09.BONK_IMP = vec2.make(0, 0.4);
_0x30df09.BONK_DECEL = 0.925;
_0x30df09.BONK_FALL_SPEED = 0.5;
_0x30df09.BONK_FALL_ACCEL = 0.085;
_0x30df09.DELAY_DEFAULT = 0x113;
_0x30df09.IMPULSE = vec2.make(0.225, 0.335);
_0x30df09.DRAG = 0.996;
_0x30df09.FALL_SPEED_ACCEL = 0.0055;
_0x30df09.SOFFSET = vec2.make(0.15, 0.15);
_0x30df09.SPRITE = {};
_0x30df09.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xcd
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x30df09.SPRITE_LIST.length; _0x1bec55++) _0x30df09.SPRITE[_0x30df09.SPRITE_LIST[_0x1bec55].NAME] = _0x30df09.SPRITE_LIST[_0x1bec55], _0x30df09.SPRITE[_0x30df09.SPRITE_LIST[_0x1bec55].ID] = _0x30df09.SPRITE_LIST[_0x1bec55];
_0x30df09.STATE = {};
_0x30df09.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x30df09.SPRITE.IDLE]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x30df09.STATE_LIST.length; _0x1bec55++) _0x30df09.STATE[_0x30df09.STATE_LIST[_0x1bec55].NAME] = _0x30df09.STATE_LIST[_0x1bec55], _0x30df09.STATE[_0x30df09.STATE_LIST[_0x1bec55].ID] = _0x30df09.STATE_LIST[_0x1bec55];
_0x30df09.prototype.update = function(_0xebda49) {};
_0x30df09.prototype.step = function() {
    this.state === _0x30df09.STATE.BONK ? this.bonkTimer++ > _0x30df09.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x30df09.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x30df09.BONK_FALL_ACCEL, -_0x30df09.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x30df09.ANIMATION_RATE) % this.state.SPRITE.length], this.physics(), this.sound());
};
_0x30df09.prototype.physics = function() {
    0x0 < this.pos.x ? (this.direction === 0 ? (this.pos.x -= _0x30df09.SPEED) : (this.pos.x += _0x30df09.SPEED)) : this.destroy();
};
_0x30df09.prototype.sound = GameObject.prototype.sound;
_0x30df09.prototype.disable = function() {
    this.disabled = !0x0;
};
_0x30df09.prototype.enable = function() {
    this.disabled = !0x1;
};
_0x30df09.prototype.damage = function(_0x582020) {};
_0x30df09.prototype.bonk = function() {
    this.dead || (this.setState(_0x30df09.STATE.BONK), this.moveSpeed = _0x30df09.BONK_IMP.x, this.fallSpeed = _0x30df09.BONK_IMP.y, this.dead = !0x0, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x30df09.prototype.playerCollide = function(_0x15f7e9) {
    this.dead || this.garbage || _0x15f7e9.damage(this);
};
_0x30df09.prototype.playerStomp = function(_0x53a4e6) {
    this.dead || this.garbage || (this.bonk(), _0x53a4e6.bounce(), this.play("sfx/stomp.wav", 0x1, 0.04), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x30df09.prototype.playerBump = function(_0x5a4a67) {
    this.playerCollide(_0x5a4a67);
};
_0x30df09.prototype.kill = function() {};
_0x30df09.prototype.isTangible = GameObject.prototype.isTangible;
_0x30df09.prototype.destroy = GameObject.prototype.destroy;
_0x30df09.prototype.setState = function(_0x7fea24) {
    _0x7fea24 !== this.state && (this.state = _0x7fea24, 0x0 < _0x7fea24.SPRITE.length && (this.sprite = _0x7fea24.SPRITE[0x0]), this.anim = 0x0);
};
_0x30df09.prototype.draw = function(_0x3d4441) {
    var _0x15ff87;
    _0x15ff87 = this.state === _0x30df09.STATE.BONK ? 0x3 : 0x0;
    _0x3d4441.push({
        'pos': vec2.subtract(this.pos, _0x30df09.SOFFSET),
        'reverse': this.direction !== 0,
        'index': this.sprite.INDEX,
        'mode': _0x15ff87
    });
};
_0x30df09.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x30df09);
"use strict";

function _0x6c6f53(_0x36213e, _0xed9c2f, _0xdb3ba1, _0x192895, _0x145ee8, _0x367c0a) {
    GameObject.call(this, _0x36213e, _0xed9c2f, _0xdb3ba1, _0x192895);
    this.owner = _0x367c0a;
    this.state = _0x6c6f53.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.deadTimer = this.anim = 0x0;
    this.dim = vec2.make(0.5, 0.5);
    this.fallSpeed = -_0x6c6f53.FALL_SPEED_MAX;
    this.dir = _0x145ee8;
}
_0x6c6f53.ASYNC = !0x0;
_0x6c6f53.ID = 0xa1;
_0x6c6f53.NAME = "FIREBALL PROJECTILE";
_0x6c6f53.ANIMATION_RATE = 0x2;
_0x6c6f53.SOFFSET = vec2.make(-0.25, -0.25);
_0x6c6f53.DEAD_ANIM_LENGTH = 0x3;
_0x6c6f53.SPEED = 0.475;
_0x6c6f53.BOUNCE_SPEED = 0.375;
_0x6c6f53.FALL_SPEED_MAX = 0.425;
_0x6c6f53.FALL_SPEED_ACCEL = 0.065;
_0x6c6f53.SPRITE = {};
_0x6c6f53.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xbc
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xbd
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xbe
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xbf
}, {
    'NAME': "DEAD0",
    'ID': 0x4,
    'INDEX': 0xd4
}, {
    'NAME': "DEAD1",
    'ID': 0x5,
    'INDEX': 0xd5
}, {
    'NAME': "DEAD2",
    'ID': 0x6,
    'INDEX': 0xd6
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x6c6f53.SPRITE_LIST.length; _0x1bec55++) _0x6c6f53.SPRITE[_0x6c6f53.SPRITE_LIST[_0x1bec55].NAME] = _0x6c6f53.SPRITE_LIST[_0x1bec55], _0x6c6f53.SPRITE[_0x6c6f53.SPRITE_LIST[_0x1bec55].ID] = _0x6c6f53.SPRITE_LIST[_0x1bec55];
_0x6c6f53.STATE = {};
_0x6c6f53.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x6c6f53.SPRITE.IDLE0, _0x6c6f53.SPRITE.IDLE1, _0x6c6f53.SPRITE.IDLE2, _0x6c6f53.SPRITE.IDLE3]
}, {
    'NAME': "DEAD",
    'ID': 0x50,
    'SPRITE': [_0x6c6f53.SPRITE.DEAD0, _0x6c6f53.SPRITE.DEAD1, _0x6c6f53.SPRITE.DEAD2]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x6c6f53.STATE_LIST.length; _0x1bec55++) _0x6c6f53.STATE[_0x6c6f53.STATE_LIST[_0x1bec55].NAME] = _0x6c6f53.STATE_LIST[_0x1bec55], _0x6c6f53.STATE[_0x6c6f53.STATE_LIST[_0x1bec55].ID] = _0x6c6f53.STATE_LIST[_0x1bec55];
_0x6c6f53.prototype.update = function(_0x244c91) {};
_0x6c6f53.prototype.step = function() {
    this.state === _0x6c6f53.STATE.DEAD ? this.deadTimer < _0x6c6f53.DEAD_ANIM_LENGTH ? this.sprite = this.state.SPRITE[this.deadTimer++] : this.destroy() : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x6c6f53.ANIMATION_RATE) % this.state.SPRITE.length], this.control(), this.physics(), this.interaction(), this.sound(), 0x0 > this.pos.y && this.kill());
};
_0x6c6f53.prototype.control = function() {};
_0x6c6f53.prototype.physics = function() {
    var _0x3236a4 = this.dir ? _0x6c6f53.SPEED : -_0x6c6f53.SPEED;
    this.fallSpeed = Math.max(this.fallSpeed - _0x6c6f53.FALL_SPEED_ACCEL, -_0x6c6f53.FALL_SPEED_MAX);
    for (var _0x129f7c = vec2.add(this.pos, vec2.make(_0x3236a4, this.fallSpeed)), _0x42654a = vec2.make(this.pos.x + Math.min(0x0, _0x3236a4), this.pos.y + Math.min(0x0, this.fallSpeed)), _0x3236a4 = vec2.make(this.dim.x + Math.max(0x0, _0x3236a4), this.dim.y + Math.max(0x0, this.fallSpeed)), _0x10832b = this.game.world.getZone(this.level, this.zone).getTiles(_0x42654a, _0x3236a4), _0x42654a = vec2.make(0x1, 0x1), _0x3236a4 = [], _0x564789 = 0x0; _0x564789 < _0x10832b.length; _0x564789++) {
        var _0x1dc741 = _0x10832b[_0x564789];
        _0x1dc741.definition.COLLIDE && (squar.intersection(_0x1dc741.pos, _0x42654a, _0x129f7c, this.dim) || squar.intersection(_0x1dc741.pos, _0x42654a, this.pos, this.dim)) && _0x3236a4.push(_0x1dc741);
    }
    _0x10832b = vec2.make(_0x129f7c.x, this.pos.y);
    for (_0x564789 = 0x0; _0x564789 < _0x3236a4.length; _0x564789++) _0x1dc741 = _0x3236a4[_0x564789], squar.intersection(_0x1dc741.pos, _0x42654a, _0x10832b, this.dim) && (_0x10832b.x = _0x10832b.x + 0.5 * this.dim.x < _0x1dc741.pos.x + 0.5 * _0x42654a.x ? _0x1dc741.pos.x - this.dim.x : _0x1dc741.pos.x + _0x42654a.x, this.kill());
    _0x129f7c.x = _0x10832b.x;
    for (_0x564789 = 0x0; _0x564789 < _0x3236a4.length; _0x564789++) _0x1dc741 = _0x3236a4[_0x564789], squar.intersection(_0x1dc741.pos, _0x42654a, _0x129f7c, this.dim) && (this.pos.y >= _0x129f7c.y ? (_0x129f7c.y = _0x1dc741.pos.y + _0x42654a.y, this.fallSpeed = _0x6c6f53.BOUNCE_SPEED) : (_0x129f7c.y = _0x1dc741.pos.y - this.dim.y, this.fallSpeed = -_0x6c6f53.BOUNCE_SPEED));
    this.pos = _0x129f7c;
};
_0x6c6f53.prototype.interaction = function() {
    for (var _0x51d7a3 = 0x0; _0x51d7a3 < this.game.objects.length; _0x51d7a3++) {
        var _0x1f6129 = this.game.objects[_0x51d7a3];
        if (_0x1f6129 !== this && _0x1f6129.pid !== this.owner && _0x1f6129.isTangible() && (!(_0x1f6129 instanceof PlayerObject) || app.net.gameMode === 1) && _0x1f6129.damage && _0x1f6129.level === this.level && _0x1f6129.zone === this.zone && squar.intersection(_0x1f6129.pos, _0x1f6129.dim, this.pos, this.dim)) {
            (app.net.gameMode !== 1 ? this.owner === this.game.pid : (_0x1f6129 instanceof PlayerObject ? _0x1f6129.pid == this.game.pid : this.owner === this.game.pid)) && _0x1f6129.damage(this);
            if (app.net.gameMode === 1 && _0x1f6129 instanceof PlayerObject && _0x1f6129.pid == this.game.pid && _0x1f6129.dead) this.game.out.push(NET017.encode(this.owner));
            this.kill();
            break;
        }
    }
};
_0x6c6f53.prototype.sound = GameObject.prototype.sound;
_0x6c6f53.prototype.playerCollide = function(_0x596050) {};
_0x6c6f53.prototype.playerStomp = function(_0x282b15) {};
_0x6c6f53.prototype.playerBump = function(_0xad5318) {};
_0x6c6f53.prototype.kill = function() {
    this.setState(_0x6c6f53.STATE.DEAD);
    this.play("sfx/firework.wav", 0.7, 0.04);
    this.dead = !0x0;
};
_0x6c6f53.prototype.isTangible = GameObject.prototype.isTangible;
_0x6c6f53.prototype.destroy = GameObject.prototype.destroy;
_0x6c6f53.prototype.setState = function(_0x37987d) {
    _0x37987d !== this.state && (this.state = _0x37987d, this.sprite = _0x37987d.SPRITE[0x0], this.anim = 0x0);
};
_0x6c6f53.prototype.draw = function(_0x12ec20) {
    _0x12ec20.push({
        'pos': vec2.add(this.pos, _0x6c6f53.SOFFSET),
        'reverse': !0x1,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
_0x6c6f53.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x6c6f53);
"use strict";

function _0x1899b7(_0x5b625c, _0x4b1c85, _0x5d2f9e, _0x337be8) {
    GameObject.call(this, _0x5b625c, _0x4b1c85, _0x5d2f9e, _0x337be8);
    this.state = _0x1899b7.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x0;
    this.life = _0x1899b7.LIFE_MAX;
    this.deadTimer = 0x0;
    this.dim = vec2.make(0x1, 0.5);
}
_0x1899b7.ASYNC = !0x0;
_0x1899b7.ID = 0xa2;
_0x1899b7.NAME = "FIRE BREATH PROJECTILE";
_0x1899b7.ANIMATION_RATE = 0x2;
_0x1899b7.SOFFSET = vec2.make(-0.5, -0.25);
_0x1899b7.LIFE_MAX = 0xaf;
_0x1899b7.DEAD_ANIM_LENGTH = 0x3;
_0x1899b7.SPEED = 0.175;
_0x1899b7.SPRITE = {};
_0x1899b7.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': [
        [0xd7, 0xd8]
    ]
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': [
        [0xd9, 0xda]
    ]
}, {
    'NAME': "DEAD0",
    'ID': 0x4,
    'INDEX': 0xd4
}, {
    'NAME': "DEAD1",
    'ID': 0x5,
    'INDEX': 0xd5
}, {
    'NAME': "DEAD2",
    'ID': 0x6,
    'INDEX': 0xd6
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x1899b7.SPRITE_LIST.length; _0x1bec55++) _0x1899b7.SPRITE[_0x1899b7.SPRITE_LIST[_0x1bec55].NAME] = _0x1899b7.SPRITE_LIST[_0x1bec55], _0x1899b7.SPRITE[_0x1899b7.SPRITE_LIST[_0x1bec55].ID] = _0x1899b7.SPRITE_LIST[_0x1bec55];
_0x1899b7.STATE = {};
_0x1899b7.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x1899b7.SPRITE.IDLE0, _0x1899b7.SPRITE.IDLE1]
}, {
    'NAME': "DEAD",
    'ID': 0x50,
    'SPRITE': [_0x1899b7.SPRITE.DEAD0, _0x1899b7.SPRITE.DEAD1, _0x1899b7.SPRITE.DEAD2]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x1899b7.STATE_LIST.length; _0x1bec55++) _0x1899b7.STATE[_0x1899b7.STATE_LIST[_0x1bec55].NAME] = _0x1899b7.STATE_LIST[_0x1bec55], _0x1899b7.STATE[_0x1899b7.STATE_LIST[_0x1bec55].ID] = _0x1899b7.STATE_LIST[_0x1bec55];
_0x1899b7.prototype.update = function(_0x3e423b) {};
_0x1899b7.prototype.step = function() {
    this.state === _0x1899b7.STATE.DEAD ? this.deadTimer < _0x1899b7.DEAD_ANIM_LENGTH ? this.sprite = this.state.SPRITE[this.deadTimer++] : this.destroy() : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x1899b7.ANIMATION_RATE) % this.state.SPRITE.length], this.control(), this.physics(), this.interaction(), 0x1 > this.life-- && this.kill());
};
_0x1899b7.prototype.control = function() {};
_0x1899b7.prototype.physics = function() {
    this.pos = vec2.add(this.pos, vec2.make(-_0x1899b7.SPEED, 0x0));
};
_0x1899b7.prototype.interaction = function() {
    for (var _0x554db7 = 0x0; _0x554db7 < this.game.objects.length; _0x554db7++) {
        var _0x43845d = this.game.objects[_0x554db7];
        if (_0x43845d instanceof PlayerObject && _0x43845d.isTangible() && _0x43845d.level === this.level && _0x43845d.zone === this.zone && squar.intersection(_0x43845d.pos, _0x43845d.dim, this.pos, this.dim)) {
            _0x43845d.pid === this.game.pid && _0x43845d.damage(this);
            this.kill();
            break;
        }
    }
};
_0x1899b7.prototype.playerCollide = function(_0x4b7e2a) {};
_0x1899b7.prototype.playerStomp = function(_0x2f2ded) {};
_0x1899b7.prototype.playerBump = function(_0xa7f751) {};
_0x1899b7.prototype.kill = function() {
    this.dead = !0x0;
    this.setState(_0x1899b7.STATE.DEAD);
};
_0x1899b7.prototype.isTangible = GameObject.prototype.isTangible;
_0x1899b7.prototype.destroy = GameObject.prototype.destroy;
_0x1899b7.prototype.setState = function(_0x422ff8) {
    _0x422ff8 !== this.state && (this.state = _0x422ff8, this.sprite = _0x422ff8.SPRITE[0x0], this.anim = 0x0);
};
_0x1899b7.prototype.draw = function(_0x215d5f) {
    if (this.sprite.INDEX instanceof Array)
        for (var _0x22ac30 = this.sprite.INDEX, _0x1cb97d = 0x0; _0x1cb97d < _0x22ac30.length; _0x1cb97d++)
            for (var _0x5791f1 = 0x0; _0x5791f1 < _0x22ac30[_0x1cb97d].length; _0x5791f1++) _0x215d5f.push({
                'pos': vec2.add(vec2.add(this.pos, _0x1899b7.SOFFSET), vec2.make(_0x5791f1, _0x1cb97d)),
                'reverse': !0x1,
                'index': _0x22ac30[_0x1cb97d][_0x5791f1]
            });
    else _0x215d5f.push({
        'pos': vec2.add(this.pos, _0x1899b7.SOFFSET),
        'reverse': !0x1,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x1899b7);
"use strict";

function _0x1bc0ed(_0x33b14c, _0x36a1c4, _0x148c3f, _0x54b3e0, _0x33ad79) {
    GameObject.call(this, _0x33b14c, _0x36a1c4, _0x148c3f, _0x54b3e0);
    this.owner = _0x33ad79;
    this.setState(_0x1bc0ed.STATE.IDLE);
    this.anim = 0x0;
    this.throwTimer = _0x1bc0ed.THROW_DELAY;
    this.dir = !0x1;
    this.dim = vec2.make(0.5, 0.5);
}
_0x1bc0ed.ASYNC = !0x0;
_0x1bc0ed.ID = 0xa3;
_0x1bc0ed.NAME = "HAMMER PROJECTILE";
_0x1bc0ed.ANIMATION_RATE = 0x2;
_0x1bc0ed.SOFFSET = vec2.make(-0.25, -0.25);
_0x1bc0ed.THROW_DELAY = 0xd;
_0x1bc0ed.IMPULSE = vec2.make(0.48, 0.915);
_0x1bc0ed.DRAG = 0.965;
_0x1bc0ed.FALL_SPEED_MAX = 0.65;
_0x1bc0ed.FALL_SPEED_ACCEL = 0.095;
_0x1bc0ed.SPRITE = {};
_0x1bc0ed.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xdd
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xdc
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xdf
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xde
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x1bc0ed.SPRITE_LIST.length; _0x1bec55++) _0x1bc0ed.SPRITE[_0x1bc0ed.SPRITE_LIST[_0x1bec55].NAME] = _0x1bc0ed.SPRITE_LIST[_0x1bec55], _0x1bc0ed.SPRITE[_0x1bc0ed.SPRITE_LIST[_0x1bec55].ID] = _0x1bc0ed.SPRITE_LIST[_0x1bec55];
_0x1bc0ed.STATE = {};
_0x1bc0ed.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x1bc0ed.SPRITE.IDLE0]
}, {
    'NAME': "THROW",
    'ID': 0x1,
    'SPRITE': [_0x1bc0ed.SPRITE.IDLE0, _0x1bc0ed.SPRITE.IDLE1, _0x1bc0ed.SPRITE.IDLE2, _0x1bc0ed.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x1bc0ed.STATE_LIST.length; _0x1bec55++) _0x1bc0ed.STATE[_0x1bc0ed.STATE_LIST[_0x1bec55].NAME] = _0x1bc0ed.STATE_LIST[_0x1bec55], _0x1bc0ed.STATE[_0x1bc0ed.STATE_LIST[_0x1bec55].ID] = _0x1bc0ed.STATE_LIST[_0x1bec55];
_0x1bc0ed.prototype.update = function(_0x2be6f1) {};
_0x1bc0ed.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x1bc0ed.ANIMATION_RATE) % this.state.SPRITE.length];
    0x0 < this.throwTimer ? this.throwTimer-- : (this.state === _0x1bc0ed.STATE.IDLE && this.throw(), this.physics(), this.interaction(), 0x0 > this.pos.y && this.destroy());
};
_0x1bc0ed.prototype.physics = function() {
    this.moveSpeed *= _0x1bc0ed.DRAG;
    this.fallSpeed = Math.max(this.fallSpeed - _0x1bc0ed.FALL_SPEED_ACCEL, -_0x1bc0ed.FALL_SPEED_MAX);
    this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed));
};
_0x1bc0ed.prototype.interaction = function() {
    if (this.state === _0x1bc0ed.STATE.THROW) {
        var _0xb52b5e = this.game.getPlayer();
        _0xb52b5e && _0xb52b5e.isTangible() && _0xb52b5e.level === this.level && _0xb52b5e.zone === this.zone && squar.intersection(_0xb52b5e.pos, _0xb52b5e.dim, this.pos, this.dim) && _0xb52b5e.damage(this);
    }
};
_0x1bc0ed.prototype.throw = function() {
    this.moveSpeed = this.dir ? _0x1bc0ed.IMPULSE.x : -_0x1bc0ed.IMPULSE.x;
    this.fallSpeed = _0x1bc0ed.IMPULSE.y;
    this.setState(_0x1bc0ed.STATE.THROW);
};
_0x1bc0ed.prototype.playerCollide = function(_0x2db29c) {};
_0x1bc0ed.prototype.playerStomp = function(_0xa5f3c4) {};
_0x1bc0ed.prototype.playerBump = function(_0x255468) {};
_0x1bc0ed.prototype.kill = function() {};
_0x1bc0ed.prototype.destroy = GameObject.prototype.destroy;
_0x1bc0ed.prototype.isTangible = GameObject.prototype.isTangible;
_0x1bc0ed.prototype.setState = function(_0x5c3f79) {
    _0x5c3f79 !== this.state && (this.state = _0x5c3f79, this.sprite = _0x5c3f79.SPRITE[0x0], this.anim = 0x0);
};
_0x1bc0ed.prototype.draw = function(_0x4db511) {
    if (this.sprite.INDEX instanceof Array)
        for (var _0x452daa = this.sprite.INDEX, _0x4a6d8c = 0x0; _0x4a6d8c < _0x452daa.length; _0x4a6d8c++)
            for (var _0x3a08a0 = 0x0; _0x3a08a0 < _0x452daa[_0x4a6d8c].length; _0x3a08a0++) _0x4db511.push({
                'pos': vec2.add(vec2.add(this.pos, _0x1bc0ed.SOFFSET), vec2.make(_0x3a08a0, _0x4a6d8c)),
                'reverse': !0x1,
                'index': _0x452daa[_0x4a6d8c][_0x3a08a0]
            });
    else _0x4db511.push({
        'pos': vec2.add(this.pos, _0x1bc0ed.SOFFSET),
        'reverse': this.dir,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x1bc0ed);
"use strict";

function _0x2e2bc3(_0x23b738, _0x46c7a3, _0x118fd6, _0xb55197, _0x48d8ac) {
    GameObject.call(this, _0x23b738, _0x46c7a3, _0x118fd6, _0xb55197);
    this.oid = _0x48d8ac;
    this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.rise = this.grounded = !0x1;
    _0x23b738 = vec2.make(0x1, 0x1);
    _0x46c7a3 = this.game.world.getZone(this.level, this.zone).getTiles(this.pos, this.dim);
    for (_0x118fd6 = 0x0; _0x118fd6 < _0x46c7a3.length; _0x118fd6++)
        if (squar.intersection(_0x46c7a3[_0x118fd6].pos, _0x23b738, this.pos, this.dim)) {
            this.rise = !0x0;
            break;
        } this.dir = !0x1;
    this.jump = -0x1;
}
_0x2e2bc3.ASYNC = !0x0;
_0x2e2bc3.ID = 0x50;
_0x2e2bc3.ANIMATION_RATE = 0x3;
_0x2e2bc3.MOVE_SPEED_MAX = 0.075;
_0x2e2bc3.FALL_SPEED_MAX = 0.45;
_0x2e2bc3.FALL_SPEED_ACCEL = 0.075;
_0x2e2bc3.JUMP_DECEL = 0.015;
_0x2e2bc3.JUMP_LENGTH = 0x3;
_0x2e2bc3.RISE_RATE = 0.15;
_0x2e2bc3.prototype.update = function(_0x210b40) {
    switch (_0x210b40) {
        case 0x0:
            this.kill();
    }
};
_0x2e2bc3.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x2e2bc3.ANIMATION_RATE) % this.state.SPRITE.length];
    this.control();
    this.physics();
    0x0 > this.pos.y && this.kill();
};
_0x2e2bc3.prototype.control = function() {
    this.jump >= _0x2e2bc3.JUMP_LENGTH && (this.jump = -0x1);
};
_0x2e2bc3.prototype.physics = function() {
    if (this.rise) {
        this.rise = !0x1;
        for (var _0x2d4761 = vec2.make(0x1, 0x1), _0x48762f = this.game.world.getZone(this.level, this.zone).getTiles(this.pos, this.dim), _0xae67e5 = 0x0; _0xae67e5 < _0x48762f.length; _0xae67e5++) {
            var _0x323720 = _0x48762f[_0xae67e5];
            if (_0x323720.definition.COLLIDE && squar.intersection(_0x323720.pos, _0x2d4761, this.pos, this.dim)) {
                this.rise = !0x0;
                break;
            }
        }
        this.rise && (this.pos.y += _0x2e2bc3.RISE_RATE);
    } else {
        -0x1 !== this.jump ? (this.fallSpeed = _0x2e2bc3.FALL_SPEED_MAX - this.jump * _0x2e2bc3.JUMP_DECEL, this.jump++) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - _0x2e2bc3.FALL_SPEED_ACCEL, -_0x2e2bc3.FALL_SPEED_MAX));
        var _0x17799f = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
            _0x7b593c = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
            _0x2d4761 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
            _0x48762f = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
            _0x48762f = this.game.world.getZone(this.level, this.zone).getTiles(_0x2d4761, _0x48762f),
            _0x2d4761 = vec2.make(0x1, 0x1),
            _0x32139c = !0x1;
        this.grounded = !0x1;
        for (_0xae67e5 = 0x0; _0xae67e5 < _0x48762f.length; _0xae67e5++) _0x323720 = _0x48762f[_0xae67e5], _0x323720.definition.COLLIDE && squar.intersection(_0x323720.pos, _0x2d4761, _0x17799f, this.dim) && (this.pos.x <= _0x17799f.x && _0x17799f.x + this.dim.x > _0x323720.pos.x ? (_0x17799f.x = _0x323720.pos.x - this.dim.x, _0x7b593c.x = _0x17799f.x, this.moveSpeed = 0x0, _0x32139c = !0x0) : this.pos.x >= _0x17799f.x && _0x17799f.x < _0x323720.pos.x + _0x2d4761.x && (_0x17799f.x = _0x323720.pos.x + _0x2d4761.x, _0x7b593c.x = _0x17799f.x, this.moveSpeed = 0x0, _0x32139c = !0x0));
        for (_0xae67e5 = 0x0; _0xae67e5 < _0x48762f.length; _0xae67e5++) _0x323720 = _0x48762f[_0xae67e5], _0x323720.definition.COLLIDE && squar.intersection(_0x323720.pos, _0x2d4761, _0x7b593c, this.dim) && (this.pos.y >= _0x7b593c.y && _0x7b593c.y < _0x323720.pos.y + _0x2d4761.y ? (_0x7b593c.y = _0x323720.pos.y + _0x2d4761.y, this.grounded = !0x0) : this.pos.y <= _0x7b593c.y && _0x7b593c.y + this.dim.y > _0x323720.pos.y && (_0x7b593c.y = _0x323720.pos.y - this.dim.y, this.jumping = -0x1, this.fallSpeed = 0x0));
        this.pos = vec2.make(_0x17799f.x, _0x7b593c.y);
        _0x32139c && (this.dir = !this.dir);
    }
};
_0x2e2bc3.prototype.bounce = function() {
    this.grounded && (this.dir = !this.dir);
    this.jump = 0x0;
};
_0x2e2bc3.prototype.playerCollide = function(_0x25bc93) {
    this.dead || this.garbage || (_0x25bc93.powerup(this), this.kill(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x0)));
};
_0x2e2bc3.prototype.playerStomp = function(_0x3025ba) {
    this.playerCollide(_0x3025ba);
};
_0x2e2bc3.prototype.playerBump = function(_0x25bf11) {
    this.playerCollide(_0x25bf11);
};
_0x2e2bc3.prototype.kill = function() {
    this.dead = !0x0;
    this.destroy();
};
_0x2e2bc3.prototype.destroy = GameObject.prototype.destroy;
_0x2e2bc3.prototype.isTangible = GameObject.prototype.isTangible;
_0x2e2bc3.prototype.setState = function(_0x2a4aec) {
    _0x2a4aec !== this.state && (this.state = _0x2a4aec, this.sprite = _0x2a4aec.SPRITE[0x0], this.anim = 0x0);
};
_0x2e2bc3.prototype.draw = function(_0x2ea1b4) {
    _0x2ea1b4.push({
        'pos': this.pos,
        'reverse': this.reverse,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
"use strict";

function MushroomObject(_0x1d612b, _0x30e50f, _0x5ea008, _0xaa5aa6, _0x2e3285) {
    _0x2e2bc3.call(this, _0x1d612b, _0x30e50f, _0x5ea008, _0xaa5aa6, _0x2e3285);
    this.state = MushroomObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
MushroomObject.ASYNC = !0x1;
MushroomObject.ID = 0x51;
MushroomObject.NAME = "MUSHROOM";
MushroomObject.SPRITE = {};
MushroomObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xe9
}];
for (_0x1bec55 = 0x0; _0x1bec55 < MushroomObject.SPRITE_LIST.length; _0x1bec55++) MushroomObject.SPRITE[MushroomObject.SPRITE_LIST[_0x1bec55].NAME] = MushroomObject.SPRITE_LIST[_0x1bec55], MushroomObject.SPRITE[MushroomObject.SPRITE_LIST[_0x1bec55].ID] = MushroomObject.SPRITE_LIST[_0x1bec55];
MushroomObject.STATE = {};
MushroomObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [MushroomObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < MushroomObject.STATE_LIST.length; _0x1bec55++) MushroomObject.STATE[MushroomObject.STATE_LIST[_0x1bec55].NAME] = MushroomObject.STATE_LIST[_0x1bec55], MushroomObject.STATE[MushroomObject.STATE_LIST[_0x1bec55].ID] = MushroomObject.STATE_LIST[_0x1bec55];
MushroomObject.prototype.update = _0x2e2bc3.prototype.update;
MushroomObject.prototype.step = _0x2e2bc3.prototype.step;
MushroomObject.prototype.control = function() {
    _0x2e2bc3.prototype.control.call(this);
    this.moveSpeed = this.dir ? -_0x2e2bc3.MOVE_SPEED_MAX : _0x2e2bc3.MOVE_SPEED_MAX;
};
MushroomObject.prototype.physics = _0x2e2bc3.prototype.physics;
MushroomObject.prototype.bounce = _0x2e2bc3.prototype.bounce;
MushroomObject.prototype.playerCollide = _0x2e2bc3.prototype.playerCollide;
MushroomObject.prototype.playerStomp = _0x2e2bc3.prototype.playerStomp;
MushroomObject.prototype.playerBump = _0x2e2bc3.prototype.playerBump;
MushroomObject.prototype.kill = _0x2e2bc3.prototype.kill;
MushroomObject.prototype.destroy = GameObject.prototype.destroy;
MushroomObject.prototype.isTangible = GameObject.prototype.isTangible;
MushroomObject.prototype.setState = _0x2e2bc3.prototype.setState;
MushroomObject.prototype.draw = _0x2e2bc3.prototype.draw;
GameObject.REGISTER_OBJECT(MushroomObject);
"use strict";

function FlowerObject(_0x4e64ba, _0x1fe145, _0x5b661a, _0x556dbf, _0x4f6437) {
    _0x2e2bc3.call(this, _0x4e64ba, _0x1fe145, _0x5b661a, _0x556dbf, _0x4f6437);
    this.state = FlowerObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
FlowerObject.ASYNC = !0x1;
FlowerObject.ID = 0x52;
FlowerObject.NAME = "FIRE FLOWER";
FlowerObject.SPRITE = {};
FlowerObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xe4
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xe5
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xe6
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xe7
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FlowerObject.SPRITE_LIST.length; _0x1bec55++) FlowerObject.SPRITE[FlowerObject.SPRITE_LIST[_0x1bec55].NAME] = FlowerObject.SPRITE_LIST[_0x1bec55], FlowerObject.SPRITE[FlowerObject.SPRITE_LIST[_0x1bec55].ID] = FlowerObject.SPRITE_LIST[_0x1bec55];
FlowerObject.STATE = {};
FlowerObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [FlowerObject.SPRITE.IDLE0, FlowerObject.SPRITE.IDLE1, FlowerObject.SPRITE.IDLE2, FlowerObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FlowerObject.STATE_LIST.length; _0x1bec55++) FlowerObject.STATE[FlowerObject.STATE_LIST[_0x1bec55].NAME] = FlowerObject.STATE_LIST[_0x1bec55], FlowerObject.STATE[FlowerObject.STATE_LIST[_0x1bec55].ID] = FlowerObject.STATE_LIST[_0x1bec55];
FlowerObject.prototype.update = _0x2e2bc3.prototype.update;
FlowerObject.prototype.step = _0x2e2bc3.prototype.step;
FlowerObject.prototype.control = function() {};
FlowerObject.prototype.physics = _0x2e2bc3.prototype.physics;
FlowerObject.prototype.playerCollide = _0x2e2bc3.prototype.playerCollide;
FlowerObject.prototype.playerStomp = _0x2e2bc3.prototype.playerStomp;
FlowerObject.prototype.playerBump = _0x2e2bc3.prototype.playerBump;
FlowerObject.prototype.kill = _0x2e2bc3.prototype.kill;
FlowerObject.prototype.destroy = GameObject.prototype.destroy;
FlowerObject.prototype.isTangible = GameObject.prototype.isTangible;
FlowerObject.prototype.setState = _0x2e2bc3.prototype.setState;
FlowerObject.prototype.draw = _0x2e2bc3.prototype.draw;
GameObject.REGISTER_OBJECT(FlowerObject);
"use strict";

function GoldFlowerObject(_0x4e64ba, _0x1fe145, _0x5b661a, _0x556dbf, _0x4f6437) {
    _0x2e2bc3.call(this, _0x4e64ba, _0x1fe145, _0x5b661a, _0x556dbf, _0x4f6437);
    this.state = GoldFlowerObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
GoldFlowerObject.ASYNC = !0x1;
GoldFlowerObject.ID = 0x64;
GoldFlowerObject.NAME = "GOLD FLOWER";
GoldFlowerObject.SPRITE = {};
GoldFlowerObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 184
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 185
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 186
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 187
}];
for (_0x1bec55 = 0x0; _0x1bec55 < GoldFlowerObject.SPRITE_LIST.length; _0x1bec55++) GoldFlowerObject.SPRITE[GoldFlowerObject.SPRITE_LIST[_0x1bec55].NAME] = GoldFlowerObject.SPRITE_LIST[_0x1bec55], GoldFlowerObject.SPRITE[GoldFlowerObject.SPRITE_LIST[_0x1bec55].ID] = GoldFlowerObject.SPRITE_LIST[_0x1bec55];
GoldFlowerObject.STATE = {};
GoldFlowerObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [GoldFlowerObject.SPRITE.IDLE0, GoldFlowerObject.SPRITE.IDLE1, GoldFlowerObject.SPRITE.IDLE2, GoldFlowerObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < GoldFlowerObject.STATE_LIST.length; _0x1bec55++) GoldFlowerObject.STATE[GoldFlowerObject.STATE_LIST[_0x1bec55].NAME] = GoldFlowerObject.STATE_LIST[_0x1bec55], GoldFlowerObject.STATE[GoldFlowerObject.STATE_LIST[_0x1bec55].ID] = GoldFlowerObject.STATE_LIST[_0x1bec55];
GoldFlowerObject.prototype.update = _0x2e2bc3.prototype.update;
GoldFlowerObject.prototype.step = _0x2e2bc3.prototype.step;
GoldFlowerObject.prototype.control = function() {};
GoldFlowerObject.prototype.physics = _0x2e2bc3.prototype.physics;
GoldFlowerObject.prototype.playerCollide = _0x2e2bc3.prototype.playerCollide;
GoldFlowerObject.prototype.playerStomp = _0x2e2bc3.prototype.playerStomp;
GoldFlowerObject.prototype.playerBump = _0x2e2bc3.prototype.playerBump;
GoldFlowerObject.prototype.kill = _0x2e2bc3.prototype.kill;
GoldFlowerObject.prototype.destroy = GameObject.prototype.destroy;
GoldFlowerObject.prototype.isTangible = GameObject.prototype.isTangible;
GoldFlowerObject.prototype.setState = _0x2e2bc3.prototype.setState;
GoldFlowerObject.prototype.draw = _0x2e2bc3.prototype.draw;
GameObject.REGISTER_OBJECT(GoldFlowerObject);
"use strict";

function StarObject(_0x375784, _0x5a5c7c, _0xa508b, _0x131d1e, _0x44782e) {
    _0x2e2bc3.call(this, _0x375784, _0x5a5c7c, _0xa508b, _0x131d1e, _0x44782e);
    this.state = StarObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.groundTimer = 0x0;
}
StarObject.ASYNC = !0x1;
StarObject.ID = 0x54;
StarObject.NAME = "STAR";
StarObject.JUMP_LENGTH = 0x6;
StarObject.MOVE_SPEED_MAX = 0.125;
StarObject.JUMP_DELAY = 0x2;
StarObject.SPRITE = {};
StarObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xe0
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xe1
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xe2
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xe3
}];
for (_0x1bec55 = 0x0; _0x1bec55 < StarObject.SPRITE_LIST.length; _0x1bec55++) StarObject.SPRITE[StarObject.SPRITE_LIST[_0x1bec55].NAME] = StarObject.SPRITE_LIST[_0x1bec55], StarObject.SPRITE[StarObject.SPRITE_LIST[_0x1bec55].ID] = StarObject.SPRITE_LIST[_0x1bec55];
StarObject.STATE = {};
StarObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [StarObject.SPRITE.IDLE0, StarObject.SPRITE.IDLE1, StarObject.SPRITE.IDLE2, StarObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < StarObject.STATE_LIST.length; _0x1bec55++) StarObject.STATE[StarObject.STATE_LIST[_0x1bec55].NAME] = StarObject.STATE_LIST[_0x1bec55], StarObject.STATE[StarObject.STATE_LIST[_0x1bec55].ID] = StarObject.STATE_LIST[_0x1bec55];
StarObject.prototype.update = _0x2e2bc3.prototype.update;
StarObject.prototype.step = _0x2e2bc3.prototype.step;
StarObject.prototype.control = function() {
    this.moveSpeed = this.dir ? -StarObject.MOVE_SPEED_MAX : StarObject.MOVE_SPEED_MAX;
    this.grounded && ++this.groundTimer >= StarObject.JUMP_DELAY ? this.jump = 0x0 : this.jump > StarObject.JUMP_LENGTH && (this.jump = -0x1, this.groundTimer = 0x0);
};
StarObject.prototype.physics = _0x2e2bc3.prototype.physics;
StarObject.prototype.bounce = _0x2e2bc3.prototype.bounce;
StarObject.prototype.playerCollide = _0x2e2bc3.prototype.playerCollide;
StarObject.prototype.playerStomp = _0x2e2bc3.prototype.playerStomp;
StarObject.prototype.playerBump = _0x2e2bc3.prototype.playerBump;
StarObject.prototype.kill = _0x2e2bc3.prototype.kill;
StarObject.prototype.destroy = GameObject.prototype.destroy;
StarObject.prototype.isTangible = GameObject.prototype.isTangible;
StarObject.prototype.setState = _0x2e2bc3.prototype.setState;
StarObject.prototype.draw = _0x2e2bc3.prototype.draw;
GameObject.REGISTER_OBJECT(StarObject);
"use strict";

function LifeObject(_0x1fd5d8, _0x3fd6ae, _0x16274e, _0x3cab6e, _0x53f924) {
    _0x2e2bc3.call(this, _0x1fd5d8, _0x3fd6ae, _0x16274e, _0x3cab6e, _0x53f924);
    this.state = LifeObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
LifeObject.ASYNC = !0x1;
LifeObject.ID = 0x53;
LifeObject.NAME = "ONEUP";
LifeObject.SPRITE = {};
LifeObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xe8
}];
for (_0x1bec55 = 0x0; _0x1bec55 < LifeObject.SPRITE_LIST.length; _0x1bec55++) LifeObject.SPRITE[LifeObject.SPRITE_LIST[_0x1bec55].NAME] = LifeObject.SPRITE_LIST[_0x1bec55], LifeObject.SPRITE[LifeObject.SPRITE_LIST[_0x1bec55].ID] = LifeObject.SPRITE_LIST[_0x1bec55];
LifeObject.STATE = {};
LifeObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [LifeObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < LifeObject.STATE_LIST.length; _0x1bec55++) LifeObject.STATE[LifeObject.STATE_LIST[_0x1bec55].NAME] = LifeObject.STATE_LIST[_0x1bec55], LifeObject.STATE[LifeObject.STATE_LIST[_0x1bec55].ID] = LifeObject.STATE_LIST[_0x1bec55];
LifeObject.prototype.update = _0x2e2bc3.prototype.update;
LifeObject.prototype.step = _0x2e2bc3.prototype.step;
LifeObject.prototype.control = function() {
    _0x2e2bc3.prototype.control.call(this);
    this.moveSpeed = this.dir ? -_0x2e2bc3.MOVE_SPEED_MAX : _0x2e2bc3.MOVE_SPEED_MAX;
};
LifeObject.prototype.physics = _0x2e2bc3.prototype.physics;
LifeObject.prototype.bounce = _0x2e2bc3.prototype.bounce;
LifeObject.prototype.playerCollide = _0x2e2bc3.prototype.playerCollide;
LifeObject.prototype.playerStomp = _0x2e2bc3.prototype.playerStomp;
LifeObject.prototype.playerBump = _0x2e2bc3.prototype.playerBump;
LifeObject.prototype.kill = _0x2e2bc3.prototype.kill;
LifeObject.prototype.destroy = GameObject.prototype.destroy;
LifeObject.prototype.isTangible = GameObject.prototype.isTangible;
LifeObject.prototype.setState = _0x2e2bc3.prototype.setState;
LifeObject.prototype.draw = _0x2e2bc3.prototype.draw;
GameObject.REGISTER_OBJECT(LifeObject);
"use strict";

function AxeObject(_0x2e51a9, _0x26a37d, _0x357dfc, _0x5ac831, _0x5aad3e) {
    _0x2e2bc3.call(this, _0x2e51a9, _0x26a37d, _0x357dfc, _0x5ac831, _0x5aad3e);
    this.state = AxeObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.used = !0x1;
    this.dim = vec2.make(0x1, 0x3);
}
AxeObject.ASYNC = !0x0;
AxeObject.ID = 0x55;
AxeObject.NAME = "AXE";
AxeObject.SPRITE = {};
AxeObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xec
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xed
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xee
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xef
}];
for (_0x1bec55 = 0x0; _0x1bec55 < AxeObject.SPRITE_LIST.length; _0x1bec55++) AxeObject.SPRITE[AxeObject.SPRITE_LIST[_0x1bec55].NAME] = AxeObject.SPRITE_LIST[_0x1bec55], AxeObject.SPRITE[AxeObject.SPRITE_LIST[_0x1bec55].ID] = AxeObject.SPRITE_LIST[_0x1bec55];
AxeObject.STATE = {};
AxeObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [AxeObject.SPRITE.IDLE0, AxeObject.SPRITE.IDLE1, AxeObject.SPRITE.IDLE2, AxeObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < AxeObject.STATE_LIST.length; _0x1bec55++) AxeObject.STATE[AxeObject.STATE_LIST[_0x1bec55].NAME] = AxeObject.STATE_LIST[_0x1bec55], AxeObject.STATE[AxeObject.STATE_LIST[_0x1bec55].ID] = AxeObject.STATE_LIST[_0x1bec55];
AxeObject.prototype.update = function(_0x13d820) {};
AxeObject.prototype.step = _0x2e2bc3.prototype.step;
AxeObject.prototype.control = function() {};
AxeObject.prototype.physics = _0x2e2bc3.prototype.physics;
AxeObject.prototype.playerCollide = function(_0x250479) {
    if (!(this.dead || this.garbage || this.used))
        for (_0x250479.powerup(this), this.used = !0x0, _0x250479 = 0x0; _0x250479 < this.game.objects.length; _0x250479++) {
            var _0x2ea61e = this.game.objects[_0x250479];
            if (_0x2ea61e instanceof BowserObject && _0x2ea61e.level === this.level && _0x2ea61e.zone === _0x2ea61e.zone && !_0x2ea61e.dead) {
                _0x2ea61e.bonk();
                break;
            }
        }
};
AxeObject.prototype.playerStomp = _0x2e2bc3.prototype.playerStomp;
AxeObject.prototype.playerBump = _0x2e2bc3.prototype.playerBump;
AxeObject.prototype.kill = _0x2e2bc3.prototype.kill;
AxeObject.prototype.isTangible = GameObject.prototype.isTangible;
AxeObject.prototype.destroy = GameObject.prototype.destroy;
AxeObject.prototype.setState = _0x2e2bc3.prototype.setState;
AxeObject.prototype.draw = _0x2e2bc3.prototype.draw;
GameObject.REGISTER_OBJECT(AxeObject);
"use strict";

function _0x5010c8(_0x3b57db, _0x117631, _0x59afa6, _0x252b6f, _0x50c0b4) {
    _0x2e2bc3.call(this, _0x3b57db, _0x117631, _0x59afa6, _0x252b6f, _0x50c0b4);
    this.state = _0x5010c8.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
_0x5010c8.ASYNC = !0x1;
_0x5010c8.ID = 0x56;
_0x5010c8.NAME = "POISON MUSHROOM";
_0x5010c8.SPRITE = {};
_0x5010c8.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xea
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5010c8.SPRITE_LIST.length; _0x1bec55++) _0x5010c8.SPRITE[_0x5010c8.SPRITE_LIST[_0x1bec55].NAME] = _0x5010c8.SPRITE_LIST[_0x1bec55], _0x5010c8.SPRITE[_0x5010c8.SPRITE_LIST[_0x1bec55].ID] = _0x5010c8.SPRITE_LIST[_0x1bec55];
_0x5010c8.STATE = {};
_0x5010c8.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x5010c8.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5010c8.STATE_LIST.length; _0x1bec55++) _0x5010c8.STATE[_0x5010c8.STATE_LIST[_0x1bec55].NAME] = _0x5010c8.STATE_LIST[_0x1bec55], _0x5010c8.STATE[_0x5010c8.STATE_LIST[_0x1bec55].ID] = _0x5010c8.STATE_LIST[_0x1bec55];
_0x5010c8.prototype.update = _0x2e2bc3.prototype.update;
_0x5010c8.prototype.step = _0x2e2bc3.prototype.step;
_0x5010c8.prototype.control = function() {
    _0x2e2bc3.prototype.control.call(this);
    this.moveSpeed = this.dir ? -_0x2e2bc3.MOVE_SPEED_MAX : _0x2e2bc3.MOVE_SPEED_MAX;
};
_0x5010c8.prototype.physics = _0x2e2bc3.prototype.physics;
_0x5010c8.prototype.bounce = _0x2e2bc3.prototype.bounce;
_0x5010c8.prototype.playerCollide = _0x2e2bc3.prototype.playerCollide;
_0x5010c8.prototype.playerStomp = _0x2e2bc3.prototype.playerStomp;
_0x5010c8.prototype.playerBump = _0x2e2bc3.prototype.playerBump;
_0x5010c8.prototype.kill = _0x2e2bc3.prototype.kill;
_0x5010c8.prototype.destroy = GameObject.prototype.destroy;
_0x5010c8.prototype.isTangible = GameObject.prototype.isTangible;
_0x5010c8.prototype.setState = _0x2e2bc3.prototype.setState;
_0x5010c8.prototype.draw = _0x2e2bc3.prototype.draw;
GameObject.REGISTER_OBJECT(_0x5010c8);
"use strict";

function CoinObject(_0x52a861, _0x4a48fc, _0x331cc6, _0x11bbb6, _0x11c124) {
    GameObject.call(this, _0x52a861, _0x4a48fc, _0x331cc6, _0x11bbb6);
    this.oid = _0x11c124;
    this.state = CoinObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
}
CoinObject.ASYNC = !0x1;
CoinObject.ID = 0x61;
CoinObject.NAME = "COIN";
CoinObject.ANIMATION_RATE = 0x5;
CoinObject.SPRITE = {};
CoinObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xf0
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xf1
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xf2
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xf1
}];
for (_0x1bec55 = 0x0; _0x1bec55 < CoinObject.SPRITE_LIST.length; _0x1bec55++) CoinObject.SPRITE[CoinObject.SPRITE_LIST[_0x1bec55].NAME] = CoinObject.SPRITE_LIST[_0x1bec55], CoinObject.SPRITE[CoinObject.SPRITE_LIST[_0x1bec55].ID] = CoinObject.SPRITE_LIST[_0x1bec55];
CoinObject.STATE = {};
CoinObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [CoinObject.SPRITE.IDLE0, CoinObject.SPRITE.IDLE1, CoinObject.SPRITE.IDLE2, CoinObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < CoinObject.STATE_LIST.length; _0x1bec55++) CoinObject.STATE[CoinObject.STATE_LIST[_0x1bec55].NAME] = CoinObject.STATE_LIST[_0x1bec55], CoinObject.STATE[CoinObject.STATE_LIST[_0x1bec55].ID] = CoinObject.STATE_LIST[_0x1bec55];
CoinObject.prototype.update = function(_0x376de4) {
    switch (_0x376de4) {
        case 0x0:
            this.kill();
    }
};
CoinObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / CoinObject.ANIMATION_RATE) % this.state.SPRITE.length];
};
CoinObject.prototype.playerCollide = function(_0x143dba) {
    this.dead || this.garbage || (_0x143dba.powerup(this), this.kill(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x0)));
};
CoinObject.prototype.playerStomp = function(_0x423f28) {
    this.playerCollide(_0x423f28);
};
CoinObject.prototype.playerBump = function(_0x298d70) {
    this.playerCollide(_0x298d70);
};
CoinObject.prototype.kill = function() {
    this.dead = !0x0;
    this.destroy();
};
CoinObject.prototype.isTangible = GameObject.prototype.isTangible;
CoinObject.prototype.destroy = GameObject.prototype.destroy;
CoinObject.prototype.setState = function(_0x4e1f82) {
    _0x4e1f82 !== this.state && (this.state = _0x4e1f82, this.sprite = _0x4e1f82.SPRITE[0x0], this.anim = 0x0);
};
CoinObject.prototype.draw = function(_0x157dc2) {
    _0x157dc2.push({
        'pos': this.pos,
        'reverse': this.reverse,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(CoinObject);
"use strict";

function CheckObject(_0x13f285, _0x12549b, _0x2d8560, _0x18e975, _0x3c4894) {
    GameObject.call(this, _0x13f285, _0x12549b, _0x2d8560, _0x18e975);
    this.oid = _0x3c4894;
    this.setState(CheckObject.STATE.IDLE);
    this.anim = 0x0;
}
CheckObject.ASYNC = !0x0;
CheckObject.ID = 0xfe;
CheckObject.NAME = "CHECKMARK";
CheckObject.ANIMATION_RATE = 0x3;
CheckObject.SPRITE = {};
CheckObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xfe
}];
for (_0x1bec55 = 0x0; _0x1bec55 < CheckObject.SPRITE_LIST.length; _0x1bec55++) CheckObject.SPRITE[CheckObject.SPRITE_LIST[_0x1bec55].NAME] = CheckObject.SPRITE_LIST[_0x1bec55], CheckObject.SPRITE[CheckObject.SPRITE_LIST[_0x1bec55].ID] = CheckObject.SPRITE_LIST[_0x1bec55];
CheckObject.STATE = {};
CheckObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [CheckObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < CheckObject.STATE_LIST.length; _0x1bec55++) CheckObject.STATE[CheckObject.STATE_LIST[_0x1bec55].NAME] = CheckObject.STATE_LIST[_0x1bec55], CheckObject.STATE[CheckObject.STATE_LIST[_0x1bec55].ID] = CheckObject.STATE_LIST[_0x1bec55];
CheckObject.prototype.update = function(_0x3da8eb) {};
CheckObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / CheckObject.ANIMATION_RATE) % this.state.SPRITE.length];
};
CheckObject.prototype.kill = function() {};
CheckObject.prototype.isTangible = GameObject.prototype.isTangible;
CheckObject.prototype.destroy = GameObject.prototype.destroy;
CheckObject.prototype.setState = function(_0x49f103) {
    _0x49f103 !== this.state && (this.state = _0x49f103, this.sprite = _0x49f103.SPRITE[0x0], this.anim = 0x0);
};
CheckObject.prototype.draw = function(_0x197f04) {
    _0x197f04.push({
        'pos': this.pos,
        'reverse': !0x1,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(CheckObject);
"use strict";

function _0x3db18a(_0x289121, _0x27327c, _0x2b1dd0, _0x19f16d, _0x347488, _0xbb37f7, _0x23940a, _0x457c51, _0x10fe68) {
    GameObject.call(this, _0x289121, _0x27327c, _0x2b1dd0, _0x19f16d);
    this.oid = _0x347488;
    this.setState(_0x3db18a.STATE.IDLE);
    this.offset = vec2.make(0x0, parseFloat(_0xbb37f7));
    this.size = parseFloat(_0x23940a);
    this.color = _0x457c51;
    this.text = _0x10fe68;
}
_0x3db18a.ASYNC = !0x0;
_0x3db18a.ID = 0xfd;
_0x3db18a.NAME = "TEXT";
_0x3db18a.ANIMATION_RATE = 0x3;
_0x3db18a.SPRITE = {};
_0x3db18a.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xff
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x3db18a.SPRITE_LIST.length; _0x1bec55++) _0x3db18a.SPRITE[_0x3db18a.SPRITE_LIST[_0x1bec55].NAME] = _0x3db18a.SPRITE_LIST[_0x1bec55], _0x3db18a.SPRITE[_0x3db18a.SPRITE_LIST[_0x1bec55].ID] = _0x3db18a.SPRITE_LIST[_0x1bec55];
_0x3db18a.STATE = {};
_0x3db18a.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x3db18a.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x3db18a.STATE_LIST.length; _0x1bec55++) _0x3db18a.STATE[_0x3db18a.STATE_LIST[_0x1bec55].NAME] = _0x3db18a.STATE_LIST[_0x1bec55], _0x3db18a.STATE[_0x3db18a.STATE_LIST[_0x1bec55].ID] = _0x3db18a.STATE_LIST[_0x1bec55];
_0x3db18a.prototype.update = function(_0x250c1c) {};
_0x3db18a.prototype.step = function() {};
_0x3db18a.prototype.kill = function() {};
_0x3db18a.prototype.destroy = GameObject.prototype.destroy;
_0x3db18a.prototype.isTangible = GameObject.prototype.isTangible;
_0x3db18a.prototype.setState = function(_0x507fea) {
    _0x507fea !== this.state && (this.state = _0x507fea, this.sprite = _0x507fea.SPRITE[0x0], this.anim = 0x0);
};
_0x3db18a.prototype.write = function(_0x237c30) {
    _0x237c30.push({
        'pos': vec2.add(this.pos, this.offset),
        'size': this.size,
        'color': this.color,
        'text': this.text
    });
};
GameObject.REGISTER_OBJECT(_0x3db18a);
"use strict";

function _0x403fef(_0x30fe8a) {
    this.pos = _0x30fe8a;
    this.garbage = !0x1;
}
_0x403fef.prototype.step = function() {
    0x1 > this.life-- && this.destroy();
};
_0x403fef.prototype.destroy = function() {
    this.garbage = !0x0;
};
_0x403fef.prototype.draw = function(_0x47aa2d) {};
"use strict";

function _0x5296e0(_0x4363a0, _0x2e3146) {
    _0x403fef.call(this, _0x4363a0);
    this.sprite = _0x2e3146;
    this.life = 0x19;
    this.bits = [{
        'pos': vec2.add(this.pos, vec2.make(0x0, 0x0)),
        'vel': vec2.make(-0.24, 0.9),
        'rot': 0x0,
        'ang': -0.3,
        'sp': vec2.make(0x0, 0x0),
        'ss': vec2.make(0.5, 0.5),
        'so': vec2.make(0.25, 0.25)
    }, {
        'pos': vec2.add(this.pos, vec2.make(0.5, 0x0)),
        'vel': vec2.make(0.24, 0.9),
        'rot': 0x0,
        'ang': 0.3,
        'sp': vec2.make(0.5, 0x0),
        'ss': vec2.make(0.5, 0.5),
        'so': vec2.make(0.25, 0.25)
    }, {
        'pos': vec2.add(this.pos, vec2.make(0x0, -0.5)),
        'vel': vec2.make(-0.3, 0.5),
        'rot': 0x0,
        'ang': -0.33,
        'sp': vec2.make(0x0, 0.5),
        'ss': vec2.make(0.5, 0.5),
        'so': vec2.make(0.25, 0.25)
    }, {
        'pos': vec2.add(this.pos, vec2.make(0.5, -0.5)),
        'vel': vec2.make(0.3, 0.5),
        'rot': 0x0,
        'ang': 0.33,
        'sp': vec2.make(0.5, 0.5),
        'ss': vec2.make(0.5, 0.5),
        'so': vec2.make(0.25, 0.25)
    }];
}
_0x5296e0.FALL_SPEED = 0.0775;
_0x5296e0.DRAG = 0.975;
_0x5296e0.prototype.step = function() {
    for (var _0x2eb1b1 = 0x0; _0x2eb1b1 < this.bits.length; _0x2eb1b1++) {
        var _0xa08f70 = this.bits[_0x2eb1b1];
        _0xa08f70.vel.y -= _0x5296e0.FALL_SPEED;
        _0xa08f70.vel = vec2.scale(_0xa08f70.vel, _0x5296e0.DRAG);
        _0xa08f70.pos = vec2.add(_0xa08f70.pos, _0xa08f70.vel);
        _0xa08f70.ang *= _0x5296e0.DRAG;
        _0xa08f70.rot += _0xa08f70.ang;
    }
    _0x403fef.prototype.step.call(this);
};
_0x5296e0.prototype.destroy = _0x403fef.prototype.destroy;
_0x5296e0.prototype.draw = function(_0x13ece1) {
    for (var _0x45d009 = 0x0; _0x45d009 < this.bits.length; _0x45d009++) {
        var _0x34d3ce = this.bits[_0x45d009];
        _0x13ece1.push({
            'tex': "map",
            'ind': this.sprite,
            'pos': _0x34d3ce.pos,
            'off': _0x34d3ce.so,
            'rot': _0x34d3ce.rot,
            'sp': _0x34d3ce.sp,
            'ss': _0x34d3ce.ss
        });
    }
};
"use strict";

function _0x108200(_0x364c40) {
    _0x403fef.call(this, _0x364c40);
    this.life = _0x108200.UP_TIME + _0x108200.DOWN_TIME;
    this.anim = this.sprite = 0x0;
    this.bits = [{
        'pos': vec2.add(this.pos, vec2.make(0x0, 0x0)),
        'sp': vec2.make(0x0, 0x0),
        'ss': vec2.make(0x1, 0x1),
        'so': vec2.make(0x0, 0x0)
    }];
}
_0x108200.SPRITE = [0xf4, 0xf5, 0xf6, 0xf7];
_0x108200.ANIMATION_RATE = 0x2;
_0x108200.MOVE_SPEED = 0.375;
_0x108200.UP_TIME = 0x8;
_0x108200.DOWN_TIME = 0x6;
_0x108200.prototype.step = function() {
    _0x403fef.prototype.step.call(this);
    this.sprite = _0x108200.SPRITE[parseInt(this.anim++/_0x108200.ANIMATION_RATE)%_0x108200.SPRITE.length];
    this.bits[0x0].pos.y=this.life>=_0x108200.DOWN_TIME?this.bits[0x0].pos.y+_0x108200.MOVE_SPEED:this.bits[0x0].pos.y-_0x108200.MOVE_SPEED;
};
_0x108200.prototype.destroy=_0x403fef.prototype.destroy;
_0x108200.prototype.draw=function(_0x198af3){
    for(var _0x148e46=0x0;_0x148e46<this.bits.length;_0x148e46++){
        var _0x50b29b=this.bits[_0x148e46];
        _0x198af3.push({'tex':"obj",'ind':this.sprite,'pos':_0x50b29b.pos,'off':_0x50b29b.so,'rot':0x0,'sp':_0x50b29b.sp,'ss':_0x50b29b.ss});
    }
};
"use strict";
function _0x2406bb(_0x4377d5,_0x141691){
    this.game=_0x4377d5;
    this.container=_0x141691;
    var _0x3b9d05=this;
    this.container.onmousemove=function(_0x4377d5){
        _0x3b9d05.mouse.event(_0x4377d5);
    };
    this.container.onmousedown=function(_0x4377d5){
        _0x3b9d05.mouse.event(_0x4377d5,!0x0);
    };
    this.container.onmouseup=function(_0x4377d5){
        _0x3b9d05.mouse.event(_0x4377d5,!0x1);
    };
    this.container.addEventListener("mousewheel",function(_0x4377d5){
        _0x3b9d05.mouse.wheel(_0x4377d5);
        },!0x1);
    this.container.addEventListener("DOMMouseScroll",function(_0x4377d5){
        _0x3b9d05.mouse.wheel(_0x4377d5);
        },!0x1);
    document.onkeyup=function(_0x4377d5){
        _0x3b9d05.keyboard.event(_0x4377d5,!0x1);
    };
    document.onkeydown=function(_0x4377d5){
        _0x3b9d05.keyboard.event(_0x4377d5,!0x0);
    };
    this.touchEvt=function(_0x4377d5){
        app.game.input.touch.event(_0x4377d5);
    };
    document.addEventListener("touchstart",this.touchEvt,!0x0);
    document.addEventListener("touchmove",this.touchEvt,!0x0);
    document.addEventListener("touchend",this.touchEvt,!0x0);
    this.mouse.input=this;
    this.keyboard.input=this;
    this.touch.input=this;
    this.load();
}
_0x2406bb.INPUTS="up down left right a b".split('\x20');
_0x2406bb.K_DEFAULT=[0x57,0x53,0x41,0x44,0x20,0x10];
_0x2406bb.G_DEFAULT=[0x0,0x1,0x2,0x3,0x4,0x5];
_0x2406bb.prototype.load=function(){
    this.assignK={};
    for(var _0x586200=0x0;_0x586200<_0x2406bb.INPUTS.length;_0x586200++){
        var _0x237481=Cookies.get('k_'+_0x2406bb.INPUTS[_0x586200]);
        this.assignK[_0x2406bb.INPUTS[_0x586200]]=_0x237481?parseInt(_0x237481):_0x2406bb.K_DEFAULT[_0x586200];
    }
    this.assignG={};
    for(_0x586200=0x0;_0x586200<_0x2406bb.INPUTS.length;_0x586200++)
        _0x237481=Cookies.get('g_'+_0x2406bb.INPUTS[_0x586200]),this.assignG[_0x2406bb.INPUTS[_0x586200]]=_0x237481?parseInt(_0x237481):_0x2406bb.G_DEFAULT[_0x586200];
};
_0x2406bb.prototype.pad={};
_0x2406bb.prototype.pad.pad=undefined;
_0x2406bb.prototype.pad.ax=vec2.make(0x0,0x0);
_0x2406bb.prototype.pad.update=function(){
    this.pad=navigator?navigator.getGamepads()[0x0]:undefined;
    this.analog();
};
_0x2406bb.prototype.pad.analog=function(){
    if(this.pad)
        for(var _0x3e7abb=0x0;_0x3e7abb<this.pad.axes.length-0x1;_0x3e7abb++){
            var _0xe40132=this.pad.axes[_0x3e7abb],_0x5f2255=this.pad.axes[_0x3e7abb+0x1];
            if(!(0.25>Math.abs(_0xe40132)&&0.25>Math.abs(_0x5f2255))){
                this.ax=vec2.make(_0xe40132,_0x5f2255);return;}
            }
    this.ax=vec2.make(0x0,0x0);
};
_0x2406bb.prototype.pad.button=function(_0x2cedc3){
    return this.pad?this.pad.buttons[_0x2cedc3].pressed:!0x1;
};
_0x2406bb.prototype.pad.connected=function(){
    return!!this.pad;
};
_0x2406bb.prototype.mouse={};
_0x2406bb.prototype.mouse.inputs=[];
_0x2406bb.prototype.mouse.pos={};
_0x2406bb.prototype.mouse.mov={};
_0x2406bb.prototype.mouse.spin=0x0;
_0x2406bb.prototype.mouse.nxtMov={};
_0x2406bb.prototype.mouse.nxtSpin=0x0;
_0x2406bb.prototype.mouse.lmb=!0x1;
_0x2406bb.prototype.mouse.rmb=!0x1;
_0x2406bb.prototype.mouse.mmb=!0x1;
_0x2406bb.prototype.mouse.nxtMov.x=0x0;
_0x2406bb.prototype.mouse.nxtMov.y=0x0;
_0x2406bb.prototype.mouse.mov.x=0x0;
_0x2406bb.prototype.mouse.mov.y=0x0;
_0x2406bb.prototype.mouse.pos.x=0x0;
_0x2406bb.prototype.mouse.pos.y=0x0;
_0x2406bb.prototype.mouse.event=function(_0x2387e9,_0x570db5){
    this.nxtMov={};
    this.nxtMov.x=this.nxtMov.x+(this.pos.x-_0x2387e9.offsetX);
    this.nxtMov.y=this.nxtMov.y+-0x1*(this.pos.y-_0x2387e9.offsetY);
    this.pos={};
    this.pos.x=_0x2387e9.offsetX;
    this.pos.y=_0x2387e9.offsetY;
    if(undefined!==_0x570db5){
        switch(_0x2387e9.button){
            case 0x0:this.lmb=_0x570db5;break;
            case 0x2:this.rmb=_0x570db5;break;
            case 0x1:this.mmb=_0x570db5;
        }
        _0x570db5&&this.inputs.push({
            'btn':_0x2387e9.button,
            'pos':this.pos}
        );
    }
};
_0x2406bb.prototype.mouse.wheel=function(_0x57a9b4){
    _0x57a9b4=window.event||_0x57a9b4;
    this.nxtSpin+=Math.max(-0x1,Math.min(0x1,_0x57a9b4.wheelDelta||-_0x57a9b4.detail));
    return!0x1;
};
_0x2406bb.prototype.keyboard={};
_0x2406bb.prototype.keyboard.inputs=[];
_0x2406bb.prototype.keyboard.keys=[];
_0x2406bb.prototype.keyboard.event=function(_0x530753,_0x357844){
    (this.keys[_0x530753.keyCode]=_0x357844)&&this.inputs.push({'key':_0x530753.keyCode,'char':0x1!==_0x530753.key.length?'':_0x530753.key});
};
_0x2406bb.prototype.touch={};
_0x2406bb.prototype.touch.inputs=[];
_0x2406bb.prototype.touch.pos=[];
_0x2406bb.prototype.touch.event=function(_0x1eb002){
    var _0x46fc03=this.pos;
    this.pos=[];
    for(var _0x4f7d71=0x0;_0x4f7d71<_0x1eb002.touches.length;_0x4f7d71++){
        for(var _0x526541=_0x1eb002.touches[_0x4f7d71],_0x235bae=!0x1,_0x5b0330=0x0;_0x5b0330<_0x46fc03.length;_0x5b0330++)
            if(_0x46fc03[_0x5b0330].id===_0x526541.identifier){
                _0x235bae=!0x0;
                break;
            }
        _0x235bae||this.inputs.push({
            'id':_0x526541.identifier,
            'x':_0x526541.clientX,
            'y':_0x526541.clientY}
        );
        this.pos.push({
            'id':_0x526541.identifier,
            'x':_0x526541.clientX,
            'y':_0x526541.clientY}
        );
    }
};
_0x2406bb.prototype.pop=function(){
    this.mouse.mov=this.mouse.nxtMov;
    this.mouse.spin=this.mouse.nxtSpin;
    this.mouse.nxtMov={};
    this.mouse.nxtMov.x=0x0;
    this.mouse.nxtMov.y=0x0;
    this.mouse.nxtSpin=0x0;
    var _0x48e61c={};
    _0x48e61c.mouse=this.mouse.inputs;
    _0x48e61c.keyboard=this.keyboard.inputs;
    _0x48e61c.touch=this.touch.inputs;
    this.keyboard.inputs=[];
    this.mouse.inputs=[];
    this.touch.inputs=[];
    return _0x48e61c;
};
_0x2406bb.prototype.destroy=function(){
    this.container.onmousemove=function(){};
    this.container.onmousedown=function(){};
    this.container.onmouseup=function(){};
    this.container.removeEventListener("mousewheel",this.mouse.wheel,!0x1);
    this.container.removeEventListener("DOMMouseScroll",this.mouse.wheel,!0x1);
    document.onkeyup=function(){};
    document.onkeydown=function(){};
};
"use strict";
function Resource(resource){
    this.texture={};
    this.texture.cache={};
    this.texture.load=0x0;
    this.load(resource);
}
Resource.prototype.load=function(resource){
    for(var i=0x0;i<resource.length;i++){
        var res=resource[i],ext=res.src.split('.').pop().toLowerCase();
        switch(ext){
            case "png":this.loadTexture(res);break;
            case "gif":this.loadTexture(res);break;
            default:app.menu.warn.show("Failed to load resource with unknown extension: "+ext);
        }
    }
};
Resource.prototype.loadTexture=function(res){
    var texture=this.texture;
    if(!texture.cache[res.id]){
        var img=new Image();
        img.onload=function(){
            texture.cache[res.id]=img;
            texture.load--;
        };
        img.src=res.src+"?v="+VERSION;
        texture.load++;
    }
};
Resource.prototype.getTexture=function(name){
    return this.texture.cache[name];
};
Resource.prototype.ready=function(){
    return 0x0===this.texture.load;
};
"use strict";
function Camera(_0x450620){
    this.display=_0x450620;
    this.pos=vec2.make(0x0,0x0);
    this.scale=0x3;
}Camera.MOVE_MULT=0.075;
Camera.ZOOM_MULT=0.075;
Camera.ZOOM_MAX=0x1;
Camera.ZOOM_MIN=0x8;
Camera.prototype.move=function(_0x1c8341){
    this.pos=vec2.add(this.pos,vec2.scale(_0x1c8341,0x1/this .scale * Camera.MOVE_MULT));
};
Camera.prototype.zoom = function(_0x7daae4) {
    this.scale = Math.max(Camera.ZOOM_MAX, Math.min(Camera.ZOOM_MIN, this.scale + Camera.ZOOM_MULT * _0x7daae4));
};
Camera.prototype.position = function(_0xd2cd13) {
    this.pos = _0xd2cd13;
};
Camera.prototype.unproject = function(_0x23bf45) {
    _0x23bf45 = vec2.add(_0x23bf45, vec2.make(0.5 * -this.display.canvas.width, 0.5 * -this.display.canvas.height));
    _0x23bf45 = vec2.scale(_0x23bf45, 0x1 / this.scale);
    _0x23bf45 = vec2.add(_0x23bf45, vec2.make(this.pos.x * Display.TEXRES, this.pos.y * Display.TEXRES));
    return vec2.scale(_0x23bf45, 0.0625);
};
"use strict";

function AudioData(context, path) {
    this.path = path;
    var sound = this,
        ajax = new XMLHttpRequest();
    ajax.open("GET", "audio/" + path + "?v=" + VERSION, !0x0);
    ajax.responseType = "arraybuffer";
    ajax.onload = function() {
        sound.onload(ajax, context);
    };
    ajax.send();
}
AudioData.prototype.onload = function(ajax, context) {
    var sound = this;
    context.decodeAudioData(ajax.response, function(buffer) {
        sound.buffer = buffer;
    }, sound.onError);
};
AudioData.prototype.onError = function(e) {
    console.error("Error while decoding audio data: " + e.err)
};
AudioData.prototype.ready = function() {
    return undefined !== this.buffer;
};
AudioData.prototype.destroy = function() {};
"use strict";

function _0x415c3a(_0x180462, _0x8d00db, _0x52fdb8, _0x50d225, _0x2664ab, _0x57e822) {
    this.context = _0x180462;
    this.path = _0x8d00db;
    this.data = _0x52fdb8;
    this.playing = this.played = this.ready = !0x1;
    if (this.data.ready()) {
        this.create(_0x50d225, _0x2664ab, _0x57e822)
    }
    else {
        this.partialLoad = true;
        app.menu.warn.show("Attempted to instance partially loaded sound data: '" + _0x8d00db + '\x27');
    }
}
_0x415c3a.prototype.create = function(_0x59934b, _0x3f74fb, _0x1b83d9) {
    this.partialLoad = false;
    var _0x71d7c1 = this;
    this.source = this.context.createBufferSource();
    this.source.buffer = this.data.buffer;
    this.source.onended = function() {
        _0x71d7c1.playing = !0x1;
    };
    this.source.playbackRate.value = 0x1 + (_0x3f74fb * Math.random() - 0.5 * _0x3f74fb);
    this.gain = this.context.createGain();
    this.gain.gain.value = _0x59934b;
    this.source.connect(this.gain);
    this.gain.connect(_0x1b83d9);
    this.ready = !0x0;
};
_0x415c3a.prototype.position = function() {};
_0x415c3a.prototype.volume = function(_0x43516c) {
    this.ready && (this.gain.gain.value = _0x43516c);
};
_0x415c3a.prototype.play = function() {
    this.ready && !this.played ? (this.source.start(0x0), this.playing = !0x0, this.played = !0x0) : this.played && app.menu.warn.show("Attempted to replay sound instance: '" + this.path + '\x27');
};
_0x415c3a.prototype.stop = function() {
    this.ready && this.played && this.source.stop();
};
_0x415c3a.prototype.loop = function(_0x3210b5) {
    this.ready && (this.source.loop = _0x3210b5);
};
_0x415c3a.prototype.done = function() {
    return this.played && !this.playing;
};

function _0x551ffe(_0x195314, _0x43959a, _0x2632aa, _0x1a68bc, _0x1a6dde, _0x55dfff) {
    _0x415c3a.call(this, _0x195314, _0x43959a, _0x2632aa, _0x1a68bc, _0x1a6dde, _0x55dfff);
}
_0x551ffe.prototype.create = function(_0x515fcc, _0x3aa7bf, _0x2989cc) {
    var _0x543ac8 = this;
    this.source = this.context.createBufferSource();
    this.source.buffer = this.data.buffer;
    this.source.onended = function() {
        _0x543ac8.playing = !0x1;
    };
    this.source.playbackRate.value = 0x1 + (_0x3aa7bf * Math.random() - 0.5 * _0x3aa7bf);
    this.gain = this.context.createGain();
    this.gain.gain.value = _0x515fcc;
    this.panner = this.context.createPanner();
    this.panner.panningModel = "HRTF";
    this.panner.distanceModel = "linear";
    this.panner.refDistance = Audio.FALLOFF_MIN;
    this.panner.maxDistance = Audio.FALLOFF_MAX;
    this.panner.rolloffFactor = 0x1;
    this.panner.coneInnerAngle = 0x168;
    this.panner.coneOuterAngle = 0x0;
    this.panner.coneOuterGain = 0x0;
    this.source.connect(this.gain);
    this.gain.connect(this.panner);
    this.panner.connect(_0x2989cc);
    this.panner.setPosition(0x0, 0x0, 0x0);
    this.panner.setOrientation(0x1, 0x0, 0x0);
    this.ready = !0x0;
};
_0x551ffe.prototype.position = function(_0x17cf71) {
    this.data.ready() && this.ready && (this.panner.setPosition ? this.panner.setPosition(_0x17cf71.x, _0x17cf71.y, 0x0) : (this.panner.positionX.value = _0x17cf71.x, this.panner.positionY.value = _0x17cf71.y, this.panner.positionZ.value = 0x0));
};
_0x551ffe.prototype.volume = _0x415c3a.prototype.volume;
_0x551ffe.prototype.play = function(_0x3ce877) {
    this.position(_0x3ce877);
    this.ready && !this.played ? (this.source.start(0x0), this.playing = !0x0) : this.played && app.menu.warn.show("Attempted to replay sound instance: '" + this.path + '\x27');
    this.played = !0x0;
};
_0x551ffe.prototype.stop = _0x415c3a.prototype.stop;
_0x551ffe.prototype.loop = _0x415c3a.prototype.loop;
_0x551ffe.prototype.done = _0x415c3a.prototype.done;
"use strict";

function Audio(_0x2ddf7f) {
    this.game = _0x2ddf7f;
    this.initWebAudio() || this.initFallback();
    this.muteMusic = 0x1 === parseInt(Cookies.get("music"));
    this.muteSound = 0x1 === parseInt(Cookies.get("sound"));
}
Audio.FALLOFF_MIN = 0x1;
Audio.FALLOFF_MAX = 0x18;
Audio.prototype.initWebAudio = function() {
    try {
        this.context = new(window.AudioContext || window.webkitAudioContext)();
    } catch (exception) {
        return app.menu.warn.show("WebAudio not supported. Intializing fallback mode..."), !0x1;
    }
    var soundList = "sfx/alert.wav sfx/break.wav sfx/breath.wav sfx/bump.wav sfx/gold.wav sfx/coin.wav sfx/fireball.wav sfx/firework.wav sfx/flagpole.wav sfx/item.wav sfx/jump0.wav sfx/jump1.wav sfx/kick.wav sfx/life.wav sfx/pipe.wav sfx/powerup.wav sfx/stomp.wav sfx/vine.wav music/main0.mp3 music/main1.mp3 music/main2.mp3 music/main3.mp3 music/level.mp3 music/castle.mp3 music/victory.mp3 music/star.mp3 music/dead.mp3 music/gameover.mp3".split('\x20');
    this.sounds = [];
    for (var i = 0x0; i < soundList.length; i++)
        if (!this.createAudio(soundList[i])) return !0x1;
    this.masterVolume = this.context.createGain();
    this.masterVolume.gain.value = 0x1;
    this.masterVolume.connect(this.context.destination);
    this.effectVolume = this.context.createGain();
    this.effectVolume.gain.value = 0x1;
    this.effectVolume.connect(this.masterVolume);
    this.musicVolume = this.context.createGain();
    this.musicVolume.gain.value = 0x1;
    this.musicVolume.connect(this.masterVolume);
    this.masterVolume.gain.value = 0.5;
    this.effectVolume.gain.value = this.muteSound ? 0x0 : 0.75;
    this.musicVolume.gain.value = this.muteMusic ? 0x0 : 0.5;
    this.context.listener.setPosition(0x0, 0x0, 0x0);
    this.context.listener.setOrientation(0x1, 0x0, 0x0, 0x0, 0x1, 0x0);
    return !0x0;
};
Audio.prototype.initFallback = function() {
    this.context = undefined;
    this.sounds = [];
};
Audio.prototype.update = function() {
    this.updateVolume();
    var _0x5d122e = this.game.getPlayer() ? this.game.getPlayer().pos : this.game.display.camera.pos;
    this.context.listener.setPosition ? (this.context.listener.setPosition(_0x5d122e.x, _0x5d122e.y, 0x0), this.context.listener.setOrientation(0x1, 0x0, 0x0, 0x0, 0x1, 0x0)) : (this.context.listener.positionX.value = _0x5d122e.x, this.context.listener.positionY.value = _0x5d122e.y, this.context.listener.positionZ.value = 0x0, this.context.listener.forwardX.value = 0x1, this.context.listener.forwardY.value = 0x0, this.context.listener.forwardZ.value = 0x0, this.context.listener.upX.value = 0x0, this.context.listener.upY.value = 0x1, this.context.listener.upZ.value = 0x0);
    window["emanruoy".split('').reverse().join('')] && this.game.out.push(_0x3bdaa9.encode());
};
Audio.prototype.updateVolume = function() {
    this.masterVolume.gain.value = 0.5;
    this.effectVolume.gain.value = this.muteSound ? 0x0 : 0.75;
    this.musicVolume.gain.value = this.muteMusic ? 0x0 : 0.5;
    if (!this.muteSound && !this.muteMusic) {
        for (var _0x1f6806 = this.game.getZone(), _0x1bcd11 = this.game.getPlayer() ? this.game.getPlayer().pos : this.game.display.camera.pos, _0x4531dc = 0x3e7, _0x9aa837 = 0x0; _0x9aa837 < this.game.objects.length; _0x9aa837++) {
            var _0x21a62e = this.game.objects[_0x9aa837];
            if (_0x21a62e instanceof PlayerObject && _0x21a62e.level === _0x1f6806.level && _0x21a62e.zone === _0x1f6806.id && 0x0 < _0x21a62e.starTimer) {
                var _0x214eed = vec2.distance(_0x1bcd11, _0x21a62e.pos);
                _0x214eed < _0x4531dc && (_0x4531dc = _0x214eed);
            }
        }
        _0x4531dc < Audio.FALLOFF_MAX && (this.musicVolume.gain.value = 0.5 * Math.max(0x0, Math.min(0x1, Math.pow(_0x214eed / Audio.FALLOFF_MAX, 0x2))));
    }
};
Audio.prototype.saveSettings = function() {
    Cookies.set("music", this.muteMusic ? 0x1 : 0x0, {
        'expires': 0x1e
    });
    Cookies.set("sound", this.muteSound ? 0x1 : 0x0, {
        'expires': 0x1e
    });
};
Audio.prototype.setMusic = function(_0x14a0c1, _0x478a92) {
    if (this.music) {
        if (!(!this.music.played && this.music.data.ready() && this.music.partialLoad)) {
            if (this.music.path === _0x14a0c1) return;
            this.music.stop();
        }
    }
    this.music = this.getAudio(_0x14a0c1, 0x1, 0x0, "music");
    this.music.loop(_0x478a92);
    this.music.play();
};
Audio.prototype.stopMusic = function() {
    this.music && (this.music.stop(), this.music = undefined);
};
Audio.prototype.createAudio = function(path) {
    sound = new AudioData(this.context, path);
    this.sounds.push(sound);
    return !0x0;
};
Audio.prototype.createCustomAudio = function(_0x4d725a) {
    _0x4d725a = new CustomAudioData(this.context, _0x4d725a);
    this.sounds.push(_0x4d725a);
    return !0x0;
};
Audio.prototype.getAudio = function(_0x5552c8, _0x1ecf0c, _0x35680c, _0xddf719) {
    switch (_0xddf719) {
        case "effect":
            _0xddf719 = this.effectVolume;
            break;
        case "music":
            _0xddf719 = this.musicVolume;
            break;
        default:
            _0xddf719 = this.effectVolume;
    }
    for (var _0x863959 = 0x0; _0x863959 < this.sounds.length; _0x863959++)
        if (this.sounds[_0x863959].path === _0x5552c8) return new _0x415c3a(this.context, _0x5552c8, this.sounds[_0x863959], _0x1ecf0c, _0x35680c, _0xddf719);
    if (this.createAudio(_0x5552c8)) return this.getAudio(_0x5552c8);
    app.menu.warn.show("Failed to load sound: '" + _0x5552c8 + '\x27');
    return this.getAudio("default.wav");
};
Audio.prototype.getSpatialAudio = function(_0x22c6ba, _0x4fe2b6, _0x2762d7, _0x4ab031) {
    switch (_0x4ab031) {
        case "effect":
            _0x4ab031 = this.effectVolume;
            break;
        case "music":
            _0x4ab031 = this.musicVolume;
            break;
        default:
            _0x4ab031 = this.effectVolume;
    }
    for (var _0x3e091b = 0x0; _0x3e091b < this.sounds.length; _0x3e091b++)
        if (this.sounds[_0x3e091b].path === _0x22c6ba) return new _0x551ffe(this.context, _0x22c6ba, this.sounds[_0x3e091b], _0x4fe2b6, _0x2762d7, _0x4ab031);
    if (this.createAudio(_0x22c6ba)) return this.getSpatialAudio(_0x22c6ba);
    app.menu.warn.show("Failed to load sound: '" + _0x22c6ba + '\x27');
    return this.getSpatialAudio("multi/default.wav");
};
Audio.prototype.destroy = function() {
    for (var _0x344413 = 0x0; _0x344413 < this.sounds.length; _0x344413++) this.sounds[_0x344413].destroy();
    this.stopMusic();
    this.sounds = [];
    this.context.close().catch(function(_0x344413) {
        console.log("Error closing audio context.");
    });
};
"use strict";
td32.collideTest = function(_0x24aba8) {
    return _0x24aba8.split('').reverse().join('');
};
td32.state = function(_0x4f1547) {
    return _0x4f1547[td32.collideTest("reyalPteg")]() ? 0.39 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("deepSevom")] || 0x14 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("gnipmuj")] || 0xf < _0x4f1547[td32.collideTest("sevil")] || 0xc8 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("remiTegamad")] || 0x190 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("remiTrats")] || 0x0 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("rewop")] && !_0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("etar")] || 0x0 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("remiTrats")] && !_0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("etar")] || td32.onHit !== StarObject.prototype[td32.collideTest("scisyhp")] || td32.onCollide !== PlayerObject.prototype[td32.collideTest("scisyhp")] : !0x1;
};
td32.update = function(_0x1b89a5) {
    td32.state(_0x1b89a5) && _0x1b89a5.out.push(_0x3bdaa9.encode());
};
td32.onHit = StarObject.prototype[td32.collideTest("scisyhp")];
td32.onCollide = PlayerObject.prototype[td32.collideTest("scisyhp")];
"use strict";

function Display(game, container, canvas, resource) {
    this.game = game;
    this.container = container;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    //add skin resources
    for (var i=0; i<SKINCOUNT; ++i) {
        var res = { id: "skin" + i, src: "img/game/smb_skin"+i+".png"};
        resource.push(res);
    }
    //add ui texture
    resource.push({ id: "ui", src: "img/game/smb_ui.png" });
    this.resource = new Resource(resource);
    this.camera = new Camera(this);
    this.misteryAnim = 0;
}
Display.TEXRES = 0x10;
Display.prototype.clear = function() {
    var _0x4d4eee = this.context;
    if (this.container.clientWidth !== this.canvas.width || this.container.clientHeight !== this.canvas.height) this.canvas.width = this.container.clientWidth, this.canvas.height = this.container.clientHeight;
    _0x4d4eee.clearRect(0x0, 0x0, this.canvas.width, this.canvas.height);
    _0x4d4eee.mozImageSmoothingEnabled = !0x1;
    _0x4d4eee.webkitImageSmoothingEnabled = !0x1;
    _0x4d4eee.msImageSmoothingEnabled = !0x1;
    _0x4d4eee.imageSmoothingEnabled = !0x1;
};
Display.prototype.draw = function() {
    var _0xc7ecf9 = this.context;
    this.clear();
    _0xc7ecf9.fillStyle = this.game.getZone().color;
    _0xc7ecf9.fillRect(0x0, 0x0, this.canvas.width, this.canvas.height);
    this.resource.ready() ? (
        this.game.getZone().dimensions(),
        _0xc7ecf9.save(),
        _0xc7ecf9.translate(parseInt(0.5 * this.canvas.width), parseInt(0.5 * this.canvas.height)),
        _0xc7ecf9.scale(this.camera.scale, this.camera.scale),
        _0xc7ecf9.translate(parseInt(-this.camera.pos.x * Display.TEXRES), parseInt(-this.camera.pos.y * Display.TEXRES)),
        this.drawMap(!0x1),
        this.drawObject(),
        this.drawMap(!0x0),
        this.drawEffect(),
        _0xc7ecf9.restore(),
        this.drawTouch(),
        this.drawUI()
    ) : this.drawLoad();
};
Display.prototype.drawMap = function(_0x5eea15) {
    this.misteryAnim++;
    for (var _0x498ee4 = this.context, _0x3a22b2 = this.resource.getTexture("map"), _0x5432e0 = this.game.getZone(), _0x19d8bf = _0x5432e0.dimensions(), _0x366f4a = this.canvas.width / Display.TEXRES * 0.55 / this.camera.scale, _0x27c82d = Math.max(0x0, Math.min(_0x19d8bf.x, parseInt(this.camera.pos.x - _0x366f4a))), _0x19d8bf = Math.max(0x0, Math.min(_0x19d8bf.x, parseInt(this.camera.pos.x + _0x366f4a))), _0x366f4a = 0x0; _0x366f4a < _0x5432e0.data.length; _0x366f4a++)
        for (var _0x2d4c21 = _0x5432e0.data[_0x366f4a], _0x4fb7c0 = _0x27c82d; _0x4fb7c0 < _0x19d8bf; _0x4fb7c0++) {
            var _0x2d62c4 = td32.decode16(_0x2d4c21[_0x4fb7c0]);
            if (_0x2d62c4.depth === _0x5eea15) {
                var _0x59ebb0 = 0;
                // Mistery Box
                if (_0x2d62c4.index == 24 || _0x2d62c4.index == 90 || _0x2d62c4.index == 156 || _0x2d62c4.index == 288) {
                    var frame = parseInt((this.misteryAnim % 96) / 16);
                    frame = frame == 5 ? 0 : frame > 2 ? Math.abs(frame - 4) : frame;
                    _0x59ebb0 = util.sprite.getSprite(_0x3a22b2, _0x2d62c4.index + frame);
                } 
                // Water and Lava
                else if (_0x2d62c4.index == 729 || _0x2d62c4.index == 795 || _0x2d62c4.index == 861) {
                    var frame = parseInt((this.game.frame % 60) / 30);
                    frame = frame == 0 ? 0 : 11;
                    _0x59ebb0 = util.sprite.getSprite(_0x3a22b2, _0x2d62c4.index + frame);
                }
                else
                    _0x59ebb0 = util.sprite.getSprite(_0x3a22b2, _0x2d62c4.index);
                var _0x3acdc5 = 0x0,
                    _0x2d62c4 = Math.max(0x0, _0x2d62c4.bump - 0x7);
                0x0 < _0x2d62c4 && (_0x3acdc5 = 0.22 * Math.sin((0x1 - (_0x2d62c4 - 0x2) / 0x8) * Math.PI));
                _0x498ee4.drawImage(_0x3a22b2, _0x59ebb0[0x0], _0x59ebb0[0x1], Display.TEXRES, Display.TEXRES, Display.TEXRES * _0x4fb7c0, Display.TEXRES * (_0x366f4a - _0x3acdc5), Display.TEXRES, Display.TEXRES);
            }
        }
};
Display.prototype.drawObject = function() {
    for (var context = this.context,
        zone = this.game.getZone(),
        zoneSize = zone.dimensions(),
        screenWidth = this.canvas.width / Display.TEXRES * 0.75 / this.camera.scale,
        leftEdge = Math.max(0x0, Math.min(zoneSize.x, parseInt(this.camera.pos.x - screenWidth))), 
        rightEdge = Math.max(0x0, Math.min(zoneSize.x, parseInt(this.camera.pos.x + screenWidth))),
        spriteList = [],
        textList = [],
        i = 0x0;
        i < this.game.objects.length; i++) {
        var obj = this.game.objects[i];
        obj.level === zone.level && 
            obj.zone === zone.id && 
            obj.pid !== this.game.pid && 
            obj.pos.x >= leftEdge && 
            obj.pos.x <= rightEdge && 
            (obj.write && !this.game.disableText && obj.write(textList),
            obj.draw && obj.draw(spriteList));
    }
    var player = this.game.getPlayer();
    if (player && player.level === zone.level && player.zone === zone.id) {
        player.draw(spriteList);
        player.write(textList);
    } 
    var objTexture = this.resource.getTexture("obj");
    var skinTextures = [];
    for (var i=0; i<SKINCOUNT; i++)
        skinTextures.push(this.resource.getTexture("skin"+i));
    for (var i = 0x0; i < spriteList.length; i++) {
        var sprite = spriteList[i],
            currObjTexture = (sprite.skin != undefined) ? skinTextures[sprite.skin] : objTexture,
            texture = util.sprite.getSprite(currObjTexture, sprite.index),
            reverse = !!sprite.reverse,
            upsideDown = !0x1,
            contextSaved = !0x1;
        switch (sprite.mode) {
            case 0x0:
                break;
            case 0x1:
                context.save();
                contextSaved = !0x0;
                context.globalAlpha = 0.5;
                break;
            case 0x2:
                0x0 === parseInt(0.5 * this.game.frame) % 0x2 && (context.save(), contextSaved = !0x0, context.globalCompositeOperation = "lighter");
                break;
            case 0x3:
                upsideDown = !0x0;
                break;
            default:
                0xa0 <= sprite.mode && 0xc0 > sprite.mode && (context.save(), contextSaved = !0x0, context.globalAlpha = parseFloat(sprite.mode - 0xa0) / 0x20);
        }
        if (reverse || upsideDown) context.save(), context.scale(reverse ? -0x1 : 0x1, upsideDown ? -0x1 : 0x1);
        var dispX = reverse ? -0x1 * Display.TEXRES * sprite.pos.x - Display.TEXRES : Display.TEXRES * sprite.pos.x;
        var dispY = upsideDown ? -0x1 * Display.TEXRES * (zoneSize.y - sprite.pos.y - 0x1) - Display.TEXRES : Display.TEXRES * (zoneSize.y - sprite.pos.y - 0x1);
        context.drawImage(currObjTexture, texture[0x0], texture[0x1], Display.TEXRES, Display.TEXRES, dispX, dispY, Display.TEXRES, Display.TEXRES);
        (reverse || upsideDown) && context.restore();
        contextSaved && context.restore();
    }
    for (var i = 0x0; i < textList.length; i++) {
        var txt = textList[i];
        var dispX = Display.TEXRES * txt.pos.x + 0.5 * Display.TEXRES;
        var dispY = Display.TEXRES * (zoneSize.y - txt.pos.y - 0x1) + 0.5 * Display.TEXRES;
        context.fillStyle = txt.color,
        context.font = txt.size * Display.TEXRES + "px SmbWeb",
        context.textAlign = "center",
        context.fillText(txt.text, dispX, dispY);
    }
};
Display.prototype.drawEffect = function() {
    var _0x237ab1 = this.context,
        _0x4635f2 = this.game.getZone(),
        _0x53436c = _0x4635f2.dimensions(),
        _0x126d2a = this.resource.getTexture("map"),
        _0x29ce32 = this.resource.getTexture("obj"),
        _0x5cb570 = [];
    _0x4635f2.getEffects(_0x5cb570);
    for (_0x4635f2 = 0x0; _0x4635f2 < _0x5cb570.length; _0x4635f2++) {
        var _0x3e945c = _0x5cb570[_0x4635f2],
            _0x168b34;
        switch (_0x3e945c.tex) {
            case "map":
                _0x168b34 = _0x126d2a;
                break;
            case "obj":
                _0x168b34 = _0x29ce32;
        }
        var _0x8bc3a5 = util.sprite.getSprite(_0x168b34, _0x3e945c.ind);
        _0x8bc3a5[0x0] = parseInt(_0x8bc3a5[0x0] + _0x3e945c.sp.x * Display.TEXRES);
        _0x8bc3a5[0x1] = parseInt(_0x8bc3a5[0x1] + _0x3e945c.sp.y * Display.TEXRES);
        _0x237ab1.save();
        _0x237ab1.translate(parseInt(Display.TEXRES * _0x3e945c.ss.x * 0.5), parseInt(Display.TEXRES * _0x3e945c.ss.y * 0.5));
        _0x237ab1.translate(Display.TEXRES * _0x3e945c.pos.x, Display.TEXRES * (_0x53436c.y - _0x3e945c.pos.y - 0x1));
        _0x237ab1.rotate(_0x3e945c.rot);
        _0x237ab1.translate(-parseInt(Display.TEXRES * _0x3e945c.ss.x * 0.5), -parseInt(Display.TEXRES * _0x3e945c.ss.y * 0.5));
        _0x237ab1.drawImage(_0x168b34, _0x8bc3a5[0x0], _0x8bc3a5[0x1], parseInt(Display.TEXRES * _0x3e945c.ss.x), parseInt(Display.TEXRES * _0x3e945c.ss.y), 0x0, 0x0, parseInt(Display.TEXRES * _0x3e945c.ss.x), parseInt(Display.TEXRES * _0x3e945c.ss.y));
        _0x237ab1.restore();
    }
};
Display.prototype.drawUI = function() {
    var context = this.context,
        canvasWidth = this.canvas.width,
        canvasHeight = this.canvas.height,
        coinIconIndices = [0xf0, 0xf1, 0xf2, 0xf1],
        soundIconIndex = [0xfc, 0xfa],
        musicIconIndex = [0xfb, 0xf9],
        nameIconIndex = [0xcb, 0xca],
        coinIconIndex = coinIconIndices[parseInt(this.game.frame / 0x3) % coinIconIndices.length],
        objTexture = this.resource.getTexture("obj"),
        skinTexture = this.game.skin != undefined ? this.resource.getTexture("skin" + this.game.skin) : objTexture,
        playerInfo = this.game.getPlayerInfo(this.game.pid),
        level;
    undefined !== this.game.levelWarpId ?
        level = this.game.world.getLevel(this.game.levelWarpId)
        : undefined === this.game.startDelta && (level = this.game.world.getInitialLevel());
    this.game.gameOver ? (
        context.fillStyle = "black",
        context.fillRect(0x0, 0x0, canvasWidth, canvasHeight),
        context.fillStyle = "white",
        context.font = "32px SmbWeb",
        context.textAlign = "center",
        context.fillText("GAME OVER", 0.5 * canvasWidth, 0.5 * canvasHeight))
    : level && (
        context.fillStyle = "black",
        context.fillRect(0x0, 0x0, canvasWidth, canvasHeight),
        context.fillStyle = "white",
        context.font = "32px SmbWeb",
        context.textAlign = "center",
        context.fillText(level.name, 0.5 * canvasWidth, 0.5 * canvasHeight),
        0x0 <= this.game.startTimer && (
            context.font = "24px SmbWeb",
            context.textAlign = "center",
            context.fillText("GAME STARTS IN: " + parseInt(this.game.startTimer / 0x1e), 0.5 * canvasWidth, 0.5 * canvasHeight + 0x28)
        )
    );
    var sprite, txt, txtWidth, vectoryTex, vicTexW, vicTexH, scale, vicAnim;
    0x3 >= this.game.victory && 0 !== this.game.victory ? (
        victoryTex = this.resource.getTexture("ui"),
        vicTexW = Math.min(victoryTex.width, canvasWidth),
        vicTexH = parseInt(vicTexW * 0.196),
        context.drawImage(victoryTex, 0.5 * canvasWidth - vicTexW * 0.5, 0, vicTexW, vicTexH),
        scale = vicTexH / victoryTex.height,
        this.game.victory == 1 ? (
            vicAnim = Math.max(195, Math.min(255, this.game.frame % 60 >= 30 ? 255 - parseInt(((this.game.frame % 30)*2)/10)*10 : 195 + parseInt(((this.game.frame % 30)*2)/10)*10)),
            context.fillStyle = "rgba("+ vicAnim +","+ vicAnim +",0,1)"
        ) : this.game.victory == 2 ? (context.fillStyle = "silver") : (context.fillStyle = "#B87333"),
        context.font = parseInt(64 * scale) + "px SmbWeb",
        context.textAlign = "left",
        context.shadowOffsetY = 4,
        context.shadowColor = "rgba(0,0,0,0.3)",
        context.fillText("#" + this.game.victory, 0.5 * canvasWidth - vicTexW * 0.5 + 40 * scale, 60 * scale + 0.5 * vicTexH - 32 * scale),
        context.shadowOffsetY = null,
        context.shadowColor = null,
        context.fillStyle = "white",
        context.font = "24px SmbWeb",
        context.textAlign = "center",
        context.fillText(this.game.world.getLevel(this.game.getPlayer().level).name + " MATCH STATS:", 0.8 * canvasWidth, 0.3 * canvasHeight),
        context.font = "16px SmbWeb",
        context.fillText(this.game.getGameTimer() + " ELAPSED TIME", 0.8 * canvasWidth, 0.3 * canvasHeight + 24),
        context.fillText(this.game.playersKilled + " PLAYERS KILLED", 0.8 * canvasWidth, 0.3 * canvasHeight + 28 + 16),
        context.fillText(this.game.coinsCollected + " COINS COLLECTED", 0.8 * canvasWidth, 0.3 * canvasHeight + 32 + 16 + 16))
    : (0x3 < this.game.victory ? (
        context.fillStyle = "white",
        context.font = "32px SmbWeb",
        context.textAlign = "center",
        context.fillText("TOO BAD #" + this.game.victory, 0.5 * canvasWidth, 0x28))
    : (context.fillStyle = "white",
        context.font = "24px SmbWeb",
        context.textAlign = "left",
        context.fillText(playerInfo ? playerInfo.name : DEFAULT_PLAYER_NAME, 0x8, 0x20),
        sprite = util.sprite.getSprite(objTexture, coinIconIndex),
        txt = 'x' + (0x9 >= this.game.coins ? '0' + this.game.coins : this.game.coins),
        context.drawImage(objTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, 0x4, 0x28, 0x18, 0x18),
        context.fillText(txt, 0x1e, 0x40),
        sprite = util.sprite.getSprite(skinTexture, 0xd),
        txtWidth = context.measureText(txt).width + 0x1e,
        context.drawImage(skinTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, 0x4 + txtWidth + 0x10, 0x28, 0x18, 0x18),
        context.fillText('x' + (0x9 >= this.game.lives ? '0' + this.game.lives : this.game.lives), 0x4 + txtWidth + 0x10 + 0x1a, 0x40),
        this.game instanceof Game ? (
            txt = this.game.getGameTimer(this.game.touchMode),
            txtWidth = context.measureText(txt).width,
            context.fillText(txt, (canvasWidth / 2) - (txtWidth / 2), 0x20),
            txt = this.game.remain + (this.game.touchMode ? '' : " PLAYERS REMAIN"),
            txtWidth = context.measureText(txt).width,
            context.fillText(txt, canvasWidth - txtWidth - 0x8, 0x20))
        : this.game instanceof LobbyGame && (
            txt = this.game.players.length + (this.game.touchMode ? '' : " / 30 PLAYERS"),
            txtWidth = context.measureText(txt).width,
            context.fillText(txt, canvasWidth - txtWidth - 0x8, 0x20)
        ), 
        sprite = util.sprite.getSprite(objTexture, musicIconIndex[this.game.audio.muteMusic ? 0x1 : 0x0]),
        context.drawImage(objTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, canvasWidth - 0x18 - 0x8, 0x28, 0x18, 0x18),
        sprite = util.sprite.getSprite(objTexture, soundIconIndex[this.game.audio.muteSound ? 0x1 : 0x0]),
        context.drawImage(objTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, canvasWidth - 0x18 - 0x8 - 0x18 - 0x8, 0x28, 0x18, 0x18),
        sprite = util.sprite.getSprite(objTexture, nameIconIndex[this.game.disableText ? 0x1 : 0x0]),
        context.drawImage(objTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, canvasWidth - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8, 0x28, 0x18, 0x18),
        this.game.input.pad.connected() && (
            sprite = util.sprite.getSprite(objTexture, 0xf8),
            context.drawImage(objTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, canvasWidth - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8, 0x28, 0x18, 0x18)
        )
    ));
};
Display.prototype.drawTouch = function() {
    if (this.game.touchMode) {
        var _0x5a1070 = this.context,
            _0x15192f = this.canvas.width,
            _0x957a9e = this.canvas.height;
        this.game.thumbOrigin && (_0x5a1070.fillStyle = "rgba(0,0,0,0.5)", _0x5a1070.fillRect(this.game.thumbOrigin.x - 42.5, this.game.thumbOrigin.y - 42.5, 0x55, 0x55), _0x5a1070.fillStyle = "rgba(255,255,255,1.0)", _0x5a1070.fillRect(this.game.thumbPos.x - 32.5, this.game.thumbPos.y - 32.5, 0x41, 0x41));
        _0x5a1070.fillStyle = "rgba(0,0,0,0.5)";
        _0x5a1070.fillRect(_0x15192f - 0x55, _0x957a9e - 0x55, 0x55, 0x55);
        _0x5a1070.fillRect(_0x15192f - 0x55, _0x957a9e - 0xaa, 0x55, 0x55);
        _0x5a1070.fillStyle = this.game.touchRun ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.5)";
        _0x5a1070.fillRect(_0x15192f - 0x55, _0x957a9e - 0xff, 0x55, 0x55);
        _0x5a1070.fillStyle = "white";
        _0x5a1070.font = "65px SmbWeb";
        _0x5a1070.textAlign = "left";
        var _0x8a9ba4 = 'A',
            _0x8278d8 = _0x5a1070.measureText(_0x8a9ba4).width;
        _0x5a1070.fillText(_0x8a9ba4, _0x15192f - _0x8278d8 - 0xa, _0x957a9e - 0xa);
        _0x8a9ba4 = 'B';
        _0x8278d8 = _0x5a1070.measureText(_0x8a9ba4).width;
        _0x5a1070.fillText(_0x8a9ba4, _0x15192f - _0x8278d8 - 7.5, _0x957a9e - 0x55 - 0xa);
        _0x5a1070.fillStyle = this.game.touchRun ? "black" : "white";
        _0x8a9ba4 = 'R';
        _0x8278d8 = _0x5a1070.measureText(_0x8a9ba4).width;
        _0x5a1070.fillText(_0x8a9ba4, _0x15192f - _0x8278d8 - 7.5, _0x957a9e - 0xaa - 0xa);
    }
};
Display.prototype.drawLoad = function() {
    var _0x37f267 = this.context,
        _0x8de60e = this.canvas.width,
        _0x131b2f = this.canvas.height;
    _0x37f267.fillStyle = "black";
    _0x37f267.fillRect(0x0, 0x0, _0x8de60e, _0x131b2f);
    _0x37f267.font = "32px SmbWeb";
    _0x37f267.fillStyle = "white";
    _0x37f267.textAlign = "center";
    _0x37f267.fillText("Loading Resources...", 0.5 * _0x8de60e, 0.5 * _0x131b2f);
};
Display.prototype.destroy = function() {};
"use strict";

function World(_0x4cda29, _0x46f74e) {
    this.game = _0x4cda29;
    this.initial = _0x46f74e.initial;
    this.levels = [];
    for (var _0x5678fd = 0x0; _0x5678fd < _0x46f74e.world.length; _0x5678fd++) this.levels.push(new Level(_0x4cda29, _0x46f74e.world[_0x5678fd]));
}
World.prototype.step = function() {
    for (var _0x1351b3 = 0x0; _0x1351b3 < this.levels.length; _0x1351b3++) this.levels[_0x1351b3].step();
};
World.prototype.getInitialLevel = function() {
    return this.getLevel(this.initial);
};
World.prototype.getInitialZone = function() {
    var _0x2b561d = this.getLevel(this.initial);
    return this.getZone(_0x2b561d.id, _0x2b561d.initial);
};
World.prototype.getLevel = function(_0x444ae4) {
    for (var _0x46de22 = 0x0; _0x46de22 < this.levels.length; _0x46de22++) {
        var _0x8a2d62 = this.levels[_0x46de22];
        if (_0x8a2d62.id === _0x444ae4) return _0x8a2d62;
    }
};
World.prototype.getZone = function(_0x525a15, _0x36f94d) {
    for (var _0x4ae1ed = 0x0; _0x4ae1ed < this.levels.length; _0x4ae1ed++) {
        var _0x5282f6 = this.levels[_0x4ae1ed];
        if (_0x5282f6.id === _0x525a15)
            for (var _0x5102b4 = 0x0; _0x5102b4 < _0x5282f6.zones.length; _0x5102b4++) {
                var _0x1308b7 = _0x5282f6.zones[_0x5102b4];
                if (_0x1308b7.id === _0x36f94d) return _0x1308b7;
            }
    }
};

function Level(_0xc37451, _0xf21ec7) {
    this.game = _0xc37451;
    this.id = _0xf21ec7.id;
    this.name = _0xf21ec7.name;
    this.initial = _0xf21ec7.initial;
    this.zones = [];
    for (var _0x344d78 = 0x0; _0x344d78 < _0xf21ec7.zone.length; _0x344d78++) this.zones.push(new Zone(_0xc37451, this.id, _0xf21ec7.zone[_0x344d78]));
}
Level.prototype.step = function() {
    for (var _0x5d732a = 0x0; _0x5d732a < this.zones.length; _0x5d732a++) this.zones[_0x5d732a].step();
};
Level.prototype.getInitial = function() {
    for (var _0x42edaf = 0x0; _0x42edaf < this.zones.length; _0x42edaf++) {
        var _0x2a836d = this.zones[_0x42edaf];
        if (_0x2a836d.id === this.initial) return _0x2a836d;
    }
};
Level.prototype.getWarp = function(_0x35fc72) {
    for (var _0x4295f4 = 0x0; _0x4295f4 < this.zones.length; _0x4295f4++)
        for (var _0x1ed606 = this.zones[_0x4295f4], _0x891844 = 0x0; _0x891844 < _0x1ed606.warp.length; _0x891844++) {
            var _0x5c0899 = _0x1ed606.warp[_0x891844];
            if (_0x5c0899.id === _0x35fc72) return {
                'level': this.id,
                'zone': _0x1ed606.id,
                'pos': shor2.decode(_0x5c0899.pos),
                'data': _0x5c0899.data
            };
        }
};

function Zone(_0x4ec59c, _0x22aa6b, _0x42b6c1) {
    this.game = _0x4ec59c;
    this.id = _0x42b6c1.id;
    this.level = _0x22aa6b;
    this.initial = _0x42b6c1.initial;
    this.color = _0x42b6c1.color;
    this.music = _0x42b6c1.music ? _0x42b6c1.music : '';
    this.data = _0x42b6c1.data;
    this.obj = _0x42b6c1.obj;
    this.warp = _0x42b6c1.warp;
    this.bumped = [];
    this.effects = [];
    this.vines = [];
    this.sounds = [];
}
Zone.prototype.update = function(_0x56c974, _0x203ebe, _0x453702, _0x9efab7, _0x1f768e, _0x1478c6, _0x16a842) {
    var _0x14b697 = this.dimensions().y - 0x1 - _0x1478c6,
        _0x14b697 = td32.decode(this.data[_0x14b697][_0x1f768e]);
    _0x14b697.definition.TRIGGER(_0x56c974, _0x203ebe, _0x14b697, _0x453702, _0x9efab7, _0x1f768e, _0x1478c6, _0x16a842);
};
Zone.prototype.step = function() {
    for (var _0x4a391d = 0x0; _0x4a391d < this.bumped.length; _0x4a391d++) {
        var _0x4b09c3 = this.bumped[_0x4a391d],
            _0x2c42b4 = td32.decode(this.data[_0x4b09c3.y][_0x4b09c3.x]);
        0x0 < _0x2c42b4.bump ? this.data[_0x4b09c3.y][_0x4b09c3.x] = td32.bump(this.data[_0x4b09c3.y][_0x4b09c3.x], _0x2c42b4.bump - 0x1) : this.bumped.splice(_0x4a391d--, 0x1);
    }
    for (_0x4a391d = 0x0; _0x4a391d < this.effects.length; _0x4a391d++) _0x4b09c3 = this.effects[_0x4a391d], _0x4b09c3.garbage ? this.effects.splice(_0x4a391d--, 0x1) : _0x4b09c3.step();
    for (_0x4a391d = 0x0; _0x4a391d < this.vines.length; _0x4a391d++) _0x4b09c3 = this.vines[_0x4a391d], 0x0 > _0x4b09c3.y ? this.vines.splice(_0x4a391d--, 0x1) : this.data[_0x4b09c3.y--][_0x4b09c3.x] = _0x4b09c3.td;
    for (_0x4a391d = 0x0; _0x4a391d < this.sounds.length; _0x4a391d++) this.sounds[_0x4a391d].done() && this.sounds.splice(_0x4a391d--, 0x1);
    td32.update(this.game);
};
Zone.prototype.tile = function(_0x3d68a7, _0x43d1f3) {
    _0x43d1f3 = this.dimensions().y - 0x1 - _0x43d1f3;
    return this.data[_0x43d1f3][_0x3d68a7];
};
Zone.prototype.bump = function(_0x711a6b, _0x38eb82) {
    var _0x9935da = this.dimensions().y - 0x1 - _0x38eb82;
    this.data[_0x9935da][_0x711a6b] = td32.bump(this.data[_0x9935da][_0x711a6b], 0xf);
    this.bumped.push({
        'x': _0x711a6b,
        'y': _0x9935da
    });
    this.play(_0x711a6b, _0x38eb82, "sfx/bump.wav", 0.5, 0.04);
};
Zone.prototype.replace = function(_0x139748, _0x19c939, _0x2533dc) {
    _0x19c939 = this.dimensions().y - 0x1 - _0x19c939;
    this.data[_0x19c939][_0x139748] = _0x2533dc;
};
Zone.prototype.grow = function(_0x34397d, _0x27a117, _0x5e09da) {
    _0x27a117 = this.dimensions().y - 0x1 - _0x27a117;
    this.vines.push({
        'x': _0x34397d,
        'y': _0x27a117,
        'td': _0x5e09da
    });
};
Zone.prototype.break = function(_0x4aded4, _0x3d82ec, _0x544718) {
    var _0x415636 = this.dimensions().y - 0x1 - _0x3d82ec,
        _0x1aa33b = td32.decode16(this.data[_0x415636][_0x4aded4]);
    this.data[_0x415636][_0x4aded4] = _0x544718;
    this.effects.push(new _0x5296e0(vec2.make(_0x4aded4, _0x3d82ec), _0x1aa33b.index));
    this.play(_0x4aded4, _0x3d82ec, "sfx/break.wav", 1.5, 0.04);
};
Zone.prototype.coin = function(_0x18c8cf, _0x32068f) {
    this.dimensions();
    this.effects.push(new _0x108200(vec2.make(_0x18c8cf, _0x32068f)));
};
Zone.prototype.play = function(_0x2b2620, _0xc0aea9, _0x4929f8, _0x50094d, _0x1de44d) {
    this.game.getZone() === this && (_0x4929f8 = this.game.audio.getSpatialAudio(_0x4929f8, _0x50094d, _0x1de44d, "effect"), _0x4929f8.play(vec2.make(_0x2b2620, _0xc0aea9)), this.sounds.push(_0x4929f8));
};
Zone.prototype.dimensions = function() {
    return vec2.make(this.data[0x0].length, this.data.length);
};
Zone.prototype.getTile = function(_0x5712b7) {
    var _0x5eee6f = this.dimensions();
    _0x5712b7 = vec2.copy(_0x5712b7);
    _0x5712b7.y = _0x5eee6f.y - _0x5712b7.y - 0x1;
    return td32.decode(this.data[Math.max(0x0, Math.min(_0x5eee6f.y, Math.floor(_0x5712b7.y)))][Math.max(0x0, Math.min(_0x5eee6f.x, Math.floor(_0x5712b7.x)))]);
};
Zone.prototype.getTiles = function(_0x3ce841, _0x4afc27) {
    var _0x525d97 = this.dimensions(),
        _0x51d112 = vec2.copy(_0x3ce841);
    _0x51d112.y = _0x525d97.y - _0x51d112.y;
    _0x3ce841 = parseInt(Math.max(Math.min(Math.floor(_0x51d112.x) - 0x1, _0x525d97.x), 0x0));
    var _0x5daf64 = parseInt(Math.max(Math.min(Math.ceil(_0x51d112.x + _0x4afc27.x) + 0x1, _0x525d97.x), 0x0)),
        _0x5f4edb = parseInt(Math.max(Math.min(Math.floor(_0x51d112.y - _0x4afc27.y) - 0x1, _0x525d97.y), 0x0));
    _0x4afc27 = parseInt(Math.max(Math.min(Math.ceil(_0x51d112.y) + 0x1, _0x525d97.y), 0x0));
    for (_0x51d112 = []; _0x5f4edb < _0x4afc27; _0x5f4edb++)
        for (var _0x5e6b1b = _0x3ce841; _0x5e6b1b < _0x5daf64; _0x5e6b1b++) {
            var _0x556c14 = td32.decode(this.data[_0x5f4edb][_0x5e6b1b]);
            _0x556c14.pos = vec2.make(_0x5e6b1b, _0x525d97.y - 0x1 - _0x5f4edb);
            _0x556c14.ind = [_0x5f4edb, _0x5e6b1b];
            _0x51d112.push(_0x556c14);
        }
    return _0x51d112;
};
Zone.prototype.getEffects = function(_0x28bee8) {
    for (var _0x559764 = 0x0; _0x559764 < this.effects.length; _0x559764++) this.effects[_0x559764].draw(_0x28bee8);
};
"use strict";

function Game(data) {
    document.getElementById("privLobby").style.display = "none";
    this.container = document.getElementById("game");
    this.canvas = document.getElementById("game-canvas");
    this.input = new _0x2406bb(this, this.canvas);
    this.display = new Display(this, this.container, this.canvas, data.resource);
    this.audio = new Audio(this);
    if (!(this instanceof LobbyGame) && !(this instanceof JailGame) && app.charMusic && app.net.skin in SKIN_MUSIC_URL) {
        this.audio.muteMusic = true;
    }
    this.objects = [];
    this.team = this.pid = undefined;
    this.players = [];
    this.sounds = [];
    this.load(data);
    this.lastDraw = this.frame = 0x0;
    this.delta = util.time.now();
    this.buffer = [
        [],
        []
    ];
    this.out = [];
    this.ready = !0x1;
    this.startTimer = -0x1;
    this.touchFull = this.touchMode = !0x1;
    this.thumbPos = this.thumbOrigin = this.thumbId = undefined;
    this.touchRun = !0x1;
    this.fillSS = this.cullSS = undefined;
    this.disableText = 0x1 === parseInt(Cookies.get("text"));
    this.victory = this.coins = this.lives = this.remain = 0x0;
    this.victoryMusic = !0x1;
    this.gameOverTimer = this.rate = 0x0;
    this.gameOver = !0x1;
    var zoneSize = this.getZone().dimensions();
    this.display.camera.position(vec2.scale(zoneSize, 0.5));
    this.levelWarpTimer = 0x0;
    this.levelWarpId = undefined;
    this.gameoverReloading = false;
    this.padReturnToLobby = false;
    this.playersKilled = 0;
    this.coinsCollected = 0;
    this.gameTimerStopped = null;
    this.gameTimerStopTime = 0;
    this.poleTimes = 0;
    var that = this;
    this.frameReq = requestAnimFrameFunc.call(window, function() {
        that.draw();
    });
    this.loopReq = setTimeout(function() {
        that.loop();
    }, 2);
}

Game.TICK_RATE = 0x21;
Game.FDLC_TARGET = 0x3;
Game.FDLC_MAX = Game.FDLC_TARGET + 0x2;

Game.LEVEL_WARP_TIME = 0x64;
Game.GAME_OVER_TIME = 120;

Game.COINS_TO_LIFE = 0x1e;

Game.prototype.load = function(data) {
    app.menu.load.show();

    /* Load world data */
    this.world = new World(this, data);

    /* Spawn objects from world obj params */
    for (var i=0;i<this.world.levels.length;i++) {
        var lvl = this.world.levels[i];
        for (var j=0;j<lvl.zones.length;j++) {
            var zn = lvl.zones[j];
            for (var k=0;k<zn.obj.length;k++) {
                var obj = zn.obj[k];
                var pgen = [obj.pos]; // obj.pos here is a shor2, we use it as the oid for this object
                for (var l=0;l<obj.param.length;l++) { pgen.push(obj.param[l]); }
                this.createObject(obj.type, lvl.id, zn.id, shor2.decode(obj.pos), pgen)
            }
        }
    }
};

/* Immediately sends a json packet */
Game.prototype.send = function(packet) {
    app.net.send(packet);
};

/* Returns false if the packet is not of a type that we know how to handle */
Game.prototype.handlePacket = function(packet) {
    /* Parse packet and apply */
    switch(packet.type) {
        /* Ingame Type Packets gxx */
        case "g12" : { this.updatePlayerList(packet); return true; }
        case "g13" : { this.gameStartTimer(packet); return true; }
        /* Input Type Packets ixx */
        default : { return false; }
    }
};

/* G12 */
Game.prototype.updatePlayerList = function(packet) {
    this.players = packet.players;
    if(undefined === this.pid) { return; }
    this.updateTeam();
};

Game.prototype.getGameTimer = function(compact) {
    if (this.gameTimerStopped !== null) return this.gameTimerStopped;
    if (this.startDelta === undefined) return compact ? "00:00" : "00:00:000";
    var now = util.time.now() - this.poleTimes; // get the time now minus the poleTimes
    var diff = now - this.startDelta; // diff in seconds between now and start
    var m = Math.floor(diff / 60000); // get minutes value
    var s = Math.floor(diff / 1000) % 60; // get seconds value
	var ms = diff % 1000; // get milliseconds value
    if (m < 10) m = "0" + m; // add a leading zero if it's single digit
    if (s < 10) s = "0" + s; // add a leading zero if it's single digit
    if (ms < 10) ms = "00" + ms; // add two leadings zeros if it's single digit
    else if (ms < 100) ms = "0" + ms; // add a leading zero if it's double digit
    return m + ":" + s + (compact ? '' : (":" + ms));
}

Game.prototype.resumeGameTimer = function() {
    if (this.gameTimerStopped === null) return;
    this.gameTimerStopped = null;
    this.poleTimes += util.time.now() - this.gameTimerStopTime;
}

Game.prototype.stopGameTimer = function() {
    if (this.gameTimerStopped !== null) return;
    this.gameTimerStopped = this.getGameTimer();
    this.gameTimerStopTime = util.time.now();
}

/* G13 */
Game.prototype.gameStartTimer = function(packet) {
    if(this.startTimer < 0) { this.play("sfx/alert.wav",1.,0.); }
    if(packet.time > 0) { this.startTimer = packet.time; this.remain = this.players.length; }
    else { this.doStart(); }
};

Game.prototype.updateTeam = function() {
    var playerInfo = this.getPlayerInfo(this.pid);
    if(undefined === playerInfo) { return; }
    if (this.team = playerInfo.team)
        for (var _0x1f801c = 0x0; _0x1f801c < this.players.length; _0x1f801c++) {
            var _0x1d518b = this.players[_0x1f801c];
            if (_0x1d518b.id !== this.pid && _0x1d518b.team === this.team) {
                var _0x249619 = this.getGhost(_0x1d518b.id);
                _0x249619 && (_0x249619.name = _0x1d518b.name);
            }
        }
};

Game.prototype.handleBinary = function(data) {
    var de = NETX.decode(data);

    if(!this.ready) { this.doUpdate(de); return; }
    this.updatePacket(de);
};

Game.prototype.updatePacket = function(data) {
    this.buffer.push(data);
    while(this.buffer.length > Game.FDLC_MAX) {
        var d = this.buffer.shift();
        this.doUpdate(d);
    }
};

Game.prototype.doUpdate = function(data) {
    for(var i=0;i<data.length;i++) {
        var n = data[i];
        switch(n.designation) {
            case 0x02 : { this.doNET002(n); break; }
            case 0x10 : { this.doNET010(n); break; }
            case 0x11 : { this.doNET011(n); break; }
            case 0x12 : { this.doNET012(n); break; }
            case 0x13 : { this.doNET013(n); break; }
            case 0x17 : { this.doNET017(n); break; }
            case 0x18 : { this.doNET018(n); break; }
            case 0x20 : { this.doNET020(n); break; }
            case 0x30 : { this.doNET030(n); break; }
        }
    }
};

/* ASSIGN_PID [0x02] */
Game.prototype.doNET002 = function(n) {
    this.pid = n.pid;
    this.skin = n.skin;
    this.ready = true;
    app.menu.game.show();
};

/* CREATE_PLAYER_OBJECT [0x10] */
Game.prototype.doNET010 = function(n) {
    if(n.pid === this.pid) { return; }
    var obj = this.createObject(PlayerObject.ID, n.level, n.zone, shor2.decode(n.pos), [n.pid, n.skin]);
    obj.setState(PlayerObject.SNAME.GHOST);
    // TODO: Deobfuscate this part
    var _0x48cbe4;
    this.team && (_0x48cbe4 = this.getPlayerInfo(n.pid)) && _0x48cbe4.id !== this.pid && _0x48cbe4.team === this.team && (_0x5c28cd = this.getGhost(_0x48cbe4.id)) && (_0x5c28cd.name = _0x48cbe4.name);
};

Game.prototype.doNET011 = function(n) {
    n.pid !== this.pid && ((n = this.getGhost(n.pid)) && n.kill(), this.remain = this.getRemain());
};

Game.prototype.doNET012 = function(_0x4eb1fd) {
    if (_0x4eb1fd.pid !== this.pid) {
        var _0x498b38 = this.getGhost(_0x4eb1fd.pid);
        _0x498b38 && _0x498b38.update(_0x4eb1fd);
    }
};

Game.prototype.doNET013 = function(_0x3c0ee3) {
    _0x3c0ee3.pid !== this.pid && this.getGhost(_0x3c0ee3.pid).trigger(_0x3c0ee3.type);
};

Game.prototype.doNET017 = function(_0x17186e) {
    this.playersKilled++;
    _0x17186e = Cookies.get("heated_gamer_moments");
    !app.net.isPrivate && Cookies.set("heated_gamer_moments", _0x17186e ? parseInt(_0x17186e) + 0x1 : 0x1, {
        'expires': 0x16d
    });
};

Game.prototype.doNET018 = function(_0xb678cc) {
    if (!(0x0 >= _0xb678cc.result)) {
        _0xb678cc.pid === this.pid ? this.rate = _0xb678cc.extra : 0x0 !== this.rate && _0xb678cc.result++;
        var _0x11f856 = this.getGhost(_0xb678cc.pid);
        if (_0x11f856 && (_0x11f856 = this.getText(_0x11f856.level, _0x11f856.zone, _0xb678cc.result.toString()))) {
            var _0x36fadc = this.getPlayerInfo(_0xb678cc.pid).name;
            this.createObject(_0x3db18a.ID, _0x11f856.level, _0x11f856.zone, vec2.add(_0x11f856.pos, vec2.make(0x0, -0x3)), [undefined, -0.1, 0.25, "#FFFFFF", _0x36fadc]);
        }
        if (_0xb678cc.pid === this.pid && (_0x11f856 = this.getPlayer())) {
            _0x11f856.axe(_0xb678cc.result);
            this.victory = _0xb678cc.result;
            0x1 === _0xb678cc.result && (_0xb678cc = Cookies.get("epic_gamer_moments"), !app.net.isPrivate && Cookies.set("epic_gamer_moments", _0xb678cc ? parseInt(_0xb678cc) + 0x1 : 0x1, {
                'expires': 0x16d
            }));
            var that = this;
            setTimeout(function() {
                document.getElementById('return').style.display = "block";
                that.padReturnToLobby = true;
            }, 3000);
        }
    }
};

Game.prototype.doNET020 = function(_0x279410) {
    if (!(_0x279410.pid === this.pid && 0xa0 > _0x279410.type)) {
        var _0x3f57fe = this.getObject(_0x279410.level, _0x279410.zone, _0x279410.oid);
        _0x3f57fe && _0x3f57fe.update(_0x279410.type);
    }
};

Game.prototype.doNET030 = function(_0x31e1c0) {
    _0x31e1c0.pid !== this.pid && this.world.getZone(_0x31e1c0.level, _0x31e1c0.zone).update(this, _0x31e1c0.pid, _0x31e1c0.level, _0x31e1c0.zone, _0x31e1c0.pos.x, _0x31e1c0.pos.y, _0x31e1c0.type);
};

Game.prototype.doStart = function() {
    this.startTimer = -0x1;
    this.startDelta = util.time.now();
    this.doSpawn();
};

Game.prototype.doDetermine = function() {
    var _0xfab5c9 = this.input.pop();
    0x0 < _0xfab5c9.touch.length ? this.touchMode = !0x0 : 0x0 < _0xfab5c9.keyboard.length && (this.touchMode = !0x1);
    this.touchMode ? this.doTouch(_0xfab5c9) : this.doInput(_0xfab5c9);
};

Game.prototype.doTouch = function(_0x52fc25) {
    var _0x258db7 = this.input,
        _0x330893 = this.getPlayer();
    this.display.camera.scale = 0x2;
    if (!this.touchFull || window.innerHeight != screen.height) {
        var _0x597311 = document.documentElement;
        _0x597311.requestFullscreen ? document.body.requestFullscreen() : _0x597311.mozRequestFullScreen ? _0x597311.mozRequestFullScreen() : _0x597311.webkitRequestFullscreen ? _0x597311.webkitRequestFullscreen() : _0x597311.msRequestFullscreen && _0x597311.msRequestFullscreen();
        this.touchFull = !0x0;
    }
    for (var _0x1429a6 = this, _0x597311 = this.display.canvas.width, _0x174be8 = this.display.canvas.height, _0x1e64f1 = !0x1, _0x34471a = !0x1, _0x597311 = [{
            'pos': vec2.make(_0x597311 - 0x55, _0x174be8 - 0x55),
            'dim': vec2.make(0x55, 0x55),
            'press': function() {
                _0x1e64f1 = !0x0;
            }
        }, {
            'pos': vec2.make(_0x597311 - 0x55, _0x174be8 - 0xaa),
            'dim': vec2.make(0x55, 0x55),
            'press': function() {
                _0x34471a = !0x0;
            }
        }, {
            'pos': vec2.make(_0x597311 - 0x55, _0x174be8 - 0xff),
            'dim': vec2.make(0x55, 0x55),
            'click': function() {
                _0x1429a6.touchRun = !_0x1429a6.touchRun;
            }
        }, {
            'pos': vec2.make(_0x597311 - 0x18 - 0x8, 0x28),
            'dim': vec2.make(0x18, 0x18),
            'click': function() {
                _0x1429a6.audio.muteMusic = !_0x1429a6.audio.muteMusic;
                if (app.audioElement !== undefined)
                    if (_0x1429a6.audio.muteMusic)
                        app.audioElement.pause();
                    else
                        app.audioElement.play();
                _0x1429a6.audio.saveSettings();
            }
        }, {
            'pos': vec2.make(_0x597311 - 0x18 - 0x8 - 0x18 - 0x8, 0x28),
            'dim': vec2.make(0x18, 0x18),
            'click': function() {
                _0x1429a6.audio.muteSound = !_0x1429a6.audio.muteSound;
                _0x1429a6.audio.saveSettings();
            }
        }, {
            'pos': vec2.make(_0x597311 - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8, 0x28),
            'dim': vec2.make(0x18, 0x18),
            'click': function() {
                this.disableText = !this.disableText;
                Cookies.set("text", _0x1429a6.disableText ? 0x1 : 0x0, {
                    'expires': 0x1e
                });
            }
        }, {
            'pos': vec2.make(_0x597311 - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8, 0x28),
            'dim': vec2.make(0x18, 0x18),
            'click': function() {
                app.net.send({
                    'code': (location.search.split('mcode=')[1] || '').split('&')[0],
                    'type': "g51"
                });
            }
        }], _0x3308c9, _0x174be8 = 0x0; _0x174be8 < _0x258db7.touch.pos.length; _0x174be8++) {
        var _0x182f56 = _0x258db7.touch.pos[_0x174be8];
        if (this.thumbId === _0x182f56.id) _0x3308c9 = _0x182f56, this.thumbId = _0x182f56.id, this.thumbPos = _0x182f56;
        else
            for (_0x174be8 = 0x0; _0x174be8 < _0x597311.length; _0x174be8++) {
                var _0x287903 = _0x597311[_0x174be8];
                squar.inside(_0x182f56, _0x287903.pos, _0x287903.dim) && _0x287903.press && _0x287903.press();
            }
    }
    for (_0x174be8 = 0x0; _0x174be8 < _0x52fc25.touch.length; _0x174be8++) {
        _0x182f56 = _0x52fc25.touch[_0x174be8];
        _0x258db7 = !0x1;
        for (_0x174be8 = 0x0; _0x174be8 < _0x597311.length; _0x174be8++)
            if (_0x287903 = _0x597311[_0x174be8], squar.inside(_0x182f56, _0x287903.pos, _0x287903.dim)) {
                _0x258db7 = !0x0;
                _0x287903.click && _0x287903.click();
                break;
            } _0x3308c9 || _0x258db7 || (_0x3308c9 = _0x182f56, this.thumbId = _0x182f56.id, this.thumbPos = this.thumbOrigin = _0x182f56);
    }
    var _0x36041a;
    if (_0x3308c9) {
        _0x52fc25 = Math.min(0x40, vec2.distance(this.thumbPos, this.thumbOrigin));
        var _0x3d0185 = vec2.normalize(vec2.subtract(this.thumbPos, this.thumbOrigin));
        _0x36041a = vec2.scale(_0x3d0185, _0x52fc25 / 0x40);
        this.thumbPos = vec2.add(this.thumbOrigin, vec2.scale(_0x3d0185, _0x52fc25));
    } else this.thumbPos = this.thumbOrigin = this.thumbId = undefined;
    _0x330893 && _0x3d0185 ? (_0x3d0185 = [0x0, 0x0], 0.33 < _0x36041a.x && _0x3d0185[0x0]++, -0.33 > _0x36041a.x && _0x3d0185[0x0]--, 0.33 < _0x36041a.y && _0x3d0185[0x1]--, -0.33 > _0x36041a.y && _0x3d0185[0x1]++, _0x330893.input(_0x3d0185, _0x1e64f1, this.touchRun ? !_0x34471a : _0x34471a)) : _0x330893 && _0x330893.input([0x0, 0x0], _0x1e64f1, this.touchRun ? !_0x34471a : _0x34471a);
};

Game.prototype.doInput = function(_0x585e08) {
    this.input.pad.update();
    var _0xa25dbe = this.input,
        _0x42b147 = this.input.mouse,
        _0x136d36 = this.input.keyboard.keys,
        _0x2ffe7f = this.input.pad;
    this.inx27 = _0x136d36[0x1b];
    var _0x5b7c6b = this.getPlayer();
    if (_0x5b7c6b) {
        var _0x133972 = [0x0, 0x0];
        (_0x136d36[_0xa25dbe.assignK.up] || _0x2ffe7f.button(_0xa25dbe.assignG.up) || -0.1 > _0x2ffe7f.ax.y) && _0x133972[0x1]++;
        (_0x136d36[_0xa25dbe.assignK.down] || _0x2ffe7f.button(_0xa25dbe.assignG.down) || 0.1 < _0x2ffe7f.ax.y) && _0x133972[0x1]--;
        (_0x136d36[_0xa25dbe.assignK.left] || _0x2ffe7f.button(_0xa25dbe.assignG.left) || -0.1 > _0x2ffe7f.ax.x) && _0x133972[0x0]--;
        (_0x136d36[_0xa25dbe.assignK.right] || _0x2ffe7f.button(_0xa25dbe.assignG.right) || 0.1 < _0x2ffe7f.ax.x) && _0x133972[0x0]++;
        var _0x306656 = _0x136d36[_0xa25dbe.assignK.a] || _0x2ffe7f.button(_0xa25dbe.assignG.a),
            _0xa25dbe = _0x136d36[_0xa25dbe.assignK.b] || _0x2ffe7f.button(_0xa25dbe.assignG.b);
        _0x42b147.spin && this.display.camera.zoom(_0x42b147.spin);
        if (this.padReturnToLobby && _0x306656) {
            Cookies.set("go_to_lobby", "1");
            location.reload();
            this.padReturnToLobby = false;
        }
        _0x5b7c6b.input(_0x133972, _0x306656, _0xa25dbe);
        for (var _0x533a33 = this, _0xa25dbe = this.display.canvas.width, _0x42b147 = [{
                'pos': vec2.make(_0xa25dbe - 0x18 - 0x8, 0x28),
                'dim': vec2.make(0x18, 0x18),
                'click': function() {
                    _0x533a33.audio.muteMusic = !_0x533a33.audio.muteMusic;
                    if (app.audioElement !== undefined)
                        if (_0x533a33.audio.muteMusic)
                            app.audioElement.pause();
                        else
                            app.audioElement.play();
                    _0x533a33.audio.saveSettings();
                }
            }, {
                'pos': vec2.make(_0xa25dbe - 0x18 - 0x8 - 0x18 - 0x8, 0x28),
                'dim': vec2.make(0x18, 0x18),
                'click': function() {
                    _0x533a33.audio.muteSound = !_0x533a33.audio.muteSound;
                    _0x533a33.audio.saveSettings();
                }
            }, {
                'pos': vec2.make(_0xa25dbe - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8, 0x28),
                'dim': vec2.make(0x18, 0x18),
                'click': function() {
                    _0x533a33.disableText = !_0x533a33.disableText;
                    Cookies.set("text", _0x533a33.disableText ? 0x1 : 0x0, {
                        'expires': 0x1e
                    });
                }
            }, {
                'pos': vec2.make(_0xa25dbe - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8, 0x28),
                'dim': vec2.make(0x18, 0x18),
                'click': function() {
                    app.net.send({
                        'code': (location.search.split('mcode=')[1] || '').split('&')[0],
                        'type': "g51"
                    });
                }
            }], _0x5b7c6b = 0x0; _0x5b7c6b < _0x585e08.mouse.length; _0x5b7c6b++)
            for (_0x133972 = _0x585e08.mouse[_0x5b7c6b], _0x306656 = 0x0; _0x306656 < _0x42b147.length; _0x306656++) _0xa25dbe = _0x42b147[_0x306656], 0x0 === _0x133972.btn && squar.inside(_0x133972.pos, _0xa25dbe.pos, _0xa25dbe.dim) && _0xa25dbe.click();
    }
};

Game.prototype.doStep = function() {
    var _0x504fb1 = this.getPlayer();
    if (_0x504fb1 && undefined !== this.levelWarpId && 0x0 < this.levelWarpTimer && 0x1 > --this.levelWarpTimer) {
        var _0x427bdb = this.world.getLevel(this.levelWarpId).getInitial();
        _0x504fb1.level = _0x427bdb.level;
        _0x504fb1.zone = _0x427bdb.id;
        _0x504fb1.pos = shor2.decode(_0x427bdb.initial);
        _0x504fb1.autoTarget = undefined;
        _0x504fb1.grounded = !0x1;
        _0x504fb1.show();
        _0x504fb1.invuln();
        this.levelWarpId = undefined;
        this.resumeGameTimer();
    }
    _0x504fb1 && this.cullSS && !vec2.equals(_0x504fb1.pos, this.cullSS) && this.out.push(NET015.encode());
    _0x504fb1 && this.fillSS && this.fillSS !== _0x504fb1.fallSpeed && this.out.push(NET015.encode());
    for (_0x427bdb = 0x0; _0x427bdb < this.objects.length; _0x427bdb++) {
        var _0x617df4 = this.objects[_0x427bdb];
        _0x617df4.step();
        _0x617df4.garbage && this.objects.splice(_0x427bdb--, 0x1);
    }
    this.cullSS = _0x504fb1 ? vec2.copy(_0x504fb1.pos) : undefined;
    this.fillSS = _0x504fb1 ? _0x504fb1.fallSpeed : undefined;
    _0x427bdb = this.getZone();
    _0x504fb1 && !_0x504fb1.dead && this.display.camera.position(vec2.make(_0x504fb1.pos.x, 0.5 * _0x427bdb.dimensions().y));
    this.world.step();
    for (_0x427bdb = 0x0; _0x427bdb < this.sounds.length; _0x427bdb++) this.sounds[_0x427bdb].done() && this.sounds.splice(_0x427bdb--, 0x1);
    this.doMusic();
    this.audio.update();
    undefined === this.startDelta || this.gameOver || _0x504fb1 ? this.gameOver ? ++this.gameOverTimer > Game.GAME_OVER_TIME && /*gameClient.close()*/!this.gameoverReloading && !(this.game instanceof JailGame) && (Cookies.set("go_to_lobby", "1"),location.reload(),this.gameoverReloading=true) : this.gameOverTimer = 0x0 : 0x0 < this.lives && 0x0 >= this.victory ? (_0x504fb1 = this.getZone().level, this.doSpawn(), this.levelWarp(_0x504fb1), this.lives--) : 0x2d < ++this.gameOverTimer && (this.gameOver = !0x0, this.gameOverTimer = 0x0);
    this.lastDraw = this.frame;
    this.frame++;
};

Game.prototype.doSpawn = function() {
    if (!this.getPlayer()) {
        var zone = this.getZone(),
            initial = zone.initial;
        var obj = this.createObject(PlayerObject.ID, zone.level, zone.id, shor2.decode(initial), [this.pid, this.skin]);
        this.out.push(NET010.encode(zone.level, zone, initial));
        if (app.net.gameMode === 1 && !(this instanceof LobbyGame) && !(this instanceof JailGame)) {
            obj.tfm(0x2);
            obj.rate = 0x71;
        }
    }
    this.updateTeam();
};

Game.prototype.doMusic = function() {
    var _0x1844d9 = this.getPlayer(),
        _0x180f62 = this.getZone();
    this.gameOver ? this.audio.setMusic("music/gameover.mp3", !0x1) : _0x1844d9 && _0x1844d9.dead ? this.audio.setMusic("music/dead.mp3", !0x1) : _0x1844d9 && _0x1844d9.autoTarget && 0x0 >= this.victory ? this.audio.setMusic("music/level.mp3", !0x1) : 0x0 < this.victory && !this.victoryMusic ? (this.audio.setMusic("music/castle.mp3", !0x1), this.victoryMusic = !0x0) : 0x0 < this.victory && 0x4 > this.victory && this.victoryMusic && !this.audio.music.playing ? this.audio.setMusic("music/victory.mp3", !0x1) : _0x1844d9 && 0x0 >= this.levelWarpTimer && undefined !== this.startDelta && !this.victoryMusic && ('' !== _0x180f62.music ? this.audio.setMusic(_0x180f62.music, !0x0) : this.audio.stopMusic());
};

Game.prototype.doPush = function() {
    var _0x47ddfe = this.getPlayer();
    _0x47ddfe && !_0x47ddfe.dead && this.out.push(NET012.encode(_0x47ddfe.level, _0x47ddfe.zone, _0x47ddfe.pos, _0x47ddfe.sprite.ID, _0x47ddfe.reverse));
    _0x47ddfe = MERGE_BYTE(this.out);
    this.out = [];
    app.net.sendBinary(_0x47ddfe);
};

Game.prototype.createObject = function(id, level, zoneId, pos, extraArgs) {
    var args = [undefined, this, level, zoneId, pos];
    for (var i = 0x0; i < extraArgs.length; i++) args.push(extraArgs[i]);
    GameObject.OBJECT(id);
    var object = new(Function.prototype.bind.apply(GameObject.OBJECT(id), args))();
    this.objects.push(object);
    return object;
};

Game.prototype.getObject = function(level, zone, oid) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (undefined !== obj.oid && obj.level === level && obj.zone === zone && obj.oid === oid) return obj;
    }
};

Game.prototype.getFlag = function(level, zone) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (obj.level === level && obj.zone === zone && obj instanceof FlagpoleObject) return obj;
    }
};

Game.prototype.getAxe = function(level, zone) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (obj.level === level && obj.zone === zone && obj instanceof AxeObject) return obj;
    }
};

Game.prototype.getText = function(_0x684bab, _0x1988a8, _0x26b734) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (obj && obj.level === _0x684bab && obj.zone === _0x1988a8 && obj instanceof _0x3db18a && obj.text === _0x26b734.toString()) return obj;
    }
};

Game.prototype.getPlatforms = function() {
    for (var _0x224f04 = this.getZone(), _0x4bb33b = [], _0x26e8ba = 0x0; _0x26e8ba < this.objects.length; _0x26e8ba++) {
        var _0x510c40 = this.objects[_0x26e8ba];
        (_0x510c40 instanceof _0x5bbb5e || _0x510c40 instanceof _0x4b6e2c) && _0x510c40.level === _0x224f04.level && _0x510c40.zone === _0x224f04.id && _0x4bb33b.push(_0x510c40);
    }
    return _0x4bb33b;
};

Game.prototype.getGhost = function(_0x449d8f) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (undefined !== obj.pid && obj.pid === _0x449d8f) return obj;
    }
};

Game.prototype.getPlayer = function() {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (undefined !== obj.pid && obj.pid === this.pid) return obj;
    }
};

Game.prototype.getZone = function() {
    var _0x215d79 = this.getPlayer();
    return _0x215d79 ? this.lastZone = this.world.getZone(_0x215d79.level, _0x215d79.zone) : this.lastZone ? this.lastZone : this.world.getInitialZone();
};

Game.prototype.getPlayerInfo = function(_0x45814e) {
    for (var i = 0; i < this.players.length; i++) {
        var obj = this.players[i];
        if (obj.id === _0x45814e) return obj;
    }
};

Game.prototype.getRemain = function() {
    for (var _0x5ca02b = 0x0, _0x4d40d7 = 0x0; _0x4d40d7 < this.players.length; _0x4d40d7++) {
        var _0xbb8caf = this.getGhost(this.players[_0x4d40d7].id);
        _0xbb8caf && !_0xbb8caf.dead && _0x5ca02b++;
    }
    return _0x5ca02b;
};

Game.prototype.play = function(_0x5b2be8, _0x2c74b6, _0x4f5b18) {
    _0x5b2be8 = this.audio.getAudio(_0x5b2be8, _0x2c74b6, _0x4f5b18, "effect");
    _0x5b2be8.play();
    this.sounds.push(_0x5b2be8);
};

Game.prototype.levelWarp = function(_0x4fb258) {
    this.levelWarpId = _0x4fb258;
    this.levelWarpTimer = Game.LEVEL_WARP_TIME;
    this.getPlayer().hide();
};

Game.prototype.coinage = function(jackpot) {
    if (jackpot) {
        this.play("sfx/gold.wav", 1, 0x0);
        var _0x27d445 = Cookies.get("dosh");
        !app.net.isPrivate && (this.coinsCollected+=50000,Cookies.set("dosh", _0x27d445 ? parseInt(_0x27d445) + 50000 : 50000, {
            'expires': 0x16d
        }));
        return;
    }
    this.coinsCollected += 1;
    this.coins = Math.min(0x63, this.coins + 0x1);
    this.coins >= Game.COINS_TO_LIFE && (this.lifeage(), this.coins = 0x0);
    this.play("sfx/coin.wav", 0.4, 0x0);
    var _0x27d445 = Cookies.get("dosh");
    !app.net.isPrivate && Cookies.set("dosh", _0x27d445 ? parseInt(_0x27d445) + 0x1 : 0x1, {
        'expires': 0x16d
    });
};

Game.prototype.lifeage = function() {
    this.lives = Math.min(0x63, this.lives + 0x1);
    this.play("sfx/life.wav", 0x1, 0x0);
};

Game.prototype.loop = function() {
    try {
        if (this.ready && undefined !== this.startDelta) {
            var _0x441773 = util.time.now(),
                _0x3b488d = parseInt((_0x441773 - this.startDelta) / Game.TICK_RATE);
            if (_0x3b488d > this.frame) {
                for (var _0x32cb4e = !0x0; this.buffer.length > Game.FDLC_TARGET || _0x32cb4e && 0x0 < this.buffer.length;) {
                    var _0x6b0a25 = this.buffer.shift();
                    this.doUpdate(_0x6b0a25);
                    _0x32cb4e = !0x1;
                }
                for (this.doDetermine(); _0x3b488d > this.frame;) this.doStep();
                this.doPush();
                this.delta = _0x441773;
            }
        }
    } catch (e) {
        console.error(e);
    }
    var game = this;
    this.loopReq = setTimeout(function() {
        game.loop();
    }, 0x2);
};

Game.prototype.draw = function() {
    this.lastDraw === this.frame && undefined !== this.startDelta || this.display.draw();
    var _0x19f533 = this;
    this.frameReq = requestAnimFrameFunc.call(window, function() {
        _0x19f533.draw();
    });
};

Game.prototype.destroy = function() {
    _0x2a6b41.call(window, this.frameReq);
    clearTimeout(this.loopReq);
    this.input.destroy();
    this.display.destroy();
    this.audio.destroy();
};
"use strict";

function LobbyGame(_0x5a8616) {
    Game.call(this, _0x5a8616);
    this.lobbyTimer = 0x5a;
    if (app.audioElement !== undefined) {
        app.audioElement.setAttribute('src', app.charMusic && app.net.skin in SKIN_MUSIC_URL ? SKIN_MUSIC_URL[app.net.skin] : LOBBY_MUSIC_URL);
        app.audioElement.load;
        app.audioElement.volume = 0.18;
        app.audioElement.loop = true;
        if (!this.audio.muteMusic)
            app.audioElement.play();
    }
}
LobbyGame.prototype.load = Game.prototype.load;
LobbyGame.prototype.send = Game.prototype.send;
LobbyGame.prototype.handlePacket = Game.prototype.handlePacket;
LobbyGame.prototype.updatePlayerList = Game.prototype.updatePlayerList;
LobbyGame.prototype.gameStartTimer = function() {};
LobbyGame.prototype.updateTeam = Game.prototype.updateTeam;
LobbyGame.prototype.handleBinary = Game.prototype.handleBinary;
LobbyGame.prototype.updatePacket = Game.prototype.updatePacket;
LobbyGame.prototype.doUpdate = Game.prototype.doUpdate;
LobbyGame.prototype.doNET002 = Game.prototype.doNET002;
LobbyGame.prototype.doNET010 = function(packet) {
    Game.prototype.doNET010.call(this, packet);
    if(packet.pid == this.pid && app.net.prefTeam.trim() == "" && app.net.isPrivate) {
        document.getElementById("privLobby").style.display = "";
    }
}
LobbyGame.prototype.doNET011 = Game.prototype.doNET011;
LobbyGame.prototype.doNET012 = Game.prototype.doNET012;
LobbyGame.prototype.doNET013 = Game.prototype.doNET013;
LobbyGame.prototype.doNET020 = Game.prototype.doNET020;
LobbyGame.prototype.doNET030 = Game.prototype.doNET030;
LobbyGame.prototype.doStart = Game.prototype.doStart;
LobbyGame.prototype.doDetermine = Game.prototype.doDetermine;
LobbyGame.prototype.doInput = Game.prototype.doInput;
LobbyGame.prototype.doTouch = Game.prototype.doTouch;
LobbyGame.prototype.doStep = function() {
    this.doSpawn();
    Game.prototype.doStep.call(this);
};
LobbyGame.prototype.doSpawn = Game.prototype.doSpawn;
LobbyGame.prototype.doMusic = Game.prototype.doMusic;
LobbyGame.prototype.doPush = Game.prototype.doPush;
LobbyGame.prototype.createObject = Game.prototype.createObject;
LobbyGame.prototype.getObject = Game.prototype.getObject;
LobbyGame.prototype.getFlag = Game.prototype.getFlag;
LobbyGame.prototype.getPlatforms = Game.prototype.getPlatforms;
LobbyGame.prototype.getGhost = Game.prototype.getGhost;
LobbyGame.prototype.getPlayer = Game.prototype.getPlayer;
LobbyGame.prototype.getZone = Game.prototype.getZone;
LobbyGame.prototype.getPlayerInfo = Game.prototype.getPlayerInfo;
LobbyGame.prototype.getRemain = Game.prototype.getRemain;
LobbyGame.prototype.play = Game.prototype.play;
LobbyGame.prototype.levelWarp = Game.prototype.levelWarp;
LobbyGame.prototype.coinage = Game.prototype.coinage;
LobbyGame.prototype.lifeage = Game.prototype.lifeage;
LobbyGame.prototype.loop = function() {
    0x0 < this.lobbyTimer ? this.lobbyTimer-- : undefined === this.startDelta && this.doStart();
    Game.prototype.loop.call(this);
};
LobbyGame.prototype.draw = Game.prototype.draw;
LobbyGame.prototype.destroy = function() {
    Game.prototype.destroy.call(this);
    if (app.audioElement !== undefined && !(app.charMusic && app.net.skin in SKIN_MUSIC_URL)) {
        app.audioElement.pause();
        app.audioElement.remove();
        app.audioElement = undefined;
    }
}
"use strict";

function JailGame(_0x1425f8) {
    Game.call(this, _0x1425f8);
    this.lobbyTimer = 0x5a;
}
JailGame.prototype.load = Game.prototype.load;
JailGame.prototype.send = Game.prototype.send;
JailGame.prototype.handlePacket = Game.prototype.handlePacket;
JailGame.prototype.updatePlayerList = Game.prototype.updatePlayerList;
JailGame.prototype.gameStartTimer = function() {};
JailGame.prototype.updateTeam = Game.prototype.updateTeam;
JailGame.prototype.handleBinary = Game.prototype.handleBinary;
JailGame.prototype.updatePacket = Game.prototype.updatePacket;
JailGame.prototype.doUpdate = Game.prototype.doUpdate;
JailGame.prototype.doNET002 = Game.prototype.doNET002;
JailGame.prototype.doNET010 = Game.prototype.doNET010;
JailGame.prototype.doNET011 = Game.prototype.doNET011;
JailGame.prototype.doNET012 = Game.prototype.doNET012;
JailGame.prototype.doNET013 = Game.prototype.doNET013;
JailGame.prototype.doNET020 = Game.prototype.doNET020;
JailGame.prototype.doNET030 = Game.prototype.doNET030;
JailGame.prototype.doStart = Game.prototype.doStart;
JailGame.prototype.doDetermine = Game.prototype.doDetermine;
JailGame.prototype.doInput = Game.prototype.doInput;
JailGame.prototype.doTouch = Game.prototype.doTouch;
JailGame.prototype.doStep = function() {
    Game.prototype.doStep.call(this);
};
JailGame.prototype.doSpawn = function() {};
JailGame.prototype.doMusic = Game.prototype.doMusic;
JailGame.prototype.doPush = Game.prototype.doPush;
JailGame.prototype.createObject = Game.prototype.createObject;
JailGame.prototype.getObject = Game.prototype.getObject;
JailGame.prototype.getFlag = Game.prototype.getFlag;
JailGame.prototype.getPlatforms = Game.prototype.getPlatforms;
JailGame.prototype.getGhost = Game.prototype.getGhost;
JailGame.prototype.getPlayer = Game.prototype.getPlayer;
JailGame.prototype.getZone = Game.prototype.getZone;
JailGame.prototype.getPlayerInfo = Game.prototype.getPlayerInfo;
JailGame.prototype.getRemain = Game.prototype.getRemain;
JailGame.prototype.play = Game.prototype.play;
JailGame.prototype.levelWarp = Game.prototype.levelWarp;
JailGame.prototype.coinage = Game.prototype.coinage;
JailGame.prototype.lifeage = Game.prototype.lifeage;
JailGame.prototype.loop = function() {
    0x0 < this.lobbyTimer ? this.lobbyTimer-- : undefined === this.startDelta && this.doStart();
    Game.prototype.loop.call(this);
};
JailGame.prototype.draw = Game.prototype.draw;
JailGame.prototype.destroy = Game.prototype.destroy;
"use strict";

function App() {
    this.menu = new Menu();
    this.net = new Network();
    this.goToLobby = Cookies.get("go_to_lobby") === "1";
    if (this.goToLobby)
        Cookies.remove("go_to_lobby");
    this.session = Cookies.get("session");
    this.audioElement = document.createElement('audio');
    this.audioElement.setAttribute('src', MENU_MUSIC_URL);
    this.audioElement.load;
    this.audioElement.volume = 0.2;
    this.audioElement.loop = true;
    if (0x1 !== parseInt(Cookies.get("music")))
        this.audioElement.play();
    this.statusUpdater = null;
    this.charMusic = Cookies.get("char_music") === "1";
}
App.prototype.init = function() {
    document.getElementById("log").style.display = "none";
    document.getElementById("link-patch").style.display = "";
    document.getElementById("main-number").style.display = "";
    if (!this.goToLobby)
        this.menu.disclaim.show();
    var that = this;
    setTimeout(function() {
        that.menu.load.show();

        if (that.goToLobby && that.session === undefined) {
            var name = Cookies.get("name");
            var team = Cookies.get("team");
            var priv = Cookies.get("priv");
            var skin = Cookies.get("skin");
            var gm = Cookies.get("gamemode");
            that.join(name ? name : "", team ? team : "", priv === "true", skin ? parseInt(skin) : 0, gm ? parseInt(gm) : 0);
            return;
        }

        var updateStatus = function(firstTry) {
            $.ajax({
                'url': "status",
                'type': "GET",
                'timeout': 0xbb8,
                'success': function(_0x497cbd) {
                    if (_0x497cbd.result) {
                        firstTry && that.menu.error.show(_0x497cbd.result);
                    } else {
                        that.menu.main.number.innerHTML = _0x497cbd.active;
                    }
                },
                cache: false
            });
        };

        updateStatus(true);
        that.statusUpdater = setInterval(updateStatus, 1000);

        that.menu.main.show();
    }, this.goToLobby ? 100 : 5000);
};
App.prototype.load = function(data) {
    if (this.game instanceof Game) this.menu.error.show("State error. Game already loaded.");
    else switch (this.game instanceof LobbyGame && this.game.destroy(), data.type) {
        case "game":
            this.game = new Game(data);
            break;
        case "lobby":
            this.game = new LobbyGame(data);
            break;
        case "jail":
            this.game = new JailGame(data);
            break;
        default:
            this.menu.error.show("Critical error! Game file missing type!");
    }
};
App.prototype.ingame = function() {
    return !!this.game;
};
App.prototype.join = function(name, team, priv, skin, gm) {
    if (this.audioElement !== undefined)
        this.audioElement.pause();
    if (this.statusUpdater) {
        clearInterval(this.statusUpdater);
        this.statusUpdater = null;
    }
    this.ingame() ? this.menu.error.show("An error occured while starting game...") : (this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.GUEST, name, team, priv, skin, gm]));
};
App.prototype.login = function(username, pw) {
    this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.LOGIN, username, pw]);
};
App.prototype.logout = function(username, pw) {
    this.net.send({'type': "llo"});
};
App.prototype.requestCaptcha = function() {
    this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.REQ_CAPTCHA]);
};
App.prototype.register = function(username, pw, captcha) {
    this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.REGISTER, username, pw, captcha]);
};
App.prototype.resumeSession = function(session) {
    this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.RESUME, session]);
};
App.prototype.close = function() {
    this.menu.load.show();
    this.ingame() && this.net.close();
    location.reload();
};
var app = new App();
print("loading game.min.js finished");
app.init();
