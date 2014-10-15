# WebGL Primer

## 용어

- vertex

	>3D 공간에서의 꼭지점 
	>하나의 vertex는 x, y, z 좌표값으로 구성

- fragment

	>vertex로 표현되는 geometry가 아닌 모든 것 
	>색, 텍스쳐 등

- Mesh

	>'그물망'이라는 뜻으로, 3D 공간에서 사물을 표현하는 객체로 기하 정보(geometry)와 표면 정보(surface)로 구성된다.

	>A mesh is an object composed of one or more polygonal shapes, constructed out of vertices (x, y, z triples) defining coordinate positions in 3D space.
	>3D 공간에서 위치를 나타내는 vertices로 구성되는 하나 혹은 그 이상의 다각형으로 구성되는 객체 	
	>*Programming 3D Applications with HTML5 and WebGL*

- 

- shader

    >GPU에서 구동되는 함수
    
    > `<script>` 태그 내에 문자열로 작성된 shader 소스 코드를 webGL context가 컴파일하여 GPU에서 구동된다.

- program

    >CPU의 정보를 담아 GPU에 전달하는 역할
    >
    >program에 shader도 붙이고, vertexPosition, matrix, color도 program의 property 값으로 지정하고, GPU는 program에서 해당 정보를 읽어와서 처리  

- buffer

    >vertex 정보를 담는 버퍼

    >실제 그래픽 카드의 메모리에 저장

## Variable Qualifiers

참조 : http://www.lighthouse3d.com/tutorials/glsl-tutorial/data-types-and-variables/

- const – The declaration is of a compile time constant
- attribute – Global variables that may change per vertex, that are passed from the OpenGL application to vertex shaders. This qualifier can only be used in vertex shaders. For the shader this is a read-only variable. See Attribute section
- uniform – Global variables that may change per primitive (may not be set inside glBegin,/glEnd), that are passed from the OpenGL application to the shaders. This qualifier can be used in both vertex and fragment shaders. For the shaders this is a read-only variable. See Uniform section
- varying – used for interpolated data between a vertex shader and a fragment shader. Available for writing in the vertex shader, and read-only in a fragment shader. See Varying section.


## WebGL Context 주요 함수

- bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
- createBuffer()
- uniformMatrix4fv(상수, boolean, 행렬)
- bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
- vertexAttribPointer()
- uniform4fv
- drawArrays


## 주요 상수

- gl.ARRAY_BUFFER

- gl.STATIC_DRAW

- gl.FRAGMENT_SHADER

- gl.VERTEX_SHADER

- gl.COMPILE_STATUS

- gl.LINK_STATUS

- gl.COLOR_BUFFER_BIT

- gl.DEPTH_BUFFER_BIT

- gl.FLOAT

- gl.TRIANGLE_STRIP

- gl.DEPTH_TEST
