using Dolittle.Domain;
using Dolittle.Runtime.Events;
using Concepts.Todo;
using Events.Todo;

namespace Domain.Todo
{
    public class AggregateRootTodo : AggregateRoot
    {
        public AggregateRootTodo(EventSourceId id) : base(id)
        { 
        }

        public void CreateTodo(
            TodoText text,
            TodoCategory category,
            TodoStatus status)
        {
            Apply(new TaskCreated(EventSourceId, text, category, status));
        }
    }
}
