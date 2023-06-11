import { useState, useEffect } from "react";
import { Container, Links, Content } from "./styles"; //Note que pegamos os ddois blocos estilizaodos do stylend
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../service/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();


  function handleBack() {
    navigate(-1);
  }

 async function handleRemove(){
    const confirm = window.confirm("Deseja remover a Nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      handleBack()


    }
  }

  useEffect(() => {
    async function fecthNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      console.log(response.data)
    }

    fecthNote();
  }, []);

  return (
    //o <links> ai é equivalente a o UL
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText 
            title="Excluir Nota!" 
            onClick={handleRemove}
            />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links && (
              <Section title="Links Úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}{" "}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
