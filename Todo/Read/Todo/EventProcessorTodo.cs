using Dolittle.Events.Processing;
using Dolittle.ReadModels;
using Events.Todo;

namespace Read.Todo
{
    public class EventProcessorTodo : ICanProcessEvents
    {
        private readonly IReadModelRepositoryFor<Todo> _repository;

        public EventProcessorTodo(IReadModelRepositoryFor<Todo> repository)
        {
            _repository = repository;
        }
        
        [EventProcessor("a47359a6-db56-af27-cbd3-8ee5f5f8f0c1")]
        public void Process(TaskCreated @event)
        { 
            var todo = new Todo
            {
                Id = @event.Id,
                Text = @event.Text,
                Category = @event.Category
            };
            _repository.Insert(todo);
        }
        
    }
}
