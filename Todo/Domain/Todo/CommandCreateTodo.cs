using Dolittle.Commands;
using Concepts.Todo;

namespace Domain.Todo
{
    public class CommandCreateTodo : ICommand
    {
        public TodoId Id { get; set; }
        public TodoText Text { get; set;}
        public TodoCategory Category { get; set;}
    }
    
}
