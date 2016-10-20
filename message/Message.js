class Message extends VisComponent {
  constructor (el, value) {
    super(el);

    this.update(value);
    this.render();
  }

  update (value) {
    this.value = value;
  }

  selectMessage () {
    if (this.value < 0) {
      return 'Negative!';
    } else if (this.value === 0) {
      return 'Zero!!';
    } else {
      return 'Positive!!!';
    }
  }

  render () {
    this.el.innerHTML = this.selectMessage();
  }
}
