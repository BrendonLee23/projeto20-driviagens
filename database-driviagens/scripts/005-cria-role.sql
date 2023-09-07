DO
$$
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_catalog.pg_roles WHERE rolname='projeto-driviagens_role'
  ) THEN
    CREATE ROLE projetodriviagens_role WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD 'senha_projeto_driviagens';
  END IF;
END
$$;