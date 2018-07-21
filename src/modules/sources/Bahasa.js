import React from "react";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import moment from "moment";
const const_key = "e3118dd1cfad4f7b89a295e2e3bd3601";
const Sources =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=" + const_key;
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
          data: result.data.articles,
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
        {data &&
          data.map(source => {
            return (
              <Card>
                <Image
                  size="medium"
                  src={
                    source.urlToImage
                      ? `${iconLocator}&url=${source.url}`
                      : "https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png"
                  }
                />
                <Card.Content>
                  <Card.Header>
                    <a href="{source.url}">{source.title}</a>{" "}
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <p>{moment(source.publishedAt).format("MMMM Do YYYY")}</p>
                  <p>{source.author || "Data Kosong"}</p>
                </Card.Content>
              </Card>
            );
          })}
      </Card.Group>
    );
  }
}

export default SourceList;
