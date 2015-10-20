var Pxcel = (function() {

    var Pxcel = {};
    var gl, shaderProgram;

    Pxcel.init = function(canvasId, vertexShaderSourceId, fragmentShaderSourceId) {
        var canvas = document.getElementById(canvasId);
        var glNames = [ "webgl", "experimental-webgl" ];

        for (var i = 0, l = glNames.length; i < l ; i++) {
            try {
                gl = canvas.getContext(glNames[i]);
            } catch (e) {}
        }

        if (!gl) {
            alert("Fail to get WebGL Context");
            return false;
        }

        shaderProgram = setupShaders(vertexShaderSourceId, fragmentShaderSourceId);
    };

    var setupShaders = function(vertexShaderSourceId, fragmentShaderSourceId) {
        var vertexShaderSource = document.getElementById(vertexShaderSourceId).text;
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);

        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            alert("Error compiling vertex shader : " + gl.getShaderInfoLog(vertexShader));
            gl.deleteShader(vertexShader);
            return null;
        }

        var fragmentShaderSource = document.getElementById(fragmentShaderSourceId).text;
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);

        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            alert("Error compiling fragment shader : " + gl.getShaderInfoLog(fragmentShader));
            gl.deleteShader(fragmentShader);
            return null;
        }

        var shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);

        gl.linkProgram(shaderProgram);

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert("Failed to link shaders");
            gl.deleteProgram(shaderProgram);
            return null;
        }

        gl.useProgram(shaderProgram);
        return shaderProgram;
    };

    Pxcel.World = function() {
        var World = {};

        World.add = function() {

        };

        World.remove = function() {

        };

        World.render = function() {

        }

        return World;
    };

    Pxcel.Mesh = function() {
        var Mesh = {};

        Mesh.getGeometry = function() {

        };

        Mesh.setGeometry = function() {

        };

        Mesh.getTexture = function() {

        };

        Mesh.setTexture = function() {

        };

        return Mesh;
    };

    Pxcel.Geometry = function() {
        var Geometry = {};

        Geometry.getVBO = function() {

        };

        Geometry.setVBO = function() {

        };

        Geometry.getIBO = function() {

        };

        Geometry.setIBO = function() {

        };

        return Geometry;
    };

    Pxcel.Texture = function() {
        var Texture = {};

        Texture.get = function() {

        };

        Texture.set = function() {

        };
        return Texture;
    };

    Pxcel.Primitive = function() {
        var Primitive = {};

        Primitive.Polygon = {};
    }

    return Pxcel;
})();
