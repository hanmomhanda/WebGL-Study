# WebGL Primer

## 용어

- vertex

- fragment

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