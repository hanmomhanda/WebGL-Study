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


- attribute
    - Global variables that may change per vertex, that are passed from the OpenGL application to vertex shaders. This qualifier can only be used in vertex shaders. For the shader this is a read-only variable. See Attribute section
    - shader 내에서는 읽기 전용 값
    - vertex shader에서만 사용

- uniform
    - Global variables that may change per primitive (may not be set inside glBegin,/glEnd), that are passed from the OpenGL application to the shaders. This qualifier can be used in both vertex and fragment shaders. For the shaders this is a read-only variable. See Uniform section
    - shader 내에서는 읽기 전용 값
    - vertex shader, fragment shader 모두 사용

- varying
    - used for interpolated data between a vertex shader and a fragment shader. Available for writing in the vertex shader, and read-only in a fragment shader. See Varying section.
    - Varying variables provide an interface between Vertex and Fragment Shader. Vertex Shaders compute values per vertex and fragment shaders compute values per fragment. If you define a varying variable in a vertex shader, its value will be interpolated (perspective-correct) over the primitve being rendered and you can access the interpolated value in the fragment shader.
    - Varying can be used only with the data types float, vec2, vec3, vec4, mat2, mat3, mat4. (arrays of them too.)
    - vertex shader와 fragment shader 사이의 interpolation data
    - vertex shader와 fragment shader 사이의 interface 제공
    - vertex shader에서는 write도 가능, fragment shader에서는 read-only


## WebGL Context 주요 함수 - 파악 중임

- createBuffer()
    - 버퍼 생성
- bindBuffer(gl.ARRAY_BUFFER, 버퍼)
    - ARRAY_BUFFER의 target으로 버퍼를 지정한다.
- bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
    - 현재 ARRAY_BUFFER target에 데이터를 넣어준다.
- getAttribLocation(shaderProgram, attribute변수명)
    - https://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetAttribLocation.xml
    - shaderProgram에 link된 vertex shader 내에서 attribute변수명 변수가 선언된 순서값(0부터 시작하는 index) 반환
    - 반환된 index 값은 나중에 vertexAttribPointer()의 첫번째 인자로 사용
- enableVertexAttribArray(attribute변수index)
    - https://www.khronos.org/opengles/sdk/docs/man/xhtml/glEnableVertexAttribArray.xml
    - If enabled, the values in the generic vertex attribute array will be accessed and used for rendering when calls are made to vertex array commands such as glDrawArrays or glDrawElements.
    - attribute변수index : getAttribLocation(shaderProgram, attribute변수명)의 반환값. 0이면 shader에서 첫번째로 선언된 attribute 변수에 할당될 배열을 렌더링 될 수 있게 한다.
- getUniformLocation(shaderProgram, attribute변수명)
    - https://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetUniformLocation.xml
    - 위 링크의 내용과 달라 webGL에서는 integer가 아닌 WebGLUniformLocation() 라는 함수 객체 반환
    - 반환된 index 값은 나중에 uniformMatrix4fv()의 첫번째 인자로 사용
- vertexAttribPointer(attribute변수index, vertSize, 변수타입, boolean, stride, offset)
    - https://www.khronos.org/opengles/sdk/docs/man/xhtml/glVertexAttribPointer.xml
    - attribute변수index에 해당하는 변수에 저장된 배열(바로 이 함수의 호출문 앞에서 gl.bindBuffe()로 바인딩 된 배열)을 렌더링 할 수 있도록, vertSize, 변수타입, 정규화여부, stride, offset 값을 지정해준다.
    - program.attribute변수에 넣어진 값은 program을 통해 GPU에 전달된다.
    - vertSize는 3차원 좌표계를 사용하면 3이다.
    - 변수 타입은 vertexBuffer안에 있는 배열 원소의 데이터 타입(gl.FLOAT 등)
    - boolean은 고정소수점 데이터의 정규화 여부. 부호 있는 숫자는 [-1, 1] 사이 값으로 부호 없는 숫자는 [0, 1] 사이 값으로 정규화
    - stride는 연속된 generic vertex attribute 사이의 byte offset
    - offset는 배열에 있는 첫번째 generic vertex attribute의 첫번째 컴포넌트에 대한 인덱스 값
- uniformMatrix4fv(program.uniform변수, boolean, 행렬)
    - openGL 스펙 링크가 없음. webGL에만 있는 듯.
    - 행렬의 값을 전치(transpose, 행/열 변환) 여부에 따라 처리해서 program.uniform변수 에 넣어준다.
    - program.uniform변수에 넣어진 값은 program을 통해 GPU에 전달된다.
- drawArrays(primitiveType, startIndex, nVerts)
    - https://www.khronos.org/opengles/sdk/docs/man/xhtml/glDrawArrays.xml
    - primitiveType : [GL_POINTS | GL_LINE_STRIP | GL_LINE_LOOP | GL_LINES | GL_TRIANGLE_STRIP | GL_TRIANGLE_FAN | GL_TRIANGLES]
    - startIndex : enabled 된 배열의 시작 인덱스
    - nVerts : 꼭지점 수, 삼각형은 3, 사각형은 4...
- drawElements


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
