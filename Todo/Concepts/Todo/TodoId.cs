using System;
using Dolittle.Concepts;
using Dolittle.Runtime.Events;

namespace Concepts.Todo
{
    public class TodoId : EventSourceId
    {
        public static implicit operator TodoId(Guid id) => new TodoId { Value = id };
        public static implicit operator TodoId(string id) => new TodoId { Value = new Guid(id) };
    }
}