import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Typography, Col, Row,  } from "antd";
import axios from "axios";
import FormGroup from "../../components/FormGroup";
import HealthPlansTable from  './HealthPlansTable';
import { STATES } from '../../data/index';
import { Formik } from 'formik';
import SubmitButton from '../../components/SubmitButton'
import Form from '../../components/Form'
import Select from '../../components/Select'
import Input from '../../components/Input'

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
  const [healthPlansList, setHealthPlansList] = useState();
  
  // ok
  const getProfessionalList = () => {
    setTimeout(() => {
      if(cidade !== undefined || cidade !== null) {
        axios
          .get(`${baseApi}/profissao/${uf}/${cidade}?${apiKey}`)
          .then((response) => {
            setProfessionList(response.data);
          })
          .catch((erro) => {
            console.log(erro.response);
        });
      }

    }, 1000) 
  }

  const getEntityList = () => {
    if(profissao !== undefined) {
      axios
        .get(`${baseApi}/entidade/${profissao}/${uf}/${cidade}?${apiKeyFindEntity}`)
        .then((response) => {
          setEntityList(response.data);
        })
        .catch((erro) => {
          console.log(erro.response);
      });
    }
  }


  const fetchHealthPlans = (values) => {
    axios
      .post(`${baseApi}/plano?${apiKeyFindHealthPlans}`, {
        entidade: values.entidade,
        uf: values.uf,
        cidade: values.cidade,
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
      console.log(cidade)
      if(uf !== null && cidade !== '' && profissao !== null) {
        getEntityList();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profissao]) 
  
    return (
      <>
        <Card title="Pesquisa por planos disponíveis">
        <Row gutter={[20, 20]}>
          <Formik
            initialValues={{}}
            validateOnMount
            onSubmit={(values, { setSubmitting, resetForm }) => {
              fetchHealthPlans(values)
              setSubmitting(false);
              resetForm();
            }}
          >
            <Form layout="vertical" style={{ width: '100%' }}>
              <Row gutter={[20,20]}>
                <Col md={12}>
                  <Form.Item name="uf" label="Estado">
                    <Select
                      name="uf"
                      placeholder="Selecione o estado"
                      style={{ width: '100%' }}
                      onSelect={(value) => setUf(value)}
                    >
                      {STATES.map((state, key) => (
                        <Select.Option key={key} value={state.value}>
                          {state.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={12}>
                  <Form.Item name="cidade" label="Cidade">
                    <Input.Search
                      name="cidade"
                      enterButton
                      placeholder="Digite a cidade"
                      onSearch={value => { 
                        getProfessionalList()
                        setCidade(value)}}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[20,20]}>
                <Col md={12}>
                  <Form.Item name="profissao" label="Profissão">
                    <Select
                      name="profissao"
                      placeholder="Selecione a profissão"
                      style={{ width: '100%' }}
                      onSelect={(value) => setProfissao(value)}
                    >
                      {professionList?.map((professional, key) => (
                        <Select.Option key={key} value={professional.profissao}>
                          {professional.profissao}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={12}>
                  <Form.Item name="entidade" label="Entidade">
                    <Select
                      name="entidade"
                      placeholder="Selecione a entidade"
                      style={{ width: '100%' }}
                    >
                      {entityList?.map((entity, key) => (
                        <Select.Option key={key} value={entity.NomeFantasia}>
                          {entity.RazaoSocial}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
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
                  </Col>
              </Row>
              <Col md={24} justify="end">
                <SubmitButton showValidationErrors icon={null}>
                  Enviar
                </SubmitButton>
              
              </Col>
            </Form>
          </Formik>
        </Row>
        </Card>
        <>
        {healthPlansList?.length > 0 && (
          <>
            <Card>
              <Text style={{fontSize: '24px'}}> Lista de planos disponíveis</Text>
            </Card>
            <HealthPlansTable healthPlansList={healthPlansList}></HealthPlansTable>
          </>
        )}
        </>
        
      </>
    ) 
}

export default HealthPlans;
