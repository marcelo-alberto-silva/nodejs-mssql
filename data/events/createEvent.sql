INSERT INTO [DBO].[TB_HISTORICO]
(
    [NOME],
    [ID_CONDOMINIO],
    [ID_PLANO_CONTA],
    [TIPO_MOVIMENTO],
    [CODIGO_HISTORICO]
)
VALUES
(
    @Nome,
    @IdCondominio,
    @IdPlanoConta,
    @TipoMovimento,
    @CodHistorico
)