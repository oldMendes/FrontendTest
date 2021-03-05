import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Typography } from "antd";
import axios from "axios";
import FormGroup from "../../components/FormGroup";
import SelectMenu from "../../components/SelectMenu";
import SelectProfessions from '../../components/SelectProfessions'
import SelectEntitys from '../../components/SelectEntitys';
import HealthPlansTable from  './HealthPlansTable';
import { STATES } from '../../data/index';

const baseApi = "http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com";
const apiKey = "api-key=ddd70c32-fc98-4618-b494-a9698f824353";

const apiKeyFindEntity = "api-key=4b94dba2-5524-4632-939b-92df1c50a645"

const apiKeyFindHealthPlans = "api-key=261fd4d0-fd9f-468a-afa9-f5a89ed3701c"

const Text = Typography;

const HealthPlans = () => {
  const [professionList, setProfessionList] = useState();
  const [entityList, setEntityList] = useState();
  const [uf, setUf] = useState([]);
  const [cidade, setCidade] = useState('');
  const [profissao, setProfissao] = useState([]);
  const [datanascimento, setDatanascimento] = useState([]);
  const [entidade, setEntidade] = useState([]);
  const [disabledButtton, setDisabledButtton] = useState(true);
  const [disabledButttonEntity, setDisabledButttonEntity] = useState(true);
  const [healthPlansList, setHealthPlansList] = useState();
  
  const getProfessionalList = () => {
    axios
      .get(`${baseApi}/profissao/${uf}/${cidade}?${apiKey}`)
      .then((response) => {
        setProfessionList(response.data);
        setDisabledButtton(false)
      })
      .catch((erro) => {
        console.log(erro.response);
    });
  }

  const getEntityList = () => {
    axios
      .get(`${baseApi}/entidade/${profissao}/${uf}/${cidade}?${apiKeyFindEntity}`)
      .then((response) => {
        setEntityList(response.data);
        setDisabledButttonEntity(false)
      })
      .catch((erro) => {
        console.log(erro.response);
    });
  }


  const fetchHealthPlans = () => {
    axios
      .post(`${baseApi}/plano?${apiKeyFindHealthPlans}`, {
        entidade,
        uf,
        cidade,
        datanascimento: [datanascimento],
      })
      .then((response) => {
        setHealthPlansList(response?.data?.planos)
      })
      .catch((erro) => {
        console.log(erro.response);
    });
  };
  
    useEffect(() => {
      if(uf !== null && cidade !== '') {
        getProfessionalList();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uf, cidade ]) 

    useEffect(() => {
      if(uf !== null && cidade !== '' && profissao !== null) {
        getEntityList();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profissao ]) 
  
    return (
      <>
        <Card title="Pesquisa por planos disponíveis">
          <br />
          <div className="row">
            <div className="col-md-6">
              <div className="bs-component">
                <FormGroup label="Estado">
                  <SelectMenu
                    defaultValue={uf}
                    className="form-control"
                    lista={STATES}
                    onChange={(e) =>
                      setUf(e.target.value)
                    }
                  />
                </FormGroup>
                <FormGroup label="Profissão">
                  <SelectProfessions
                    defaultValue={profissao}
                    className="form-control"
                    lista={professionList}
                    onChange={(e) =>
                      setProfissao(e.target.value)
                    }
                    disabled={disabledButtton}
                  />
                </FormGroup>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bs-component">
                <FormGroup htmlFor="cidade" label="Cidade*">
                  <input
                    defaultValue={cidade}
                    type="text"
                    className="form-control"
                    id="inputNome"
                    placeholder="Digite a cidade"
                    onBlur={(e) =>
                      setCidade(e.target.value)
                    }
                  ></input>
                </FormGroup>
                <FormGroup htmlFor="datanascimento" label="Data de nascimento*">
                  <input
                    defaultValue={datanascimento}
                    type="date"
                    className="form-control"
                    id="inputNome"
                    aria-describedby="emailHelp"
                    placeholder="Digite a longitude"
                    onChange={(e) =>
                      setDatanascimento(e.target.value)
                    }
                  ></input>
                </FormGroup>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bs-component">
                <FormGroup label="Entidade">
                  <SelectEntitys
                    defaultValue={entidade}
                    className="form-control"
                    lista={entityList}
                    onChange={(e) =>
                      setEntidade(e.target.value)
                    }
                    disabled={disabledButttonEntity}
                  />
                  </FormGroup>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" 
                type="submit" 
                onClick={() => fetchHealthPlans()}
                >Buscar resultados</button>
              </div>
            </div>
          </div>
        </Card>
        <>
          <Card>
            <Text style={{fontSize: '24px'}}> Lista de planos disponíveis</Text>
          </Card>
          <HealthPlansTable healthPlansList={healthPlansList}></HealthPlansTable>
        </>
      </>
    ) 
}

export default HealthPlans;
