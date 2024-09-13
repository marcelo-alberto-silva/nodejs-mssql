UPDATE [DBO].[TB_HISTORICO]
SET [NOME] = @Nome,
    [ID_CONDOMINIO] = @IdCondominio,
    [ID_PLANO_CONTA] = @IdPlanoConta,
    [TIPO_MOVIMENTO] = @TipoMovimento,
    [CODIGO_HISTORICO] = @CodHistorico
WHERE [ID_HISTORICO] = @IdHistorico
