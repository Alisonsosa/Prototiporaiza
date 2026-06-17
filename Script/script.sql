CREATE DATABASE PlataformaCursos;

USE PlataformaCursos;

CREATE TABLE Usuario (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    contrasenaHash VARCHAR(255) NOT NULL,
    rol VARCHAR(20) NOT NULL CHECK (rol IN ('Estudiante','Instructor','Administrador')),
    estado VARCHAR(20) NOT NULL DEFAULT 'Activo'
);

CREATE TABLE Estudiante (
    id INT PRIMARY KEY,
    esPremium BIT NOT NULL DEFAULT 0,
    fechaAcceso DATETIME NULL,
    CONSTRAINT FK_Estudiante_Usuario FOREIGN KEY (id) REFERENCES Usuario(id)
);

CREATE TABLE Instructor (
    id INT PRIMARY KEY,
    especialidad VARCHAR(100) NULL,
    biografia VARCHAR(MAX) NULL,
    CONSTRAINT FK_Instructor_Usuario FOREIGN KEY (id) REFERENCES Usuario(id)
);

CREATE TABLE Administrador (
    id INT PRIMARY KEY,
    nivelAcceso INT NOT NULL DEFAULT 1,
    CONSTRAINT FK_Administrador_Usuario FOREIGN KEY (id) REFERENCES Usuario(id)
);

CREATE TABLE Tematica (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    imagenPortada VARCHAR(255) NULL
);

CREATE TABLE Modulo (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nivel VARCHAR(20) NOT NULL CHECK (nivel IN ('Basico','Intermedio','Avanzado')),
    precio DECIMAL(10,2) NOT NULL DEFAULT 0,
    incluyeKit BIT NOT NULL DEFAULT 0,
    idTematica INT NOT NULL,
    idInstructor INT NOT NULL,
    CONSTRAINT FK_Modulo_Tematica FOREIGN KEY (idTematica) REFERENCES Tematica(id),
    CONSTRAINT FK_Modulo_Instructor FOREIGN KEY (idInstructor) REFERENCES Instructor(id)
);

CREATE TABLE Leccion (
    id INT IDENTITY(1,1) PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('Video','Documento','Quiz','Otro')),
    orden INT NOT NULL,
    idModulo INT NOT NULL,
    CONSTRAINT FK_Leccion_Modulo FOREIGN KEY (idModulo) REFERENCES Modulo(id)
);

CREATE TABLE Tarea (
    id INT IDENTITY(1,1) PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion VARCHAR(MAX) NULL,
    fechaEntrega DATETIME NOT NULL,
    idModulo INT NOT NULL,
    CONSTRAINT FK_Tarea_Modulo FOREIGN KEY (idModulo) REFERENCES Modulo(id)
);

CREATE TABLE EntregaTarea (
    id INT IDENTITY(1,1) PRIMARY KEY,
    archivoUrl VARCHAR(255) NOT NULL,
    fechaEntrega DATETIME NOT NULL DEFAULT GETDATE(),
    calificacion DECIMAL(5,2) NULL,
    comentario VARCHAR(MAX) NULL,
    idTarea INT NOT NULL,
    idEstudiante INT NOT NULL,
    idInstructorCalifica INT NULL,
    CONSTRAINT FK_Entrega_Tarea FOREIGN KEY (idTarea) REFERENCES Tarea(id),
    CONSTRAINT FK_Entrega_Estudiante FOREIGN KEY (idEstudiante) REFERENCES Estudiante(id),
    CONSTRAINT FK_Entrega_Instructor FOREIGN KEY (idInstructorCalifica) REFERENCES Instructor(id)
);

CREATE TABLE ClaseEnVivo (
    id INT IDENTITY(1,1) PRIMARY KEY,
    fechaHora DATETIME NOT NULL,
    urlSala VARCHAR(255) NOT NULL,
    estado VARCHAR(20) NOT NULL CHECK (estado IN ('Programada','EnCurso','Finalizada','Cancelada')),
    idModulo INT NOT NULL,
    idInstructor INT NOT NULL,
    CONSTRAINT FK_Clase_Modulo FOREIGN KEY (idModulo) REFERENCES Modulo(id),
    CONSTRAINT FK_Clase_Instructor FOREIGN KEY (idInstructor) REFERENCES Instructor(id)
);

CREATE TABLE ParticipanteClase (
    idClase INT NOT NULL,
    idEstudiante INT NOT NULL,
    fechaIngreso DATETIME NULL,
    PRIMARY KEY (idClase, idEstudiante),
    CONSTRAINT FK_Participante_Clase FOREIGN KEY (idClase) REFERENCES ClaseEnVivo(id),
    CONSTRAINT FK_Participante_Estudiante FOREIGN KEY (idEstudiante) REFERENCES Estudiante(id)
);

CREATE TABLE Compra (
    id INT IDENTITY(1,1) PRIMARY KEY,
    monto DECIMAL(10,2) NOT NULL,
    metodoPago VARCHAR(30) NOT NULL CHECK (metodoPago IN ('Tarjeta','PSE','Nequi','Otro')),
    estado VARCHAR(20) NOT NULL CHECK (estado IN ('Pendiente','Aprobado','Rechazado')),
    referenciaWompi VARCHAR(100) NULL,
    fechaCompra DATETIME NOT NULL DEFAULT GETDATE(),
    idEstudiante INT NOT NULL,
    idModulo INT NOT NULL,
    CONSTRAINT FK_Compra_Estudiante FOREIGN KEY (idEstudiante) REFERENCES Estudiante(id),
    CONSTRAINT FK_Compra_Modulo FOREIGN KEY (idModulo) REFERENCES Modulo(id)
);

CREATE TABLE Progreso (
    id INT IDENTITY(1,1) PRIMARY KEY,
    completado BIT NOT NULL DEFAULT 0,
    porcentaje DECIMAL(5,2) NOT NULL DEFAULT 0,
    fechaCompletado DATETIME NULL,
    idEstudiante INT NOT NULL,
    idModulo INT NOT NULL,
    CONSTRAINT FK_Progreso_Estudiante FOREIGN KEY (idEstudiante) REFERENCES Estudiante(id),
    CONSTRAINT FK_Progreso_Modulo FOREIGN KEY (idModulo) REFERENCES Modulo(id)
);

CREATE TABLE Certificado (
    id INT IDENTITY(1,1) PRIMARY KEY,
    fechaEmision DATETIME NOT NULL DEFAULT GETDATE(),
    urlPDF VARCHAR(255) NOT NULL,
    codigoVerificacion VARCHAR(100) NOT NULL UNIQUE,
    idEstudiante INT NOT NULL,
    idModulo INT NOT NULL,
    CONSTRAINT FK_Certificado_Estudiante FOREIGN KEY (idEstudiante) REFERENCES Estudiante(id),
    CONSTRAINT FK_Certificado_Modulo FOREIGN KEY (idModulo) REFERENCES Modulo(id)
);
