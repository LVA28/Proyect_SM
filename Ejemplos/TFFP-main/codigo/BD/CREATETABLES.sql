CREATE TABLE MESAS(
	id_mesa int primary key
);

CREATE TABLE ALERGENOS(
	id_alergeno int primary key,
	nombre varchar(20)
);

CREATE TABLE PLATOS(
	id_plato int primary key,
	nombre varchar(40),
	descripcion varchar(200),
	ingredientes varchar(200),
	precio smallmoney,
	imagen int
);

CREATE TABLE PLATOS_ALERGENOS(
	id_plato int not null,
	id_alergeno int not null,
	nombre_alergeno varchar(20),
	PRIMARY KEY (id_plato, id_alergeno),
	FOREIGN KEY (id_plato) REFERENCES PLATOS(id_plato),
	CONSTRAINT  FK_id_alergeno_PLATOSALERGENOS FOREIGN KEY (id_alergeno) REFERENCES ALERGENOS(id_alergeno)
);


CREATE TABLE CUENTA(
	id_cuenta int,
	id_mesa int,
	total money,
	PRIMARY KEY (id_cuenta, id_mesa),
	FOREIGN KEY (id_mesa) REFERENCES MESAS(id_mesa)
);

CREATE TABLE LINEA_CUENTA(
	id_cuenta int,
	id_mesa int,
	id_linea int,
	id_plato int,
	nombre_plato varchar(40),
	coste_plato smallmoney,
	cantidad int,
	coste_final smallmoney,
	PRIMARY KEY (id_cuenta, id_linea),
);