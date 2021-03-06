/* eslint-disable indent */
import * as Yup from 'yup';

const REQUIRED_MESSAGE = field => `O campo '${field}' é obrigatório`;

export const VALIDATIONS = Yup.object().shape({
  uf: Yup.string()
    .required(REQUIRED_MESSAGE('estado')),
  cidade: Yup.string()
    .required(REQUIRED_MESSAGE('cidade')),
  profissao: Yup.string()
    .required(REQUIRED_MESSAGE('profissao')),
  entidade: Yup.string()
    .required(REQUIRED_MESSAGE('entidade')),
  datanascimento: Yup.string()
    .required(REQUIRED_MESSAGE('data de nascimento')),
});
