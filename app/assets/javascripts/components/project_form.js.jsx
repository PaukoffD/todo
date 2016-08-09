var ProjectForm = React.createClass({
  handleSubmit: function ( event ) {
    event.preventDefault();

    var name = this.refs.author.getDOMNode().value.trim();
   

    // validate
    if (!text || !name) {
      return false;
    }

    // submit
    var formData = $( this.refs.form.getDOMNode() ).serialize();
    this.props.onProjectsSubmit( formData, this.props.form.action );

    // reset form
    this.refs.name.getDOMNode().value = "";
    },
  render: function () {
    return (
      <form ref="form" className="project-form" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <p><input ref="projectr" name="project[name]" placeholder="Your name" /></p>
        <p><button type="submit">Post comment</button></p>
      </form>
    )
  }
});
