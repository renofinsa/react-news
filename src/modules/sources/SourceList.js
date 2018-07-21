import React from "react";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
const const_key = "e3118dd1cfad4f7b89a295e2e3bd3601";
const Sources = "https://newsapi.org/v2/sources?apiKey=" + const_key;
const dariSemantic = "https://react-semantic-ui.com";
const iconLocator = "https://icon-locator.herokuapp.com/icon?size=70..120..200";

class SourceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(Sources)
      .then(result => {
        console.log("tes", result);
        this.setState({
          data: result.data.sources,
          loading: false
        });
      })
      .catch(error => {
        console.log(error.message, "ini error");
        this.state({
          error: error.message,
          loading: false
        });
      });

    // .catch(error => "ini error");
  }

  render() {
    const { data, loading, error } = this.state;
    if (loading) {
      return (
        <Segment>
          <Dimmer>
            <Loader />
          </Dimmer>

          <Image src="https://react.semantic-ui.com//images/wireframe/short-paragraph.png" />
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }

    return (
      <Card.Group>
        {data.map(source => {
          return (
            <Card>
              <Image size="small" src={`${iconLocator}&url=${source.url}`} />
              <Card.Content>
                <Card.Header>{source.name}</Card.Header>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}

export default SourceList;
