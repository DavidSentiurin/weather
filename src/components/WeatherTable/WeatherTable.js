import React from 'react';
import { Header, Table, Card } from 'semantic-ui-react';
import Loading from '../loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const WeatherTable = (props) => {
  if (props.status >= 400) {
    return <ErrorMessage children={`Server error. Status code: ${props.status}`} />;
  }

  if (props.data?.constructor !== Object) {
    console.error(`The WeatherTable expects an object. Incoming data: '${typeof props.data}'`)
    return null;
  } else if (Object.entries(props.data).length === 0 || !props.status) {
    return <Loading size='large' />;
  }

  const { clouds, wind, name } = props.data;
  const { temp, humidity, pressure } = props.data.main;

  return (
    <>
      <Header size='huge' style={{ marginTop: 20 }}>Weather in {name}</Header>
      <Card fluid color='yellow' className='table-card' style={{ padding: 10 }}>
        <Table basic='very'>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Temp
                </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{temp}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Clouds
                </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{`${clouds.all}%`}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Humidity
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{`${humidity}%`}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Pressure
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{`${pressure}hPa`}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Wind Direction
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{`${wind.deg}°`}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Wind Speed
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{`${wind.speed}m/s`}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card>
    </>
  );
}

export default WeatherTable;
