const Header = () => {
  const button = 'Click on me';
  return <div>
    <label htmlFor="name">
        Enter name:
    </label>
    <input id="name" type="text" />
    <button style={{ backgroundColor:'blue', color:'white' }}>
      { button }
    </button>
  </div>
}
export default Header;