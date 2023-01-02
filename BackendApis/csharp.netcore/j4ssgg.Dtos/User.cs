namespace j4ssgg.Dtos
{
    public class User
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? LastName { get; set; }
        private DateTime Registered { get; set; }
    }
}