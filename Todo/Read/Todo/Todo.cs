using Dolittle.ReadModels;
using Concepts.Todo;

namespace Read.Todo
{
    public class Todo : IReadModel
    {
        public TodoId Id { get; set; }
        public TodoText Text { get; set;}
        public TodoCategory Category { get; set; }
        public TodoStatus Status { get; set; }
    }
}
