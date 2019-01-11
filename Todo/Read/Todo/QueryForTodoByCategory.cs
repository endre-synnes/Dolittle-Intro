using System;
using System.Linq;
using Dolittle.Queries;
using Dolittle.ReadModels;
using Concepts.Todo;

namespace Read.Todo
{
    public class QueryForTodoByCategory : IQueryFor<Todo>
    {
        readonly IReadModelRepositoryFor<Todo> _repositoryForTodo;

        public QueryForTodoByCategory(IReadModelRepositoryFor<Todo> repositoryForTodo)
        {
            _repositoryForTodo = repositoryForTodo;
        }

        public TodoCategory SelectedCategory {get; set;}
        public IQueryable<Todo> Query => _repositoryForTodo.Query.Where(todo => todo.Category == SelectedCategory);
    }
}
