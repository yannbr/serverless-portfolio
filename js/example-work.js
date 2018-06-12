import React from 'react';

class ExampleWork extends React.Component {
  render() {
    return (
      <section className="section section--alignCentered section--description">
        {this.props.work.map((ex, idx) => {
            return (
              <ExampleBubble singleExample={ex} key={idx} />
            )
        })}
      </section>
    )
  }
}


class ExampleBubble extends React.Component {
  render() {
    let example = this.props.singleExample
    return (
      <div className="section__exampleWrapper">
        <div className="section__example">
          <img alt={ example.alt }
               className="section__exampleImage"
               src={ example.src }/>
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              { example.title }
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default ExampleWork;
