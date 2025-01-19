export const ProfileEdit = ({ user, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement save logic
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue={user.name} />
      <textarea defaultValue={user.bio} />
      <button type="submit">Save Profile</button>
    </form>
  );
};