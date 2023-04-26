import React from "react";
import { Link } from "react-router-dom";
import {
  RiFilter2Fill,
  RiSearch2Line,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiTicketLine,
  RiArrowLeftSLine,
  RiFileTextLine,
  RiDiscussLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import { Tab, Disclosure, Transition } from "@headlessui/react";

const Tickets = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Resumen</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <span>-</span>
            <span>Soporte técnico</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors">
            <RiFilter2Fill /> Filtros
          </button>
          <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
            Buscar
          </button>
        </div>
      </div>
      {/* Portada */}
      <div className="bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-8">
          <h1 className="text-3xl mb-8">¿En que podemos ayudarte?</h1>
          <form>
            <div className="relative">
              <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Buscar en toda la pagina"
              />
            </div>
          </form>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img src="portada.svg" className="w-72 h-72 object-cover" />
        </div>
      </div>
      <Tab.Group>
        <div className="bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg">
          <Tab.List className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-2 gap-y-6 bg-secondary-900/50 py-3 px-4 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                Resumen
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                Publicado
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                Preguntas Frecuentes
              </Tab>
            </div>
            <div className="flex justify-center">
              <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
                Crear
              </button>
            </div>
          </Tab.List>
        </div>
        <Tab.Panels className="mt-8">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">
                    Información
                  </h1>
                  <Link to="/" className="flex items-center gap-2 text-primary">
                    Ir a los Test's <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      ¿Porque realizar un Test?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Pregunta
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Si usted tiene sospechas de que sufre del trastorno.
                         Realizar un test podria ayudarlo a aclarar su duda... {" "}
                        <Link to="/" className="text-primary">
                          Más información
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Test para niño/as{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Test
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Este test esta dirigido para los niños y niñas de entre 5-7 años
                         de edad. En este test se evaluara ciertas culidades del...{" "}
                        <Link to="/" className="text-primary">
                          Más información
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Test para pre-adolecentes{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Test
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Este test esta dirigido para los niños y niñas de entre 12-15 años
                         de edad. En este test se evaluara ciertas culidades del...{" "}
                        <Link to="/" className="text-primary">
                          Más información
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Concecuencias del TDAH{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Info
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Las concecuencias de este trastorno pueden ser muy perjudiciales en el
                         desarrollo tanto academico como social, esto puede llevar a más...{" "}
                        <Link to="/" className="text-primary">
                          Más información
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">Preguntas Frecuentes</h1>
                  <Link to="/" className="flex items-center gap-2 text-primary">
                    Todas <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      ¿Porque realizar un test?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Pregunta
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Si usted tiene sospechas de que sufre del trastorno. 
                       Realizar un test podria ayudarlo a aclarar su duda...{" "}
                        <Link to="/" className="text-primary">
                          Más información
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Concecuencias del TDAH{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Info
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Las concecuencias de este trastorno pueden ser muy perjudiciales 
                      en el desarrollo tanto academico como social, esto puede llevar a más...{" "}
                        <Link to="/" className="text-primary">
                          Más información
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      ¿Cuales son los sintomas del TDAH?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Pregunta
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Los sintomas pueden variar debido a que tipo de trastorno llegue a tener y su genero. 
                        En el caso de chicos y chicas, esta comprobado de que...{" "}
                        <Link to="/" className="text-primary">
                          Más información
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      TDAH y la genetica{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Info
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Se demostro que el TDAH puede ser hereditario. Tambien puede tener mucha realacion 
                        la alimentacion de la madre en el ambarazo...{" "}
                        <Link to="/" className="text-primary">
                          Más información
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-secondary-100 p-8 rounded-lg grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Section 1 */}
              <div className="md:col-span-3">
                <form>
                  <div className="relative">
                    <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
                    <input
                      type="text"
                      className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                      placeholder="Buscar en toda la pagina"
                    />
                  </div>
                </form>
                <h1 className="text-white text-2xl my-8">Publicados</h1>
                {/* Tickets */}
                <div>
                  {/* Ticket */}
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-yellow-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        Test TDAH enfocado a niño/as (5-4 años de edad)
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Test
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        Este test es complemtamente teorico, se recomienda que se realize acompañado de un adulto.
                         No existen respuestas incorrectas.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-blue-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        Test para la familia
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        test
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        Enfocado a los padres del niño/a. Este test es completamente teorico, nos ayudara 
                        a entender ciertos aspectos para la calificacion del especialista. No existen respuestas incorrectas.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-green-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        Test dinamico para niño/as
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        test
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        Este test consta de un juego, nos ayudara a entender ciertos parametros para que el 
                        especialista determine un tratamiento.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-yellow-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        Test dinamico para pre-adolecentes
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        test
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                      Este test consta de un juego, nos ayudara a entender ciertos parametros para que el 
                        especialista determine un tratamiento
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-yellow-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        Test de atención
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        test
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        Este test consta de un video, mediante trascurre el video resivira siertas instrucciones. 
                      </p>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <div className="p-8 flex justify-center">
                  <nav className="flex items-center gap-2">
                    <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                      <RiArrowLeftSLine />
                    </button>
                    <div className="flex items-center">
                      <button className="py-2 px-4 bg-secondary-900 rounded-lg transition-colors text-gray-100">
                        1
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        2
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        3
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        4
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        5
                      </button>
                    </div>
                    <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                      <RiArrowRightSLine />
                    </button>
                  </nav>
                </div>
              </div>
              {/* Section 2 */}
              
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-secondary-100 p-8 rounded-lg">
              <div className="mb-10">
                <h1 className="text-2xl text-white mb-2">How does it work?</h1>
                <p className="text-gray-500">
                  First, a disclaimer – the entire process of writing a blog
                  post often takes more than a couple of hours, even if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Section 1 */}
                <div>
                  <h1 className="text-xl text-white mb-8">Buying Product</h1>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                </div>
                {/* Section 2 */}
                <div>
                  <h1 className="text-xl text-white mb-8">Installation</h1>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tickets;
